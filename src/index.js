import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Root} from './screens';
import store from './redux';

class App extends Component {
  render = () => {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  };
}

export default App;
