import {Colors, Metrics} from '../../../themes';

const Styles = {
  container: {
    flexDirection: 'row',
    marginBottom: 2 * Metrics.base,
    backgroundColor: Colors.white,
  },
  buttonContainer: {
    marginHorizontal: 2 * Metrics.base,
    marginVertical: 0,
    backgroundColor: Colors.white,
    borderRadius: Metrics.buttonRadius,
    borderWidth: Metrics.borders,
    borderColor: Colors.borders,
  },
  bigButtonContainer: {
    display: 'flex',
    flex: 2,
  },
  smallButtonContainer: {
    flex: 1,
  },
  icon: {
    color: Colors.icons,
  },
  sortButton: {
    borderWidth: 0,
    padding: 0,
  },
  button: {
    background: Colors.white,
  },
  innerBorder: {
    width: Metrics.borders,
    color: Colors.borders,
  },
};

export default Styles;
