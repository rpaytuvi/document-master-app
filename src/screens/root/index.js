import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Appearance, SafeAreaView, StatusBar, View} from 'react-native';
import {DocumentsList, Footer, Header} from '../../components';
import {Colors} from '../../themes';
import Styles from './styles';
import DocumentsActions from '../../redux/reducers/documents';

class Root extends Component {
  showNotifications = () => {
    console.log('showNotifications');
  };

  showForm = () => {
    console.log('showForm');
  };

  render = () => {
    const isDarkMode = Appearance.getColorScheme() === 'dark';
    const documents = [
      {
        name: 'Hope Rod Rye',
        version: '2.6.16',
        contributors: [
          'Carlie Abbot',
          'Zoe Buckridge',
          'Carmen Kohler',
          'Americo',
          'Comier',
        ],
        attachments: ['Light Lager', 'Porter', 'Sour Ale', 'German Wheat'],
      },
      {
        name: 'Stone IPA',
        version: '3.8.11',
        contributors: ['Lencra Boyer', 'Sherman', 'Hauck'],
        attachments: ['Stout', 'Light Hybrid', 'Beer'],
      },
    ];
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
          <DocumentsList documents={documents} />
        </View>
        <Footer action={this.showForm} />
      </SafeAreaView>
    );
  };
}

const mapStateToProps = state => {
  return {
    fetching: state.documents.fetching,
    documents: state.documents.documents,
  };
};

const mapDispatchToProps = dispatch => ({
  getDocuments: () => dispatch(DocumentsActions.get()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
