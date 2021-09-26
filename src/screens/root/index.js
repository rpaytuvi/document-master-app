import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Appearance,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import { Header, Section } from '../../components';
import { Colors } from '../../themes';
import DocumentsActions from '../../redux/reducers/documents';

class Root extends Component {

  render = () => {
    const isDarkMode = Appearance.getColorScheme() === 'dark';
    const backgroundStyle = { backgroundColor: isDarkMode ? Colors.black : Colors.white };
    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Header title="Documents" />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section title="Step One">
              Edit App.js to change this screen and then come back to see your edits.
            </Section>
            <Section title="Learn More">
              Read the docs to discover what to do next:
            </Section>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    fetching: state.documents.fetching,
    documents: state.documents.documents,
  }
};

const mapDispatchToProps = (dispatch) => ({
  getDocuments: () => dispatch(DocumentsActions.get()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
