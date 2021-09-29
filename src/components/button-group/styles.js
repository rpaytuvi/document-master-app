import {Colors, Fonts} from '../../themes';

const Styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  buttonContainer: {
    flex: 1,
  },
  buttonContainerBig: {
    flex: 2,
  },
  leftButton: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  rightButton: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeftWidth: 0,
  },
  buttonText: {
    fontSize: Fonts.size.regular,
  },
  buttonSelected: {
    backgroundColor: Colors.white,
  },
  buttonUnselected: {
    backgroundColor: Colors.lightGray,
  },
  buttonIcon: {
    marginRight: 0,
  },
  buttonIconSelected: {
    color: Colors.blue,
  },
};

export default Styles;
