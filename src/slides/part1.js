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

import { Code, Highlight, ListItem, NotesText, Text } from '../components';
import images from '../assets';

export default [
  <Slide bgColor="tertiary">
    <Heading fit textColor="#f9fdff">
      React Native
    </Heading>
    <Typeface googleFont="Bungee Shade">
      <Text fit textSize={60} textColor="#f9fdff">
        For React Developers
      </Text>
    </Typeface>
  </Slide>,

  <Slide bgColor="tertiary">
    <Notes>
      <NotesText>
        I'm Alex Hinson. I'm a software developer at an incredible company
        called Airship based in Birmingham. I used to live in Birmingham, but my
        wife and I just recently moved up here simply because we've always loved
        the city of Chattanooga and{' '}
        <Highlight>
          Airship is extremely supportive of having a remote-first team.
        </Highlight>
      </NotesText>
      <NotesText>
        At Airship, we build custom web and mobile applications for a wide range
        of companies.
      </NotesText>
      <NotesText>
        One of the benefits of working at a company like that is we get to try
        out a lot of the newer technologies. A{' '}
        <Highlight>common problem</Highlight> we experienced was creating{' '}
        <Highlight>great experiences for mobile apps.</Highlight>
      </NotesText>
    </Notes>
    <Heading textColor="#f9fdff">Alex Hinson</Heading>
    <Typeface googleFont="Bungee Shade">
      <Text textSize={60} textColor="#f9fdff">
        Airship
      </Text>
    </Typeface>
    <Image src={images.logoWhite} height="170" />
  </Slide>,

  <Slide>
    <Notes>
      <NotesText>
        We've gone the <Highlight>native route</Highlight>
      </NotesText>
      <NotesText>* Has great UX</NotesText>
      <NotesText>
        * But not great DX becuase we have to build the same app twice
      </NotesText>

      <NotesText>
        We've also done a bit with <Highlight>PhoneGap</Highlight>, a hybrid
        solution that lets you write HTML5 and use it inside of a WebView inside
        an app shell.
      </NotesText>
      <NotesText>* Has a decent DX</NotesText>
      <NotesText>
        * But not great UX because of the native interaction. Users have an
        expectation to how they interact with their mobile apps.
      </NotesText>
      <NotesText>
        These drawbacks kept us looking for a better solution, which is how we
        ended up looking into <Highlight>React Native.</Highlight>
      </NotesText>
    </Notes>
    <Heading caps>Mobile Apps</Heading>

    <Layout>
      <Fill>
        <Appear>
          <Heading
            textSize={60}
            textFont="quarternary"
            textColor="#077c99"
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
            textColor="#077c99"
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
