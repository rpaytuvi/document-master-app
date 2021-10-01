import {Colors, Fonts, Metrics} from '../../../themes';

const Styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modal: {
    width: '100%',
    flexDirection: 'column',
    margin: 4 * Metrics.base,
    backgroundColor: Colors.white,
    borderRadius: Metrics.buttonRadius,
    borderColor: Colors.borders,
    borderTopWidth: Metrics.borders,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 2 * Metrics.base,
  },
  title: {
    fontSize: Fonts.size.title,
    fontWeight: Fonts.weight.bold,
  },
  closeButton: {
    flex: 0,
    borderWidth: 0,
  },
  closeButtonIcon: {
    marginRight: 0,
  },
  content: {
    padding: 2 * Metrics.base,
  },
  label: {
    fontSize: Fonts.size.regular,
    marginBottom: Metrics.base,
  },
  help: {
    color: Colors.help,
    fontSize: Fonts.size.regular,
    marginVertical: Metrics.base / 2,
  },
  input: {
    padding: Metrics.base,
    backgroundColor: Colors.white,
    borderRadius: Metrics.buttonRadius,
    borderWidth: Metrics.borders,
    borderColor: Colors.borders,
    marginBottom: 2 * Metrics.base,
  },
  button: {
    flex: 0,
    width: 150,
  },
  buttonText: {
    fontSize: Fonts.size.regular,
    color: Colors.blue,
  },
  buttonIcon: {
    color: Colors.blue,
  },
};

export default Styles;
