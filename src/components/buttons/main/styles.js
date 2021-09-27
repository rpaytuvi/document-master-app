import {Colors, Fonts, Metrics} from '../../../themes';

const Styles = {
  container: {
    padding: Metrics.base,
    backgroundColor: Colors.blue,
    borderRadius: Metrics.buttonRadius,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  icon: {
    alignSelf: 'center',
    color: Colors.white,
    marginRight: Metrics.base,
  },
  text: {
    color: Colors.white,
    fontSize: Fonts.size.large,
    fontWeight: Fonts.weight.bold,
  },
};

export default Styles;
