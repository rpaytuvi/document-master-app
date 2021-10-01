import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Appearance, SafeAreaView, StatusBar, View} from 'react-native';
import {DocumentForm, DocumentsList, Footer, Header} from '../../components';
import {Colors} from '../../themes';
import Styles from './styles';
import DocumentsActions from '../../redux/reducers/documents';

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
    };
  }

  componentDidMount = () => {
    this.props.getDocuments();
  };

  showNotifications = () => {
    console.log('showNotifications');
  };

  showForm = () => {
    this.setState({formVisible: true});
  };

  hideForm = () => {
    this.setState({formVisible: false});
  };

  render = () => {
    const isDarkMode = Appearance.getColorScheme() === 'dark';
    return (
      <SafeAreaView
        style={[
          Styles.container,
          {backgroundColor: isDarkMode ? Colors.black : Colors.white},
        ]}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Header title="Documents" action={this.showNotifications} />
        <View
          style={[
            Styles.container,
            {backgroundColor: isDarkMode ? Colors.black : Colors.lightGray},
          ]}>
          <DocumentsList
            error={this.props.error}
            documents={[...this.props.documents]}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
