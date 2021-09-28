import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Appearance, Text, View} from 'react-native';
import {Colors, Fonts} from '../../../themes';
import Styles from './styles';

class DocumentLargeListElement extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    contributors: PropTypes.array,
    attachments: PropTypes.array,
  };

  static defaultProps = {
    id: '',
    name: '',
    version: '',
    contributors: [],
    attachments: [],
  };

  renderList = (title, icon, list, type) => {
    return (
      <View style={Styles.list}>
        <View style={[Styles.nameContainer, Styles.listNameContainer]}>
          <Icon style={Styles.icon} size={Fonts.size.iconsLarge} name={icon} />
          <Text style={[Styles.name, Styles.listName]}>{title}</Text>
        </View>
        <View>
          {list.map((element, i) => (
            <Text
              key={this.props.id + '-' + type + '-' + i}
              numberOfLines={1}
              style={[Styles.version, Styles.listElement]}>
              {element}
            </Text>
          ))}
        </View>
      </View>
    );
  };

  render = () => {
    const isDarkMode = Appearance.getColorScheme() === 'dark';
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
    };
    return (
      <View key={this.props.id} style={[Styles.container, backgroundStyle]}>
        <View style={Styles.nameContainer}>
          <Text style={Styles.name} numberOfLines={1}>
            {this.props.name}
          </Text>
          <Text style={Styles.version} numberOfLines={1}>
            Version {this.props.version}
          </Text>
        </View>
        <View style={Styles.listsContainer}>
          {this.renderList(
            'Contributors',
            'groups',
            this.props.contributors,
            'contributor',
          )}
          {this.renderList(
            'Attachments',
            'attachment',
            this.props.attachments,
            'attachment',
          )}
        </View>
      </View>
    );
  };
}

export default DocumentLargeListElement;
