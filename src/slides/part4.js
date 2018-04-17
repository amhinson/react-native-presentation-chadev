import React from 'react';

import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  List,
  Notes,
  Quote,
  S,
  Slide,
  Typeface
} from 'spectacle';

import { Code, ListItem, Text } from '../components';

export default [
  <Slide>
    <Heading fit caps>
      In Production
    </Heading>
  </Slide>,

  <Slide>
    <Heading caps fit>
      "Brown-field"
    </Heading>
    <Appear>
      <div>
        <Text padding="50px 0" textFont="quarternary">
          &
        </Text>
        <Heading caps fit>
          "Green-field"
        </Heading>
      </div>
    </Appear>
  </Slide>,

  <Slide>
    <Heading fit caps>
      Everything Is Accessible
    </Heading>
    <Typeface googleFont="Bungee Shade">
      <Appear>
        <Heading caps padding="100px 0">
          Bridge
        </Heading>
      </Appear>
    </Typeface>
  </Slide>,

  <Slide>
    <Heading caps>No barriers</Heading>
  </Slide>
];
