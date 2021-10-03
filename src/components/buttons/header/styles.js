import {Colors, Fonts, Metrics} from '../../../themes';

const Styles = {
  container: {
    padding: Metrics.base,
    backgroundColor: Colors.white,
    borderRadius: Metrics.buttonRadius,
    borderWidth: Metrics.borders,
    borderColor: Colors.borders,
  },
  icon: {
    alignSelf: 'center',
    color: Colors.icons,
  },
  alertContainer: {
    position: 'absolute',
    right: 6,
    top: 4,
    backgroundColor: Colors.blue,
    width: 1.5 * Metrics.base,
    height: 1.5 * Metrics.base,
    borderRadius: Metrics.base,
  },
  alertText: {
    color: Colors.white,
    fontSize: Fonts.size.small,
    textAlign: 'center',
  },
};

export default Styles;
