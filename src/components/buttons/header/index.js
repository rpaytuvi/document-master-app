import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Appearance, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors, Fonts} from '../../../themes';
import Styles from './styles';

class HeaderButton extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    title: '',
    onPress: () => {},
    disabled: false,
  };

  render = () => {
    const isDarkMode = Appearance.getColorScheme() === 'dark';
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
    };
    return (
      <TouchableOpacity
        disabled={this.props.disabled}
        onPress={this.props.onPress}
        style={[Styles.container, backgroundStyle]}>
        <Icon
          style={Styles.icon}
          size={Fonts.size.icons}
          name="notifications"
        />
      </TouchableOpacity>
    );
  };
}

export default HeaderButton;
