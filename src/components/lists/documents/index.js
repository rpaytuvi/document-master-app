import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import {
  DocumentLargeListElement,
  DocumentSmallListElement,
  DocumentsListHeader,
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
    this.state = {
      sort: {
        field: 'name',
        order: 'asc',
      },
      view: 'list',
    };
  }

  changeView = view => {
    this.setState({view});
  };

  renderItem = ({item, index}) => {
    return this.state.view === 'grid' ? (
      <DocumentSmallListElement
        id={'document-' + index}
        name={item.name}
        version={item.version}
        customStyle={index % 2 !== 0 ? Styles.noMarginLeft : {}}
      />
    ) : (
      <DocumentLargeListElement
        id={'document-' + index}
        name={item.name}
        version={item.version}
        contributors={item.contributors}
        attachments={item.attachments}
      />
    );
  };

  render = () => {
    return (
      <FlatList
        key={'document-' + this.state.view}
        contentContainerStyle={Styles.container}
        ListHeaderComponentStyle={Styles.headerContainer}
        ListHeaderComponent={
          <DocumentsListHeader
            selectedView={this.state.view}
            changeView={this.changeView}
          />
        }
        numColumns={this.state.view === 'grid' ? 2 : 1}
        data={this.props.documents}
        renderItem={this.renderItem}
      />
    );
  };
}

export default DocumentsList;
