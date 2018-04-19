/* eslint import/no-webpack-loader-syntax: 0 */

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
  Magic,
  Notes,
  Quote,
  S,
  Slide,
  Typeface
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import Terminal from 'spectacle-terminal';

import { Code, Highlight, ListItem, NotesText, Text } from '../components';
import images from '../assets';

const buildingBlocks = `<View />        ===   <div />
<Text>          ===   <p> | <h1> | <span> | etc.
<Image />       ===   <img />
<TextInput />   ===   <input />
`;

const customStyling = `const styles = StyleSheet.create({
  headerContainer: {
    height: 70,
    paddingTop: 10,
    backgroundColor: '#102c52',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});`;

const flexbox = `<View style={{ flex: 1 }}>
  <Header />
  <View
    style={{
      flex: 1,
      backgroundColor: 'powderblue'
    }}
  />
  <View
    style={{
      flex: 1,
      backgroundColor: 'deepskyblue'
    }}
  />
  <View
    style={{
      flex: 2,
      backgroundColor: 'dodgerblue'
    }}
  />
</View>`;

const platformSpecific = `componentDidMount() {
  if (Platform.OS === 'android') {
    doAndroidStuff()
  }
}

...

matchDetailContainer: {
  borderWidth: Platform.OS === 'ios' ? 1 : 2
}
`;

const touchables = `<TouchableOpacity>
<TouchableHighlight>
<TouchableOpacity>`;

const touchableOpacity = `<TouchableOpacity
  onPress={doSomething}
  style={styles.container}
>
  <Text style={styles.text}>
    {this.props.info}
  </Text>
</TouchableOpacity>`;

const animations = `animate = animation =>
  Animated.timing(animation, {
    toValue: 1,
    duration: 900,
    useNativeDriver: true
  });`;

