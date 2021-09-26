import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Appearance, Text, View} from 'react-native';
import {Colors} from '../../themes';
import Styles from './styles';

class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    title: '',
  };

  render = () => {
    const isDarkMode = Appearance.getColorScheme() === 'dark';
    return (
      <View style={Styles.container}>
        <Text
          style={[
            Styles.title,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {this.props.title}
        </Text>
        <Text
          style={[
            Styles.description,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {this.props.children}
        </Text>
      </View>
    );
  };
}

export default Section;
