import {Colors, Fonts, Metrics} from '../../themes';

const Styles = {
  container: {
    marginTop: Metrics.base,
    padding: 2 * Metrics.base,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: Metrics.borders,
    borderColor: Colors.borders,
  },
  titleContainer: {
    flex: 3,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: Fonts.size.title,
    fontWeight: Fonts.weight.bold,
  },
};

export default Styles;
