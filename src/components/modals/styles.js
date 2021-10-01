import {Colors, Metrics, Shadows} from '../../themes';

const Styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    flexDirection: 'column',
    margin: 4 * Metrics.base,
    backgroundColor: Colors.white,
    borderRadius: Metrics.buttonRadius,
    padding: 2 * Metrics.base,
    ...Shadows.modals,
  },
  header: {
    alignItems: 'flex-end',
  },
  closeButton: {
    flex: 0,
    borderWidth: 0,
    marginBottom: 2 * Metrics.base,
  },
  closeButtonIcon: {
    marginRight: 0,
  },
};

export default Styles;
