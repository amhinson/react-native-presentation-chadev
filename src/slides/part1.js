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
import images from '../assets';

export default [
  <Slide bgColor="tertiary">
    <Heading textColor="#edfffd">React Native</Heading>
    <Typeface googleFont="Bungee Shade">
      <Text textSize={60} textColor="#edfffd">
        For React Developers
      </Text>
    </Typeface>
  </Slide>,

  <Slide bgColor="tertiary">
    <Heading textColor="#edfffd">Alex Hinson</Heading>
    <Typeface googleFont="Bungee Shade">
      <Text textSize={60} textColor="#edfffd">
        Airship
      </Text>
    </Typeface>
    <Image src={images.logoWhite} height="170" />
  </Slide>,

  <Slide>
    <Heading caps>Mobile Apps</Heading>

    <Layout>
      <Fill>
        <Appear>
          <Heading
            textSize={60}
            textFont="quarternary"
            textColor="#007068"
            padding="30px 0"
          >
            Native
          </Heading>
        </Appear>
        <Appear>
          <Text padding="20px 0">Great UX</Text>
        </Appear>
        <Appear>
          <Text padding="20px 0">Not so great DX</Text>
        </Appear>
      </Fill>

      <Fill>
        <Appear>
          <Heading
            textSize={60}
            textFont="quarternary"
            textColor="#007068"
            padding="30px 0"
          >
            PhoneGap
          </Heading>
        </Appear>
        <Appear>
          <Text padding="20px 0">Decent DX</Text>
        </Appear>
        <Appear>
          <Text padding="20px 0">Not so great UX</Text>
        </Appear>
      </Fill>
    </Layout>
  </Slide>
];
