import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Fonts} from '../../../themes';
import Styles from './styles';

class HeaderButton extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    text: '',
    icon: '',
    onPress: () => {},
    disabled: false,
  };

  render = () => {
    return (
      <TouchableOpacity
        disabled={this.props.disabled}
        style={Styles.container}
        onPress={this.props.onPress}>
        {this.props.icon !== '' && (
          <Icon
            style={Styles.icon}
            size={Fonts.size.icons}
            name={this.props.icon}
          />
        )}
        <Text style={Styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  };
}

export default HeaderButton;
