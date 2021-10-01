import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {ButtonGroup} from '../../';
import Styles from './styles';

class DocumentsListHeader extends Component {
  static propTypes = {
    sortDirection: PropTypes.string.isRequired,
    selectedView: PropTypes.string.isRequired,
    toggleSortDirection: PropTypes.func.isRequired,
    changeView: PropTypes.func.isRequired,
  };

  static defaultProps = {
    sortDirection: 'desc',
    selectedView: 'list',
    toggleSortDirection: () => {},
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
            iconRight={
              this.props.sortDirection === 'desc'
                ? 'keyboard-arrow-down'
                : 'keyboard-arrow-up'
            }
            leftBigger={true}
            onPressLeft={() => {}}
            onPressRight={() => {
              this.props.toggleSortDirection();
            }}
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
