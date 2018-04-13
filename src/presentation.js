// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from 'spectacle';

import part1 from './slides/part1';
import part2 from './slides/part2';
import part3 from './slides/part3';
import part4 from './slides/part4';
import part5 from './slides/part5';
import part6 from './slides/part6';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#CEFFFA',
    secondary: '#00CFC1',
    tertiary: '#00CFC1',
    quarternary: '#00CFC1'
  },
  {
    primary: { name: 'Bungee', googleFont: true },
    secondary: { name: 'BioRhyme', googleFont: true },
    quarternary: { name: 'Bungee Shade', googleFont: true }
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        contentWidth="1300"
        controls={false}
        progress="bar"
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
      >
        {part1}
        {part2}
        {part3}
        {part4}
        {part5}
        {part6}
      </Deck>
    );
  }
}
