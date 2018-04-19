import React from 'react';

import { S } from 'spectacle';
import { Text } from './';

class Highlight extends React.Component {
  render() {
    return (
      <S type="bold" textColor="yellow">
        {this.props.children}
      </S>
    );
  }
}

export default Highlight;
