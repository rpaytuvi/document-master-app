import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Appearance, View} from 'react-native';
import {Colors} from '../../themes';
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
    const isDarkMode = Appearance.getColorScheme() === 'dark';
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
    };
    return (
      <View style={[Styles.container, backgroundStyle]}>
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
