import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';
import Styles from './styles';

class RadioButton extends Component {
  static propTypes = {
    text: PropTypes.string,
    selected: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    customStyle: PropTypes.object,
    customTextStyle: PropTypes.object,
    customIconStyle: PropTypes.object,
  };

  static defaultProps = {
    text: '',
    selected: false,
    onPress: () => {},
    disabled: false,
    customStyle: {},
    customTextStyle: {},
    customIconStyle: {},
  };

  render = () => {
    return (
      <TouchableOpacity
        disabled={this.props.disabled}
        style={[Styles.container, this.props.customStyle]}
        onPress={this.props.onPress}>
        <View style={Styles.outerCircle}>
          {this.props.selected && <View style={Styles.innerCircle} />}
        </View>
        <Text style={[Styles.text, this.props.customTextStyle]}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  };
}

export default RadioButton;
