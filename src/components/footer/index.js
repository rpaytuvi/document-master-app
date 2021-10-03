import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {MainButton} from '../';
import Styles from './styles';

class Footer extends Component {
  static propTypes = {
    buttonText: PropTypes.string.isRequired,
    buttonIcon: PropTypes.string,
    action: PropTypes.func.isRequired,
  };

  static defaultProps = {
    buttonText: '',
    buttonIcon: '',
    action: () => {},
  };

  render = () => {
    return (
      <View style={Styles.container}>
        <MainButton
          text={this.props.buttonText}
          icon={this.props.buttonIcon}
          onPress={this.props.action}
        />
      </View>
    );
  };
}

export default Footer;
