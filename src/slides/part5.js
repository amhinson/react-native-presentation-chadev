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
  Slide
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import Terminal from 'spectacle-terminal';

import { Code, ListItem, Text } from '../components';
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
    <Heading fit caps textColor="#f9fdff">
      Compare with React
    </Heading>
  </Slide>,

  <Slide>
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
    <Heading caps>Bundling</Heading>
  </Slide>,

  <Slide>
    <Heading caps>Create & Run</Heading>
    <Image src={images.terminal} width="1500" />
  </Slide>,

  <Slide>
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
    <Heading fit caps>
      User Interaction
    </Heading>
  </Slide>,

  <Slide>
    <Heading textSize={70} caps>
      Touchable
    </Heading>
    <Appear>
      <div>
        <Layout>
          <Fill>
            <CodePane
              theme="external"
              lang="jsx"
              source={touchableOpacity}
              textSize="34px"
            />
          </Fill>
          <Fill>
            <Image src={images.touchableOpacity} height="600" />
          </Fill>
        </Layout>
      </div>
    </Appear>
  </Slide>,

  <Slide>
    <Heading textSize={70} caps>
      Animations
    </Heading>
    <Appear>
      <div>
        <Layout>
          <Fill>
            <CodePane
              theme="external"
              lang="jsx"
              source={animations}
              textSize="32px"
            />
          </Fill>
          <Fill>
            <Image src={images.animation} height="600" />
          </Fill>
        </Layout>
      </div>
    </Appear>
  </Slide>,

  <Slide>
    <Heading textSize={70} caps>
      Gestures - PanResponder
    </Heading>
    <div>
      <Image src={images.panresponder} height="600" />
    </div>
  </Slide>,

  <Slide>
    <Heading textSize={70} caps>
      Developer Workflow
    </Heading>
    <div>
      <Image src={images.devmenu} height="600" />
    </div>
  </Slide>,

  <Slide>
    <Image src={images.debug} height="600" />
  </Slide>,

  <Slide>
    <Heading fit caps>
      Over-The-Air Updates
    </Heading>
  </Slide>
];
