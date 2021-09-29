import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {ButtonGroup} from '../../';
import Styles from './styles';

class DocumentsListHeader extends Component {
  static propTypes = {
    selectedView: PropTypes.string.isRequired,
    changeView: PropTypes.func.isRequired,
  };

  static defaultProps = {
    selectedView: 'list',
    changeView: () => {},
  };

  render = () => {
    return (
      <View style={Styles.container}>
        <View style={Styles.buttonGroupContainer}>
          <ButtonGroup
            textLeft={'Sort by'}
            iconLeft={'unfold-more'}
            textRight={''}
            iconRight={'keyboard-arrow-down'}
            leftBigger={true}
            onPressLeft={() => {}}
            onPressRight={() => {}}
          />
        </View>
        <View style={Styles.buttonGroupContainer}>
          <ButtonGroup
            textLeft={''}
            iconLeft={'list'}
            textRight={''}
            iconRight={'grid-view'}
            onPressLeft={() => {
              this.props.changeView('list');
            }}
            onPressRight={() => {
              this.props.changeView('grid');
            }}
            selectedIndex={this.props.selectedView === 'list' ? 0 : 1}
          />
        </View>
      </View>
    );
  };
}

export default DocumentsListHeader;
