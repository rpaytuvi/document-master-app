import {Colors, Fonts, Metrics} from '../../../themes';

const Styles = {
  container: {
    paddingVertical: 2 * Metrics.base,
  },
  noMarginLeft: {
    marginLeft: 0,
  },
  emptyContainer: {
    marginTop: 10 * Metrics.base,
    padding: 2 * Metrics.base,
  },
  emptyText: {
    textAlign: 'center',
    color: Colors.help,
    fontSize: Fonts.size.title,
  },
};

export default Styles;
