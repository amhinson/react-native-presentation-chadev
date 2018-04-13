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

const buildingBlocks = `                   <div /> === <View />
<p> | <h1> | <span> | etc. === <Text>
                   <img /> === <Image />
                 <input /> === <TextInput />
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

const flexbox = `<View>
  <View style={{ flex: 1 }}>
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
  </View>
</View>`;

const platformSpecific = `componentDidMount() {
  if (Platform.OS === 'android') {
    this.props.doAndroidStuff()
  }
}

...

matchDetailContainer: {
  borderWidth: Platform.OS === 'ios' ? 1 : 2
}
`;

const touchableOpacity = `<TouchableOpacity
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
    <Heading fit caps textColor="primary">
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
    <Terminal
      output={[
        <div>
          <span style={{ color: '#33B969' }}>~ </span>react-native init
          ChattanoogaFC
        </div>,
        <div>
          <div>
            ================================================================================
          </div>
          <div>
            This will walk you through creating a new React Native project
          </div>
          <div>Installing react-native...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
        </div>,
        <div>
          <div style={{ color: '#33B969' }}>✨ Done in 5.96s.</div>
          <div>
            ================================================================================
          </div>
        </div>,
        <div>
          <span style={{ color: '#33B969' }}>~ </span>cd ChattanoogaFC
        </div>,
        <div>
          <span style={{ color: '#33B969' }}>~ </span>react-native run-ios
        </div>
      ]}
    />
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
    <div>
      <Layout>
        <Fill>
          <Appear>
            <CodePane
              theme="external"
              lang="jsx"
              source={customStyling}
              textSize="27px"
            />
          </Appear>
        </Fill>
        <Fill>
          <Appear>
            <Image src={images.header} height="600" />
          </Appear>
        </Fill>
      </Layout>
    </div>
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
          <Appear>
            <Image src={images.flexbox} height="600" />
          </Appear>
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
    <div>
      <Layout>
        <Fill>
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
    <Heading textSize={70} caps>
      Gestures - PanResponder
    </Heading>
    <div>
      <Appear>
        <Image src={images.panresponder} height="600" />
      </Appear>
    </div>
  </Slide>,

  <Slide>
    <Heading textSize={70} caps>
      Developer Workflow
    </Heading>
    <div>
      <Appear>
        <Image src={images.devmenu} height="600" />
      </Appear>
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
