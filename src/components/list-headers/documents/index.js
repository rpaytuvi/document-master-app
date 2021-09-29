import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View} from 'react-native';
import {GhostButton} from '../../';
import {Fonts} from '../../../themes';
import Styles from './styles';

class DocumentsListHeader extends Component {
  render = () => {
    const sortButtons = [
      {
        element: () => (
          <GhostButton
            text={'Sort by'}
            onPress={() => {}}
            icon={'unfold-more'}
            customStyle={Styles.sortButton}
            customIconStyle={{marginRight: 0}}
          />
        ),
        style: {flex: 2},
      },
      {
        element: () => <Icon style={Styles.icon} size={Fonts.size.iconsLarge} name={'keyboard-arrow-down'} />,
        style: {flex: 1},
      },
    ];
    const viewTypeButtons = [
      {
        element: () => <Icon style={Styles.icon} size={Fonts.size.iconsLarge} name={'list'} />
      },
      {
        element: () => <Icon style={Styles.icon} size={Fonts.size.iconsLarge} name={'grid-view'} />
      },
    ];
    return (
      <View style={Styles.container}>
        {/* <ButtonGroup
          containerStyle={[Styles.buttonContainer, Styles.bigButtonContainer]}
          buttons={sortButtons}
          buttonStyle={Styles.button}
          innerBorderStyle={Styles.innerBorder}
          selectedIndex={0}
          selectedButtonStyle={Styles.button}
        />
        <ButtonGroup
          containerStyle={[Styles.buttonContainer, Styles.smallButtonContainer]}
          buttons={viewTypeButtons}
          buttonStyle={Styles.button}
          innerBorderStyle={Styles.innerBorder}
        /> */}
      </View>
    );
  };
}

export default DocumentsListHeader;
