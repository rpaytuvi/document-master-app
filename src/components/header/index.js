import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {HeaderButton} from '../';
import Styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    withAlert: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    title: '',
    action: () => {},
    withAlert: false,
  };

  render = () => {
    return (
      <View style={Styles.container}>
        <View style={Styles.titleContainer}>
          <Text style={Styles.title}>{this.props.title}</Text>
        </View>
        <View style={Styles.buttonContainer}>
          <HeaderButton
            onPress={this.props.action}
            withAlert={this.props.withAlert}
          />
        </View>
      </View>
    );
  };
}

export default Header;
