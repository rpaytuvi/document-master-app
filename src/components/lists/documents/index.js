import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import {Arrays} from '../../../utils';
import {
  CustomModal,
  DocumentLargeListElement,
  DocumentSmallListElement,
  DocumentsListHeader,
  RadioButton,
} from '../../';
import Styles from './styles';

class DocumentsList extends Component {
  static propTypes = {
    documents: PropTypes.array.isRequired,
  };

  static defaultProps = {
    documents: [],
  };

  constructor(props) {
    super(props);
    this.radioButtons = [
      {title: 'Title', field: 'title'},
      {title: 'Version', field: 'version'},
      {title: 'Created', field: 'created'},
      {title: 'Updated', field: 'updated'},
    ];
    this.state = {
      sortByVisible: false,
      sort: {
        field: 'title',
        direction: 'desc',
      },
      view: 'list',
    };
  }

  dismissModal = () => {
    this.setState({sortByVisible: false});
  };

  selectSortField = field => {
    this.setState({
      sort: {
        field,
        direction: this.state.sort.direction,
      },
    });
    this.dismissModal();
  };

  openSortBy = () => {
    this.setState({sortByVisible: true});
  };

  toggleSortDirection = () => {
    this.setState({
      sort: {
        field: this.state.sort.field,
        direction: this.state.sort.direction === 'desc' ? 'asc' : 'desc',
      },
    });
  };

  changeView = view => {
    this.setState({view});
  };

  renderItem = ({item, index}) => {
    return this.state.view === 'grid' ? (
      <DocumentSmallListElement
        id={'document-' + index}
        title={item.title}
        version={item.version}
        customStyle={index % 2 !== 0 ? Styles.noMarginLeft : {}}
      />
    ) : (
      <DocumentLargeListElement
        id={'document-' + index}
        title={item.title}
        version={item.version}
        contributors={item.contributors}
        attachments={item.attachments}
      />
    );
  };

  render = () => {
    return (
      <>
        <CustomModal
          visible={this.state.sortByVisible}
          dismiss={this.dismissModal}>
          {this.radioButtons.map((button, i) => (
            <RadioButton
              key={'radion-button-' + i}
              text={button.title}
              selected={this.state.sort.field === button.field}
              onPress={() => {
                this.selectSortField(button.field);
              }}
            />
          ))}
        </CustomModal>
        <FlatList
          key={'document-' + this.state.view}
          contentContainerStyle={Styles.container}
          ListHeaderComponentStyle={Styles.headerContainer}
          ListHeaderComponent={
            <DocumentsListHeader
              sortDirection={this.state.sort.direction}
              selectedView={this.state.view}
              openSortBy={this.openSortBy}
              toggleSortDirection={this.toggleSortDirection}
              changeView={this.changeView}
            />
          }
          numColumns={this.state.view === 'grid' ? 2 : 1}
          data={Arrays.sortByField(
            this.props.documents,
            this.state.sort.field,
            this.state.sort.direction,
          )}
          renderItem={this.renderItem}
        />
      </>
    );
  };
}

export default DocumentsList;
