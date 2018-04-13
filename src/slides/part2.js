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
      <div style={{ margin: 30 }}>
        <Code
          style={{
            backgroundColor: '#00CFC1',
            color: 'white',
            fontSize: '4rem'
          }}
        >
          {'<View />'}
        </Code>
      </div>
    </Appear>
    <Layout>
      <Fill>
        <Appear>
          <Code
            style={{
              backgroundColor: '#00CFC1',
              color: 'white',
              fontSize: '4rem'
            }}
          >
            UIView
          </Code>
        </Appear>
      </Fill>
      <Fill>
        <Appear>
          <Code
            style={{
              backgroundColor: '#00CFC1',
              color: 'white',
              fontSize: '4rem'
            }}
          >
            android.view
          </Code>
        </Appear>
      </Fill>
    </Layout>
  </Slide>
];
