import {Colors, Fonts, Metrics} from '../../../themes';

const Styles = {
  container: {
    padding: Metrics.base,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Metrics.base,
  },
  outerCircle: {
    height: 3 * Metrics.base,
    width: 3 * Metrics.base,
    borderRadius: 1.5 * Metrics.base,
    borderWidth: Metrics.borders,
    borderColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Metrics.base,
  },
  innerCircle: {
    height: 1.5 * Metrics.base,
    width: 1.5 * Metrics.base,
    borderRadius: 0.75 * Metrics.base,
    backgroundColor: Colors.blue,
  },
  text: {
    color: Colors.icons,
    fontSize: Fonts.size.regular,
    fontWeight: Fonts.weight.regular,
  },
};

export default Styles;
