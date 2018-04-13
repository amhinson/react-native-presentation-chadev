import React from 'react';

import { ListItem as SpectacleListItem } from 'spectacle';

class ListItem extends React.Component {
  render() {
    return (
      <SpectacleListItem margin="22px 0" {...this.props}>
        {this.props.children}
      </SpectacleListItem>
    );
  }
}

export default ListItem;
