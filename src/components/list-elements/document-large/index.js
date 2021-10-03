import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text, View} from 'react-native';
import {Fonts} from '../../../themes';
import Styles from './styles';

class DocumentLargeListElement extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    contributors: PropTypes.array,
    attachments: PropTypes.array,
  };

  static defaultProps = {
    id: '',
    title: '',
    version: '',
    contributors: [],
    attachments: [],
  };

  renderList = (title, icon, list, type) => {
    if (!list) {
      return null;
    }
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

  renderLists = () => {
    if (!this.props.contributors && !this.props.attachments) {
      return null;
    }
    return (
      <View style={Styles.listsContainer}>
        {this.renderList(
          'Contributors',
          'groups',
          this.props.contributors?.map(c => c.Name),
          'contributor',
        )}
        {this.renderList(
          'Attachments',
          'attachment',
          this.props.attachments,
          'attachment',
        )}
      </View>
    );
  };

  render = () => {
    return (
      <View key={this.props.id} style={Styles.container}>
        <View style={Styles.nameContainer}>
          <Text style={Styles.name} numberOfLines={1}>
            {this.props.title}
          </Text>
          <Text style={Styles.version} numberOfLines={1}>
            Version {this.props.version}
          </Text>
        </View>
        {this.renderLists()}
      </View>
    );
  };
}

export default DocumentLargeListElement;
