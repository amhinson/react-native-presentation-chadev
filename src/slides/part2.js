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

export default [
  <Slide bgColor="tertiary">
    <Heading caps textColor="primary">
      React Native
    </Heading>
  </Slide>,

  <Slide>
    <Heading caps>Real Native App</Heading>
    <Appear>
      <Code>{'<View />'}</Code>
    </Appear>
    <Layout>
      <Fill>
        <Appear>
          <Code>UIView</Code>
        </Appear>
      </Fill>
      <Fill>
        <Appear>
          <Code>android.view</Code>
        </Appear>
      </Fill>
    </Layout>
  </Slide>
];
