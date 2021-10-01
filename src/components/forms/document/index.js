import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, TextInput, Text, View} from 'react-native';
import {Strings} from '../../../utils';
import {Footer, GhostButton} from '../../';
import Styles from './styles';

class DocumentForm extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    dismiss: PropTypes.func.isRequired,
  };

  static defaultProps = {
    title: '',
    visible: false,
    dismiss: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      version: '',
      file: '',
    };
  }

  clearState = () => {
    this.setState({
      name: '',
      version: '',
      file: '',
    });
  };

  onShow = () => {
    this.clearState();
  };

  saveDocument = () => {
    this.props.dismiss();
    this.clearState();
  };

  render = () => {
    return (
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={this.props.visible}
        onShow={this.onShow}
        onRequestClose={() => {
          this.props.dismiss();
        }}>
        <View style={Styles.container}>
          <View style={Styles.modal}>
            <View style={Styles.header}>
              <Text style={Styles.title}>{this.props.title}</Text>
              <GhostButton
                icon={'close'}
                onPress={() => {
                  this.props.dismiss();
                }}
                customStyle={Styles.closeButton}
                customIconStyle={Styles.closeButtonIcon}
              />
            </View>
            <View style={Styles.content}>
              <Text style={Styles.label}>Name</Text>
              <TextInput
                style={Styles.input}
                onChangeText={name => {
                  this.setState({name});
                }}
                value={this.state.name}
                placeholder={'Name'}
              />
              <Text style={Styles.label}>Version</Text>
              <TextInput
                style={Styles.input}
                onChangeText={version => {
                  this.setState({version});
                }}
                value={this.state.version}
                placeholder={'Version'}
              />
              <Text style={Styles.label}>File</Text>
              <GhostButton
                text={'Choose file'}
                icon={'text-snippet'}
                onPress={() => {
                  this.setState({file: Strings.randomString() + '.abc'});
                }}
                customStyle={Styles.button}
                customTextStyle={Styles.buttonText}
                customIconStyle={Styles.buttonIcon}
              />
              {this.state.file !== '' && (
                <Text style={Styles.help}>{this.state.file}</Text>
              )}
            </View>
            <Footer buttonText={'Submit'} action={this.saveDocument} />
          </View>
        </View>
      </Modal>
    );
  };
}

export default DocumentForm;
