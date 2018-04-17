import React from 'react';

import { Text as SpectacleText, Typeface } from 'spectacle';

class Text extends React.Component {
  render() {
    return (
      <SpectacleText
        lineHeight={1.4}
        textFont="BioRhyme"
        textColor="#077c99"
        {...this.props}
      >
        {this.props.children}
      </SpectacleText>
    );
  }
}

export default Text;
