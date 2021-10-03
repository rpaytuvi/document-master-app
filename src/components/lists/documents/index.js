import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FlatList, Text, View} from 'react-native';
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
    error: PropTypes.string,
    fetching: PropTypes.bool,
    onRefresh: PropTypes.func.isRequired,
  };

  static defaultProps = {
    documents: [],
    error: '',
    fetching: false,
    onRefresh: () => {},
  };

  constructor(props) {
    super(props);
    this.radioButtons = [
      {title: 'Title', field: 'Title'},
      {title: 'Version', field: 'Version'},
      {title: 'Created', field: 'CreatedAt'},
      {title: 'Updated', field: 'UpdatedAt'},
    ];
    this.state = {
      sortByVisible: false,
      sort: {
        field: 'Title',
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
        title={item.Title}
        version={item.Version}
        customStyle={index % 2 !== 0 ? Styles.noMarginLeft : {}}
      />
    ) : (
      <DocumentLargeListElement
        id={'document-' + index}
        title={item.Title}
        version={item.Version}
        contributors={item.Contributors}
        attachments={item.Attachments}
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
          ListEmptyComponent={
            <View style={Styles.emptyContainer}>
              <Text style={Styles.emptyText}>
                {this.props.error
                  ? this.props.error
                  : 'No documents to display'}
              </Text>
            </View>
          }
          numColumns={this.state.view === 'grid' ? 2 : 1}
          data={Arrays.sortByField(
            this.props.documents,
            this.state.sort.field,
            this.state.sort.direction,
          )}
          renderItem={this.renderItem}
          refreshing={this.props.fetching}
          onRefresh={this.props.onRefresh}
        />
      </>
    );
  };
}

export default DocumentsList;
