import {Colors, Fonts, Metrics, Shadows} from '../../../themes';

const Styles = {
  container: {
    flex: 1,
    marginHorizontal: 2 * Metrics.base,
    marginBottom: 2 * Metrics.base,
    padding: 2 * Metrics.base,
    borderRadius: Metrics.buttonRadius,
    flexDirection: 'column',
    justifyContent: 'center',
    ...Shadows.listElement,
  },
  name: {
    color: Colors.text,
    fontSize: Fonts.size.large,
    fontWeight: Fonts.weight.bold,
    marginBottom: Metrics.base,
  },
  version: {
    color: Colors.help,
    fontSize: Fonts.size.regular,
  },
};

export default Styles;
