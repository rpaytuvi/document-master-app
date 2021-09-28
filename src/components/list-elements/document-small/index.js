import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Appearance, Text, View} from 'react-native';
import {Colors} from '../../../themes';
import Styles from './styles';

class DocumentSmallListElement extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
  };

  static defaultProps = {
    id: '',
    name: '',
    version: '',
  };

  render = () => {
    const isDarkMode = Appearance.getColorScheme() === 'dark';
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
    };
    return (
      <View key={this.props.id} style={[Styles.container, backgroundStyle]}>
        <Text style={Styles.name} numberOfLines={1}>
          {this.props.name}
        </Text>
        <Text style={Styles.version} numberOfLines={1}>
          Version {this.props.version}
        </Text>
      </View>
    );
  };
}

export default DocumentSmallListElement;
