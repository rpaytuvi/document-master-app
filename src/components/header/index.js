import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Appearance, Text, View} from 'react-native';
import {Colors} from '../../themes';
import {HeaderButton} from '../';
import Styles from './styles';

class Header extends Component {
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
        <View style={Styles.titleContainer}>
          <Text
            style={[
              Styles.title,
              {
                color: isDarkMode ? Colors.white : Colors.black,
              },
            ]}>
            {this.props.title}
          </Text>
        </View>
        <View style={Styles.buttonContainer}>
          <HeaderButton onPress={this.props.action} />
        </View>
      </View>
    );
  };
}

export default Header;
