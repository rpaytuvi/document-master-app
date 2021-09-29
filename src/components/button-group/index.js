import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {GhostButton} from '../';
import Styles from './styles';

class ButtonGroup extends Component {
  static propTypes = {
    textLeft: PropTypes.string,
    iconLeft: PropTypes.string,
    textRight: PropTypes.string,
    iconRight: PropTypes.string,
    onPressLeft: PropTypes.func.isRequired,
    onPressRight: PropTypes.func.isRequired,
    leftBigger: PropTypes.bool,
    selectedIndex: PropTypes.number,
  };

  static defaultProps = {
    textLeft: '',
    iconLeft: '',
    textRight: PropTypes.string,
    iconRight: PropTypes.string,
    onPressLeft: () => {},
    onPressRight: () => {},
    leftBigger: false,
    selectedIndex: -1,
  };

  render = () => {
    return (
      <View style={Styles.container}>
        <View
          style={
            this.props.leftBigger
              ? Styles.buttonContainerBig
              : Styles.buttonContainer
          }>
          <GhostButton
            text={this.props.textLeft}
            icon={this.props.iconLeft}
            onPress={this.props.onPressLeft}
            customStyle={Object.assign(
              {},
              Styles.leftButton,
              this.props.selectedIndex > -1 ? Styles.buttonUnselected : {},
              this.props.selectedIndex === 0 ? Styles.buttonSelected : {},
            )}
            customTextStyle={Styles.buttonText}
            customIconStyle={Object.assign(
              {},
              Styles.buttonIcon,
              this.props.selectedIndex === 0 ? Styles.buttonIconSelected : {},
            )}
          />
        </View>
        <View style={Styles.buttonContainer}>
          <GhostButton
            text={this.props.textRight}
            icon={this.props.iconRight}
            onPress={this.props.onPressRight}
            customStyle={Object.assign(
              {},
              Styles.rightButton,
              this.props.selectedIndex > -1 ? Styles.buttonUnselected : {},
              this.props.selectedIndex === 1 ? Styles.buttonSelected : {},
            )}
            customTextStyle={Styles.buttonText}
            customIconStyle={Object.assign(
              {},
              Styles.buttonIcon,
              this.props.selectedIndex === 1 ? Styles.buttonIconSelected : {},
            )}
          />
        </View>
      </View>
    );
  };
}

export default ButtonGroup;
