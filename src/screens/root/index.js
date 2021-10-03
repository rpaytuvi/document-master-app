import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Alert, SafeAreaView, StatusBar, View} from 'react-native';
import {DocumentForm, DocumentsList, Footer, Header} from '../../components';
import {Notifications} from '../../services';
import {Datetime} from '../../utils';
import Styles from './styles';
import DocumentsActions from '../../redux/reducers/documents';

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      lastNotification: null,
    };
  }

  componentDidMount = () => {
    this.getDocuments();
    Notifications.onmessage = this.handleNewNotification;
  };

  getDocuments = () => {
    this.props.getDocuments();
  };

  handleNewNotification = message => {
    this.setState({lastNotification: JSON.parse(message.data)});
  };

  showNotifications = () => {
    const {DocumentTitle, Timestamp, UserName} = this.state.lastNotification;
    const title = 'New document created';
    const message = `
      Name: ${DocumentTitle}
      Created by: ${UserName}
      At: ${Datetime.relative(Timestamp)}
    `;
    Alert.alert(title, message, [
      {
        text: 'Got it',
        onPress: () => {},
        style: 'cancel',
      },
    ]);
    this.setState({lastNotification: null});
  };

  showForm = () => {
    this.setState({formVisible: true});
  };

  saveDocument = document => {
    this.props.saveDocument(document);
  };

  hideForm = () => {
    this.setState({formVisible: false});
  };

  render = () => {
    return (
      <SafeAreaView style={Styles.container}>
        <StatusBar barStyle={'dark-content'} />
        <Header
          title={'Documents'}
          action={this.showNotifications}
          withAlert={this.state.lastNotification ? true : false}
        />
        <View style={Styles.container}>
          <DocumentsList
            fetching={this.props.fetching}
            error={this.props.error}
            documents={[...this.props.documents]}
            onRefresh={this.getDocuments}
          />
        </View>
        <Footer
          buttonText={'Add document'}
          buttonIcon={'add'}
          action={this.showForm}
        />
        <DocumentForm
          title={'Add document'}
          visible={this.state.formVisible}
          saveDocument={this.saveDocument}
          dismiss={this.hideForm}
        />
      </SafeAreaView>
    );
  };
}

const mapStateToProps = state => {
  return {
    fetching: state.documents.fetching,
    documents: state.documents.documents,
    error: state.documents.error,
  };
};

const mapDispatchToProps = dispatch => ({
  getDocuments: () => dispatch(DocumentsActions.get()),
  saveDocument: document => dispatch(DocumentsActions.save(document)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