export default [
  <Slide bgColor="tertiary">
    <Notes>
      <NotesText>
        The{' '}
        <Highlight>
          bridge is a fairly new concept if you're coming from the React world
        </Highlight>, however there is a lot to React Native that we can easily
        compare with what you already know in React. Here are a{' '}
        <Highlight>few important distinctions.</Highlight>
      </NotesText>
    </Notes>

    <Heading fit caps textColor="#f9fdff">
      Compare with React
    </Heading>
  </Slide>,

  <Slide>
    <Notes>
      <NotesText>iOS</NotesText>
      <NotesText>* Can't build on Windows</NotesText>
      <NotesText>Android</NotesText>
      <NotesText>* Works on both Mac & Windows</NotesText>
    </Notes>

    <Heading caps>Setup</Heading>
    <Layout>
      <Fill>
        <Appear>
          <Text padding="20px 0" textSize={50}>
            Xcode
          </Text>
        </Appear>
      </Fill>
      <Fill>
        <Appear>
          <Text padding="20px 0" textSize={50}>
            Android Studio
          </Text>
        </Appear>
      </Fill>
    </Layout>
  </Slide>,

  <Slide>
    <Notes>
      <NotesText>
        React Native ships with its own bundler, so there is no need for
        managing a bundler like Webpack.
      </NotesText>
      <NotesText>
        This includes ES6 and some ES7 features built-in, so no need for adding
        the babel plugins.
      </NotesText>
    </Notes>

    <Heading caps>Bundling</Heading>
  </Slide>,

  <Slide>
    <Notes>
      <NotesText>
        React Native has its own <Highlight>CLI tool</Highlight> to help with a
        number of tasks. Here we are creating a new project with react-native
        init and then running it with react-native run-ios.
      </NotesText>
      <NotesText>
        This will use the iOS simulator by default, but it can also be run on
        your physical device.
      </NotesText>
      <NotesText>
        For Android you would just run react-native run-android and it would run
        on the Android emulator or a physical device that is plugged in.
      </NotesText>
    </Notes>

    <Heading caps>Create & Run</Heading>
    <Image src={images.terminal} width="1500" />
  </Slide>,

  <Slide>
    <Notes>
      <NotesText>
        Instead of rendering <Highlight>HTML elements to the DOM</Highlight>,
        React Native is rendering{' '}
        <Highlight>native elements in the UI</Highlight>.
      </NotesText>
      <NotesText>
        To create the native elements, RN is comprised of a set of{' '}
        <Highlight>primitive components</Highlight> that everything is built
        from:
      </NotesText>
      <NotesText>
        These are essentially the <Highlight>“Building Blocks”</Highlight> on
        your application.
      </NotesText>
      <NotesText>APPEAR SLIDE & TALK ABOUT EACH</NotesText>
      <NotesText>
        These are <Highlight>just a few</Highlight>, but there are many more
        primitive components from RN available.
      </NotesText>
      <NotesText>
        <Highlight>NOTE: Due to RN not using web elements</Highlight>, most UI
        libraries for React will not work unless they have their own RN
        equivalent built-in to the library.
      </NotesText>
    </Notes>

    <Heading caps>Building Blocks</Heading>
    <Appear>
      <CodePane
        theme="external"
        lang="jsx"
        source={buildingBlocks}
        textSize="40px"
      />
    </Appear>
  </Slide>,

  <Slide>
    <Notes>
      <NotesText>
        <Highlight>
          For styling, there is no special language or syntax needed.
        </Highlight>{' '}
        You just style your application using JavaScript.
      </NotesText>
      <NotesText>
        All of the core components accept a{' '}
        <Highlight>prop named style</Highlight>. The style names and values
        usually match how CSS works on the web, except names are written using
        camel casing rather than using a hyphen.
      </NotesText>
      <NotesText>APPEAR SLIDE</NotesText>
      <NotesText>
        <Highlight>Not all CSS properties are supported</Highlight>, but the
        majority are.
      </NotesText>
      <NotesText>
        Components will have different style properties that can be applied to
        them.
      </NotesText>
      <NotesText>NEXT SLIDE about Flexbox</NotesText>
    </Notes>

    <Heading caps>Styling</Heading>
    <Appear>
      <div>
        <Layout>
          <Fill>
            <CodePane
              theme="external"
              lang="jsx"
              source={customStyling}
              textSize="27px"
            />
          </Fill>
          <Fill>
            <Image src={images.header} height="600" />
          </Fill>
        </Layout>
      </div>
    </Appear>
  </Slide>,

  <Slide>
    <Notes>
      <NotesText>
        React Native also takes advantage of using Flexbox for layout and
        positioning.
      </NotesText>
      <NotesText>
        <Highlight>This works exactly how Flexbox is used on the web</Highlight>,
        so you don't have to learn some new pattern for layout.
      </NotesText>
      <NotesText>
        This is the <Highlight>preferred way</Highlight> of handling layout to
        provide <Highlight>consistent UI on different screen sizes.</Highlight>
      </NotesText>
      <NotesText>
        <Highlight>*NOTE***</Highlight> NO NEED TO EXPLAIN HOW FLEXBOX WORKS
      </NotesText>
    </Notes>

    <div>
      <Layout>
        <Fill>
          <CodePane
            theme="external"
            lang="jsx"
            source={flexbox}
            textSize="20px"
          />
        </Fill>
        <Fill>
          <Image src={images.flexbox} height="600" />
        </Fill>
      </Layout>
    </div>
  </Slide>,

  <Slide>
    <Notes>
      <NotesText>
        iOS and Android native apps typically{' '}
        <Highlight>look and feel relatively different</Highlight>, so you can
        use the Platform module to handle{' '}
        <Highlight>specific functionality and appearance</Highlight> for each.
      </NotesText>
      <NotesText>APPEAR SLIDE</NotesText>
      <NotesText>
        In the code I can check what{' '}
        <Highlight>
          type of device it is and do specific actions with that
        </Highlight>, whether it is something extra that I want to happen on an
        Android device or if I want to apply a specific style for iOS only.
      </NotesText>
      <NotesText>
        With that said,{' '}
        <Highlight>
          RN will absolutely work without any special attention to the platform
        </Highlight>. The decision is up to you.
      </NotesText>
    </Notes>

    <Heading fit caps>
      Platform-Specific
    </Heading>
    <Appear>
      <CodePane
        theme="external"
        lang="jsx"
        source={platformSpecific}
        textSize="32px"
      />
    </Appear>
  </Slide>,

  <Slide>
    <Notes>
      <NotesText>
        As I mentioned earlier,{' '}
        <Highlight>
          users have some level of expectation to how they interact with their
          apps
        </Highlight>, and <Highlight>native apps sets the standard</Highlight>{' '}
        for what is expected.
      </NotesText>
      <NotesText>
        React Native has a{' '}
        <Highlight>
          couple of ways to tie into those native interactions
        </Highlight>{' '}
        to make everything feel and look more native.
      </NotesText>
    </Notes>

    <Heading fit caps>
      User Interaction
    </Heading>
  </Slide>,

  <Slide>
    <Notes>
      <NotesText>
        With RN, <Highlight>there are no anchor tags</Highlight>, but{' '}
        <Highlight>anything can become clickable</Highlight> by using one of the
        Touchable components.
      </NotesText>
      <NotesText>APPEAR SLIDE</NotesText>
      <NotesText>
        {`<TouchableOpacity> <TouchableHighlight> <TouchableWithoutFeedback>`}
      </NotesText>
      <NotesText>
        <Highlight>They behave visually as their names imply.</Highlight>
      </NotesText>
      <NotesText>APPEAR SLIDE</NotesText>
      <NotesText>APPEAR SLIDE AGAIN</NotesText>
      <NotesText>I'm using a TouchableOpacity in the example.</NotesText>
      <NotesText>
        These all <Highlight>also have onPress</Highlight> event handlers.
      </NotesText>
    </Notes>

    <Heading textSize={70} caps>
      Touch
    </Heading>
    <div>
      <Layout>
        <Fill>
          <Appear>
            <CodePane
              theme="external"
              lang="jsx"
              source={touchables}
              textSize="30px"
              margin="0 0 20px"
            />
          </Appear>
          <Appear>
            <CodePane
              theme="external"
              lang="jsx"
              source={touchableOpacity}
              textSize="34px"
            />
          </Appear>
        </Fill>
        <Fill>
          <Appear>
            <Image src={images.touchableOpacity} height="600" />
          </Appear>
        </Fill>
      </Layout>
    </div>
  </Slide>,

  <Slide>
    <Notes>
      <NotesText>
        RN comes by default with a very{' '}
        <Highlight>robust animation library</Highlight> called Animated that
        provides pretty much any detail of animation needed.
      </NotesText>
      <NotesText>APPEAR SLIDE</NotesText>
      <NotesText>
        This is very similar to the Velocity.js library for the web.
      </NotesText>
      <NotesText>
        This example{' '}
        <Highlight>
          shows how you can create animations in a very declarative way.
        </Highlight>
      </NotesText>
      <NotesText>APPEAR SLIDE</NotesText>
      <NotesText>
        The example{' '}
        <Highlight>is just a small snippet of the animation showing</Highlight>,
        as there are a number of moving parts here, but it gives you the idea of
        how you can use animations easily.
      </NotesText>
    </Notes>

    <Heading textSize={70} caps>
      Animations
    </Heading>
    <div>
      <Layout>
        <Fill>
          <Appear>
            <CodePane
              theme="external"
              lang="jsx"
              source={animations}
              textSize="32px"
            />
          </Appear>
        </Fill>
        <Fill>
          <Appear>
            <Image src={images.animation} height="600" />
          </Appear>
        </Fill>
      </Layout>
    </div>
  </Slide>,

  <Slide>
    <Notes>
      <NotesText>
        RN provides the <Highlight>PanResponder</Highlight> module to handle
        user gestures.
      </NotesText>
      <NotesText>APPEAR SLIDE</NotesText>
      <NotesText>
        <Highlight>
          This can recognize multi-touch gestures as well as swipes and other
          touches
        </Highlight>{' '}
        that make native apps feel snappy and intuitive.
      </NotesText>
      <NotesText>APPEAR SLIDE</NotesText>
      <NotesText>
        I didn't include a code sample because the{' '}
        <Highlight>
          API isn't as clean and clear as some of the others here
        </Highlight>, but it is still extremely powerful tool that is used quite
        frequently.
      </NotesText>
    </Notes>

    <Heading textSize={70} caps>
      Gestures
    </Heading>
    <Appear>
      <Text textFont="quarternary" textColor="#077c99">
        PanResponder
      </Text>
    </Appear>
    <Appear>
      <div>
        <Image src={images.panresponder} height="600" />
      </div>
    </Appear>
  </Slide>,

  <Slide>
    <Notes>
      <NotesText>
        React Native has some powerful tools built in to enhance the developer
        workflow.
      </NotesText>
      <NotesText>
        <Highlight>Hot Reloading & Live Reloading</Highlight> built in.
      </NotesText>
      <NotesText>
        Uses <Highlight>Chrome Dev Tools</Highlight> for debugging by default.
      </NotesText>
      <NotesText>NEXT SLIDE</NotesText>
    </Notes>

    <Heading textSize={70} caps>
      Developer Workflow
    </Heading>
    <div>
      <Image src={images.devmenu} height="600" />
    </div>
  </Slide>,

  <Slide>
    <Notes>
      <NotesText>
        You have access to the <Highlight>console, source code,</Highlight> and
        you can even set <Highlight>breakpoints</Highlight> in your code for
        debugging.
      </NotesText>
    </Notes>

    <Image src={images.debug} height="600" />
  </Slide>,

  <Slide>
    <Notes>
      <NotesText small>
        <Highlight>
          Since there is just a JavaScript bundle controlling the application,
          there area few technologies in the community to enable over the air
          updates to your app.
        </Highlight>
      </NotesText>
      <NotesText extraSmall>
        <Highlight>*NOTE***</Highlight> NO NEED TO EXPLAIN HOW THIS WORKS
      </NotesText>
      <NotesText extraSmall>
        CodePush by Microsoft is a technology we've used for this.
      </NotesText>
      <NotesText extraSmall>
        If you have ever worked with{' '}
        <Highlight>mobile apps in the past</Highlight>, the process of getting
        out a new update for a bug fix can be quite troubling.
      </NotesText>
      <NotesText extraSmall>* Fix the bug</NotesText>
      <NotesText extraSmall>* Submit new update to Apple for review</NotesText>
      <NotesText extraSmall>
        * Can sometimes takes multiple days to get approved
      </NotesText>
      <NotesText extraSmall>
        * All of the users have to download the new version
      </NotesText>
      <NotesText extraSmall>
        * This is one of the toughest parts. If they're anything like my wife,
        pretty much every app on the phone has an update waiting in the App
        Store, but there isn't much urgency to actually download it.
      </NotesText>
      <NotesText extraSmall>
        Now we can{' '}
        <Highlight>
          just make the bug fix and push out a new version of the app
          immediately
        </Highlight>{' '}
        to all user's devices without them having to manually download it.
      </NotesText>
      <NotesText extraSmall>
        This has been HUGE in terms of{' '}
        <Highlight>
          saving time as well as keeping our users' apps up to date.
        </Highlight>
      </NotesText>
    </Notes>

    <Heading fit caps>
      Over-The-Air Updates
    </Heading>
  </Slide>
];
