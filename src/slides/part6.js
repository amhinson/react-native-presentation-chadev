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
  <Slide bgColor="tertiary">
    <Heading fit caps textColor="#f9fdff">
      Future Of React Native
    </Heading>
  </Slide>,

  <Slide>
    <Text padding="30px 0" bold>
      VR & AR
    </Text>
    <Text padding="30px 0" bold>
      Windows & Mac
    </Text>
    <Text padding="30px 0" bold>
      Music
    </Text>
    <Text padding="30px 0" bold>
      XBox One
    </Text>
    <Text padding="30px 0" bold>
      Apple TV & Android TV
    </Text>
  </Slide>,

  <Slide>
    <Heading fit caps>
      One centralized framework
    </Heading>
    <Appear>
      <Image src={images.tweet} height="400" />
    </Appear>
  </Slide>,

  <Slide>
    <Heading caps>Thanks</Heading>
    <Layout>
      <Fill>
        <Image src={images.logo} height="400" />
      </Fill>
      <Fill>
        <Image src={images.react} height="400" />
      </Fill>
    </Layout>
  </Slide>
];
