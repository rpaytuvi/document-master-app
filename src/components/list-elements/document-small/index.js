import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import Styles from './styles';

class DocumentSmallListElement extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    customStyle: PropTypes.object,
  };

  static defaultProps = {
    id: '',
    title: '',
    version: '',
    customStyle: {},
  };

  render = () => {
    return (
      <View
        key={this.props.id}
        style={[Styles.container, this.props.customStyle]}>
        <Text style={Styles.name} numberOfLines={1}>
          {this.props.title}
        </Text>
        <Text style={Styles.version} numberOfLines={1}>
          Version {this.props.version}
        </Text>
      </View>
    );
  };
}

export default DocumentSmallListElement;
