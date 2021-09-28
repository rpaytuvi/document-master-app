import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Root} from './screens';
import store from './redux';

class App extends Component {
  render = () => {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <Root />
        </Provider>
      </SafeAreaProvider>
    );
  };
}

export default App;
