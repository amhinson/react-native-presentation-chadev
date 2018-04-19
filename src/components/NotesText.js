import React from 'react';

import { Typeface } from 'spectacle';
import { Text } from './';

class NotesText extends React.Component {
  render() {
    return (
      <Typeface googleFont="Montserrat">
        <Text
          textColor="white"
          textSize={
            this.props.small
              ? '2.1rem'
              : this.props.extraSmall
                ? '1.75rem'
                : '2.66rem'
          }
          padding="10px 0"
        >
          {this.props.children}
        </Text>
      </Typeface>
    );
  }
}

export default NotesText;
