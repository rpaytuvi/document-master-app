import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Fonts} from '../../../themes';
import Styles from './styles';

class GhostButton extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    customStyle: PropTypes.object,
    customIconStyle: PropTypes.object,
  };

  static defaultProps = {
    text: '',
    icon: '',
    onPress: () => {},
    disabled: false,
    customStyle: {},
    customIconStyle: {},
  };

  render = () => {
    return (
      <TouchableOpacity
        disabled={this.props.disabled}
        style={[Styles.container, this.props.customStyle]}
        onPress={this.props.onPress}>
        {this.props.icon !== '' && (
          <Icon
            style={[Styles.icon, this.props.customIconStyle]}
            size={Fonts.size.icons}
            name={this.props.icon}
          />
        )}
        <Text style={Styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  };
}

export default GhostButton;
