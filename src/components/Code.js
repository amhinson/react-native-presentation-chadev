import React from 'react';

import { Code as SpectacleCode } from 'spectacle';

class Code extends React.Component {
  render() {
    return (
      <SpectacleCode {...this.props} bgColor="#d1d1d1" textColor="#5b5b5b">
        {this.props.children}
      </SpectacleCode>
    );
  }
}

export default Code;
