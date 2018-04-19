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
        Lastly, I want to look into what the future might hold for the React
        Native ecosystem.
      </NotesText>
      <NotesText small>
        When committing to a new framework,{' '}
        <Highlight>
          we didn't want to spend valuable time learning a new technology
        </Highlight>, only for it to be obsolete within a few years. If you've
        been in web development for a while, you're definitely experienced this.
      </NotesText>
      <NotesText small>
        One of the exciting things about the React Native ecosystem is how far
        it's <Highlight>reach is spreading</Highlight> into all aspects of
        development and the
        <Highlight>stability it has</Highlight>.
      </NotesText>
      <NotesText small>
        When React came out it was revolutionary in how it changed front-end
        development.{' '}
      </NotesText>
      <NotesText small>
        When people realized that the same underlying framework could be used
        for mobile as well, React Native was born.
      </NotesText>
      <NotesText>
        <Highlight>
          People have continued to push the limits of what React Native is
          capable of.
        </Highlight>
      </NotesText>
      <NotesText>NEXT SLIDE</NotesText>
    </Notes>

    <Heading fit caps textColor="#f9fdff">
      Future Of React Native
    </Heading>
  </Slide>,

  <Slide>
    <Notes>
      <NotesText>SAY EACH LIST ITEM</NotesText>
      <NotesText>
        <Highlight>
          Not only is React Native being using in many different mediums, but
          the community is also trying to figure out a way to have one
          centralized framework
        </Highlight>{' '}
        ...
      </NotesText>
      <NotesText>NEXT SLIDE</NotesText>
      <NotesText>
        ... so that, in theory, one single project could work on the web,
        mobile, desktop, etc.
      </NotesText>
    </Notes>

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
    <Notes>
      <NotesText>
        ... so that, in theory, one single project could work on the web,
        mobile, desktop, etc.
      </NotesText>
      <NotesText small>
        Many people in the React world share the same vision of using React
        anywhere.{' '}
      </NotesText>
      <NotesText extraSmall>
        Microsoft, Airbnb and Twitter are leading the charge on this idea
      </NotesText>
      <NotesText extraSmall>
        I'm going to show a tweet by Nicolas Gallagher, formerly at Twitter and
        creator of react-native-web, which was used to create the new Twitter
        web app.{' '}
        <Highlight>
          I think this is spot on to what React Native represents for the
          future:
        </Highlight>
      </NotesText>
      <NotesText extraSmall>APPEAR SLIDE</NotesText>
      <NotesText extraSmall>
        “Backends” meaning different technologies such as mobile, web, etc.
      </NotesText>
      <NotesText extraSmall>
        <Highlight>
          We've still got a long way to go before that dream is fully realized,
          but its exciting to see the future of what people are working on and
          their vision behind it.
        </Highlight>
      </NotesText>
      <NotesText small>
        With the possibilities of using the core functionality of React & React
        Native in all of these places and the fact that a lot of large companies
        are investing into the technology, we felt like it was a wise decision
        to jump in, and we haven't looked back since.
      </NotesText>
    </Notes>

    <Heading fit caps>
      One centralized framework
    </Heading>
    <Appear>
      <Image src={images.tweet} height="400" />
    </Appear>
  </Slide>,

  <Slide>
    <Notes>
      <NotesText extraSmall>Chadev</NotesText>
      <NotesText extraSmall>Airship</NotesText>
      <NotesText extraSmall>Everyone here</NotesText>
      <NotesText extraSmall>
        Shameless plug: Airship is hiring remote developers right now, so talk
        to me afterwards if you're interested!
      </NotesText>
    </Notes>

    <Heading caps>Thanks</Heading>
    <Layout>
      <Fill>
        <Image src={images.logo} height="400" />
      </Fill>
      <Fill>
        <Image src={images.react} height="400" />
      </Fill>
    </Layout>
    <Layout>
      <Fill>
        <Image src={images.chadev} width="400" />
      </Fill>
    </Layout>
  </Slide>
];
