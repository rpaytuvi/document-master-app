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
      viewType: 'list',
    };
  }

  renderItem = ({item, index}) => {
    return this.state.viewType === 'grid' ? (
      <DocumentSmallListElement
        id={'document-' + index}
        name={item.name}
        version={item.version}
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
        contentContainerStyle={Styles.container}
        ListHeaderComponentStyle={Styles.headerContainer}
        ListHeaderComponent={<DocumentsListHeader />}
        numColumns={this.state.viewType === 'grid' ? 2 : 1}
        data={this.props.documents}
        renderItem={this.renderItem}
      />
    );
  };
}

export default DocumentsList;
