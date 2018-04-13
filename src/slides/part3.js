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
  Slide
} from 'spectacle';

import { Code, ListItem, Text } from '../components';
import images from '../assets';

export default [
  <Slide>
    <Image src={images.logo} height="170" />
    <Heading>Airship</Heading>
    <Text>&</Text>
    <Heading>React Native</Heading>
    <Image src={images.react} height="170" />
  </Slide>,

  <Slide>
    <Heading fit caps>
      What We Found
    </Heading>
    <Appear>
      <Text padding="30px 0" textFont="quarternary" textSize={70}>
        Familiar
      </Text>
    </Appear>
    <Appear>
      <Text padding="30px 0" textFont="quarternary" textSize={70}>
        Native
      </Text>
    </Appear>
  </Slide>
];
