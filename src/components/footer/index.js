import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Appearance, View} from 'react-native';
import {Colors} from '../../themes';
import {MainButton} from '../';
import Styles from './styles';

class Footer extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  };

  static defaultProps = {
    title: '',
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
          text="Add document"
          icon="add"
          onPress={this.props.action}
        />
      </View>
    );
  };
}

export default Footer;
