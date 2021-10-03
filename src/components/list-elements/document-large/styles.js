import {Colors, Fonts, Metrics, Shadows} from '../../../themes';

const Styles = {
  container: {
    marginHorizontal: 2 * Metrics.base,
    marginBottom: 2 * Metrics.base,
    padding: 2 * Metrics.base,
    borderRadius: Metrics.buttonRadius,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    ...Shadows.listElement,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  listNameContainer: {
    alignItems: 'center',
    marginBottom: Metrics.base / 2,
  },
  name: {
    color: Colors.text,
    fontSize: Fonts.size.large,
    fontWeight: Fonts.weight.bold,
    marginRight: Metrics.base,
    maxWidth: 200,
  },
  listName: {
    fontSize: Fonts.size.regular,
  },
  version: {
    color: Colors.help,
    fontSize: Fonts.size.regular,
  },
  listsContainer: {
    flexDirection: 'row',
    marginTop: 2 * Metrics.base,
  },
  list: {
    flex: 1,
  },
  icon: {
    color: Colors.icons,
    marginRight: Metrics.base,
  },
  listElement: {
    marginTop: Metrics.base,
  },
};

export default Styles;
