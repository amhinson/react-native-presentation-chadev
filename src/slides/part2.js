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

import { Code, Highlight, ListItem, NotesText, Text } from '../components';
import images from '../assets';

export default [
  <Slide bgColor="tertiary">
    <Notes>
      <NotesText>
        Mobile javascript framework developed by Facebook in 2015.
      </NotesText>
      <NotesText>
        It takes the same <Highlight>declarative & modular</Highlight> style of
        building applications with React and brings it to mobile development.
      </NotesText>
      <NotesText>
        <Highlight>Its not a WebView</Highlight> inside an app shell or some
        other “hybrid” app.
      </NotesText>
      <NotesText>
        Creates <Highlight>real native apps</Highlight>
      </NotesText>
    </Notes>

    <Heading caps textColor="#f9fdff">
      React Native
    </Heading>
    <Image src={images.react} height="170" />
  </Slide>,

  <Slide>
    <Notes>
      <NotesText>
        React Native uses the{' '}
        <Highlight>same fundamental UI building blocks</Highlight> as regular
        iOS and Android apps. You just put those building blocks together using
        JavaScript and React.
      </NotesText>
      <NotesText>
        Ex: <Highlight>RN has a concept of a "View"</Highlight> that renders a
        UIView for iOS and android.view for Android. Not just a WebView inside
        an app shell.
      </NotesText>
    </Notes>

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
