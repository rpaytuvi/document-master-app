import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Fonts} from '../../../themes';
import Styles from './styles';

class HeaderButton extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    withAlert: PropTypes.bool,
  };

  static defaultProps = {
    onPress: () => {},
    disabled: false,
    withAlert: false,
  };

  render = () => {
    return (
      <TouchableOpacity
        disabled={this.props.disabled}
        onPress={this.props.onPress}
        style={Styles.container}>
        {this.props.withAlert && (
          <View style={Styles.alertContainer}>
            <Text style={Styles.alertText}>1</Text>
          </View>
        )}
        <Icon
          style={Styles.icon}
          size={Fonts.size.icons}
          name={'notifications'}
        />
      </TouchableOpacity>
    );
  };
}

export default HeaderButton;
