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

export default [
  <Slide>
    <Notes>
      <NotesText>
        There are a lot of very large companies using{' '}
        <Highlight>React Native in production</Highlight>
        right now.
      </NotesText>
      <NotesText>
        <Highlight>
          Facebook, Airbnb, Instagram, Tesla, Amazon, Walmart, Microsoft
        </Highlight>{' '}
        just to name a few.
      </NotesText>
      <NotesText>
        Although most of those apps{' '}
        <Highlight>aren't 100% React Native apps</Highlight>, there are large
        sections of the apps that are.
      </NotesText>
      <NotesText>
        These companies have apps that have{' '}
        <Highlight>
          been around for a lot longer than React Native has been on the scene
        </Highlight>, so it just wouldn't make sense to completely scrap their
        old app and start new.
      </NotesText>
      <NotesText>
        This leads into an{' '}
        <Highlight>interesting distinction with RN</Highlight>.
      </NotesText>
      <NotesText>
        It can be used to within an existing native application,{' '}
        <Highlight>AKA a “brown-field” application.</Highlight>
      </NotesText>
    </Notes>

    <Heading fit caps>
      In Production
    </Heading>
  </Slide>,

  <Slide>
    <Notes>
      <NotesText>
        It can be used to within an existing native application,{' '}
        <Highlight>AKA a “brown-field” application.</Highlight>
      </NotesText>
      <NotesText>
        This creates the unique ability to add the same functionality to{' '}
        <Highlight>existing iOS and Android apps</Highlight>, but only have to
        write it once in JS.
      </NotesText>
      <NotesText>
        Most of the projects our team have worked on have been{' '}
        <Highlight>“green-field” apps</Highlight>, meaning we've started them
        from scratch in RN.
      </NotesText>
      <NotesText>
        However, this doesn't mean that you're{' '}
        <Highlight>“locked in”</Highlight> to only a feature set that RN
        provides.
      </NotesText>
      <NotesText small>
        Here is an important piece about React Native:
      </NotesText>
      <NotesText small>NEXT SLIDE</NotesText>
      <NotesText small>
        <Highlight>
          Everything that is available to native is accessible.
        </Highlight>
      </NotesText>
    </Notes>

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
    <Notes>
      <NotesText small>
        Here is an important piece about React Native:{' '}
        <Highlight>
          Everything that is available to native is accessible.
        </Highlight>
      </NotesText>
      <NotesText small>
        RN doesn't build an API for every native feature,{' '}
        <Highlight>
          but they did build a way to make anything available to the JS side of
          the app.
        </Highlight>
      </NotesText>
      <NotesText>APPEAR SLIDE</NotesText>
      <NotesText small>
        <Highlight>There is a concept of a “bridge”</Highlight> built into RN
        that facilitates the communication between the JS side and the native
        side. This is how the JS is able to render UI natively, and also how the
        native side can send native events to the JS side.
      </NotesText>
      <NotesText small>
        This bridge is also accessible to be used with{' '}
        <Highlight>custom native code</Highlight>, so as a developer, you can
        easily access anything you need natively.
      </NotesText>
      <NotesText extraSmall>
        <Highlight>When Face ID came out</Highlight>, we were in the middle of
        development for a customer's mobile app. They immediately wanted to have
        it in their app. With other frameworks, we might have had our hands tied
        by the maintainers of that framework until they built the feature or
        plugin. With RN, we had the ability to immediately start experimenting
        with that native functionality in our app. It actually turned out that
        there was someone with a working library within weeks of Face ID being
        announced, so we were able to add that into our project fairly easily.
      </NotesText>
    </Notes>

    <Heading fit caps>
      Everything Is Accessible
    </Heading>
    <Typeface googleFont="Bungee Shade">
      <Appear>
        <Heading caps padding="100px 0" textColor="#077c99">
          Bridge
        </Heading>
      </Appear>
    </Typeface>
  </Slide>,

  <Slide>
    <Notes>
      <NotesText>
        <Highlight>
          This goes to show that there are basically no barriers
        </Highlight>{' '}
        between what a native app can do and what is possible in your RN app.
      </NotesText>
      <NotesText>
        If you know how to add the functionality natively, you can do it in a RN
        app as well.
      </NotesText>
    </Notes>

    <Heading caps>No barriers</Heading>
  </Slide>
];
