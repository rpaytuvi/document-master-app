import {Colors, Fonts, Metrics} from '../../../themes';

const Styles = {
  container: {
    padding: Metrics.base,
    backgroundColor: Colors.white,
    borderRadius: Metrics.buttonRadius,
    borderWidth: Metrics.borders,
    borderColor: Colors.borders,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  icon: {
    alignSelf: 'center',
    color: Colors.icons,
    marginRight: Metrics.base,
  },
  text: {
    color: Colors.icons,
    fontSize: Fonts.size.large,
    fontWeight: Fonts.weight.bold,
  },
};

export default Styles;
