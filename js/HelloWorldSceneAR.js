'use strict';

import React, {Component} from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroVideo,
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();
  }

  render() {
    // ViroARTrackingTargets.createTargets({
    //   "targetOne" : {
    //     source : require('./res/box.jpg'),
    //     orientation : "Up",
    //     physicalWidth : 0.1 // real world width in meters
    //   },
    //   "targetTwo" : {
    //     source : require('./res/c1.jpg'),
    //     orientation : "Up",
    //     physicalWidth : 0.1 // real world width in meters
    //   },
    // });

    // ViroARTrackingTargets.createTargets({
    //     "targetTwo" : {
    //       source : require('./res/c1.jpg'),
    //       orientation : "Up",
    //       physicalWidth : 0.1 // real world width in meters
    //     },
    // });
    ViroARTrackingTargets.createTargets({
      targetOne: {
        source: require('./res/t6.png'),
        orientation: 'Up',
        physicalWidth: 0.1, // real world width in meters
      },
      targetTwo: {
        source: require('./res/t7.png'),
        orientation: 'Up',
        physicalWidth: 0.1, // real world width in meters
      },
    });

    return (
      <ViroARScene>
        <ViroARImageMarker target={'targetOne'}>
          <ViroVideo
            source={require('./res/vids/s3.mp4')}
            loop={true}
            // position={[0,2,-5]}
            rotation={[-90, 0, 0]}
            scale={[0.12, 0.06, 0]}
          />
        </ViroARImageMarker>

        <ViroARImageMarker target={'targetTwo'}>
          <ViroVideo
            source={require('./res/vids/s4.mp4')}
            loop={true}
            // position={[0,2,-5]}
            rotation={[-90, 0, 0]}
            scale={[0.12, 0.06, 0]}
          />
        </ViroARImageMarker>

        {/* <ViroARImageMarker target={"targetTwo"} >
            <ViroVideo
                  source={require('./res/vids/sample1.mp4')}
                  loop={true}
                  position={[0,2,-5]}
                  scale={[2, 2, 0]}
                  // position={[0,0,0]}
                  // rotation={[0,30,0]}
                  // height={.2}
                  // width={.2}
                 
              />
          </ViroARImageMarker> */}
      </ViroARScene>
    );
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = HelloWorldSceneAR;
