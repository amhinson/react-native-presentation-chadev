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
    <Heading caps textColor="#f9fdff">
      React Native
    </Heading>
    <Image src={images.react} height="170" />
  </Slide>,

  <Slide>
    <Heading caps>Real Native App</Heading>
    <Appear>
      <div style={{ margin: 30 }}>
        <Code
          style={{
            backgroundColor: '#077c99',
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
              backgroundColor: '#077c99',
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
              backgroundColor: '#077c99',
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
