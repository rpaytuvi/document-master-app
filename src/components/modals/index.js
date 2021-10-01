import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, View} from 'react-native';
import {GhostButton} from '../';
import Styles from './styles';

class CustomModal extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    dismiss: PropTypes.func.isRequired,
  };

  static defaultProps = {
    visible: false,
    dismiss: () => {},
  };

  render = () => {
    return (
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={this.props.visible}
        onRequestClose={() => {
          this.props.dismiss();
        }}>
        <View style={Styles.container}>
          <View style={Styles.modal}>
            <View style={Styles.header}>
              <GhostButton
                icon={'close'}
                onPress={() => {
                  this.props.dismiss();
                }}
                customStyle={Styles.closeButton}
                customIconStyle={Styles.closeButtonIcon}
              />
            </View>
            <View style={Styles.content}>{this.props.children}</View>
          </View>
        </View>
      </Modal>
    );
  };
}

export default CustomModal;
