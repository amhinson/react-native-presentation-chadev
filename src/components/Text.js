import React from 'react';

import { Text as SpectacleText, Typeface } from 'spectacle';

class Text extends React.Component {
  render() {
    return (
      <SpectacleText
        lineHeight={1.4}
        textFont="BioRhyme"
        textColor="#007068"
        {...this.props}
      >
        {this.props.children}
      </SpectacleText>
    );
  }
}

export default Text;
