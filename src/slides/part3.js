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
  <Slide>
    <Notes>
      <NotesText>
        <Highlight>We started using React Native in 2016</Highlight>, and we've
        shipped <Highlight>numerous apps to the App Store</Highlight> over the
        past 2 years.
      </NotesText>
      <NotesText>
        It was only after jumping in that we fully realized the power in this
        framework.
      </NotesText>
    </Notes>

    <Image src={images.logo} height="170" />
    <Heading>Airship</Heading>
    <Text>&</Text>
    <Heading>React Native</Heading>
    <Image src={images.react} height="170" />
  </Slide>,

  <Slide>
    <Notes>
      <NotesText>
        We had <Highlight>2 main observations</Highlight>:
      </NotesText>
      <NotesText small>
        The developer experience was{' '}
        <Highlight>extremely similar to writing React on the web</Highlight>.
        With this, our entire team essentially became mobile developers, which
        is a HUGE deal. In the past we've only had a couple of developers who
        had any mobile experience, so their plates were always full with every
        mobile project we had lined up, but now we can literally have any
        developer on our team contribute to our mobile projects (and they
        have!).
      </NotesText>
      <NotesText small>
        * This is a pretty big deal. New developers coming in only have one
        basic framework that needs to be learned for front-end development and
        then they can immediately start working on web and mobile applications!
      </NotesText>
      <NotesText small>
        The apps we built just <Highlight>“felt” a lot more native</Highlight>{' '}
        than previous cross-platform frameworks. This is something that really
        just needs to be in your hands to get the full effect.{' '}
        <Highlight>
          And actually, you most likely have interacted with React Native on
          your mobile device and didn't even realize it.
        </Highlight>
      </NotesText>
    </Notes>
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
