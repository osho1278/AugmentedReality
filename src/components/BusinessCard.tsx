'use strict';
import React, { Component } from 'react';
import { StyleSheet, ToastAndroid } from 'react-native';

import {
  ViroARScene,
  ViroDirectionalLight,
  ViroBox,
  ViroConstants,
  ViroARTrackingTargets,
  ViroMaterials,
  ViroText,
  ViroImage,
  ViroFlexView,
  ViroARImageMarker,
  ViroARObjectMarker,
  ViroAmbientLight,
  ViroARPlane,
  ViroAnimatedImage,
  ViroAnimations,
  ViroNode,
  Viro3DObject,
  ViroQuad
} from '@viro-community/react-viro';

export default class BusinessCard extends Component {

  state = {
    isTracking: false,
    initialized: false,
    runAnimation: false
  }

  getNoTrackingUI() {
    const { isTracking, initialized } = this.state;
    return (
      <ViroText text={
        initialized ? 'Initializing AR...'
          : "No Tracking"
      } />
    )
  }
  showToast = (text: string) => {
    ToastAndroid.show(`${text}`, ToastAndroid.LONG);
  };

  getARScene() {
    return (
      <ViroNode>
        <ViroARImageMarker target={"learningAndDevelopment"}
          onAnchorFound={
            () => {
              console.log("Anchor found")
              this.setState({
                runAnimation: true
              })
            }}>

          <ViroNode key="card">
            <ViroNode
              opacity={0} position={[0, -0.02, 0]}
              animation={{
                name: 'animateImage',
                run: this.state.runAnimation
              }}
            >
              <ViroFlexView
                rotation={[-90, 0, 0]}
                height={0.03}
                width={0.05}
                style={styles.card}
              >
                <ViroFlexView
                  style={styles.cardWrapper}
                >
                  <ViroImage
                    height={0.015}
                    width={0.015}
                    style={styles.image}
                    source={require('.\\res\\card\\osho_pic.jpg')}
                  />
                  <ViroText
                    textClipMode="None"
                    text="Osho Bajpai"
                    scale={[.015, .015, .015]}
                    style={styles.textStyle}
                  />
                </ViroFlexView>
                <ViroFlexView
                  onTouch={() => { }}
                  style={styles.subText}
                >
                  <ViroText
                    width={0.01}
                    height={0.01}
                    textAlign="left"
                    textClipMode="None"
                    text="Presenter"
                    scale={[.01, .01, .01]}
                    style={styles.textStyle}
                  />
                  {/* <ViroAnimatedImage
                    height={0.01}
                    width={0.01}
                    loop={true}
                    source={require('./res/tweet.gif')}
                  /> */}
                </ViroFlexView>
              </ViroFlexView>
            </ViroNode>
            <ViroNode opacity={0}
              position={[0, 0.02, 0.10]}
              animation={{
                name: 'animateViro',
                run: this.state.runAnimation
              }}
            >
              <ViroText text="This session was brought to you by L&D v-team:"
                rotation={[-90, 0, 0]}
                scale={[.01, .01, .01]}
                // position={[0, 0.02, 0.15]}
                style={{ ...styles.textStyle, width: 20, textAlign: 'center', color: 'yellow' }}
              />
              <ViroText text="Aizaz M"
                rotation={[-90, 0, 0]}
                scale={[.01, .01, .01]}
                position={[0, 0.02, 0.01]}
                style={{ ...styles.textStyle, width: 20, textAlign: 'center', color: 'yellow' }}
              />
              <ViroText text="Aparana Gupta"
                rotation={[-90, 0, 0]}
                scale={[.01, .01, .01]}
                position={[0, 0.02, 0.02]}
                style={{ ...styles.textStyle, width: 20, textAlign: 'center', color: 'yellow' }}
              />
              <ViroText text="Prasad Yerramsetti"
                rotation={[-90, 0, 0]}
                scale={[.01, .01, .01]}
                position={[0, 0.02, 0.03]}
                style={{ ...styles.textStyle, width: 20, textAlign: 'center', color: 'yellow' }}
              />
              <ViroText text="Venkatesh Bhupathi"
                rotation={[-90, 0, 0]}
                scale={[.01, .01, .01]}
                position={[0, 0.02, 0.04]}
                style={{ ...styles.textStyle, width: 20, textAlign: 'center', color: 'yellow' }}
              />
            </ViroNode>
          </ViroNode>
        </ViroARImageMarker>
      </ViroNode>
    )
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        {this.getARScene()}
      </ViroARScene>
    );
  }

  _onInitialized = (state: any, reason: any) => {
    this.showToast("Scan the L&D logo !")
    if (state == ViroConstants.TRACKING_NORMAL) {
      isTracking: true
    } else if (state == ViroConstants.TRACKING_NONE) {
      isTracking: false
    }
  }
}

var styles = StyleSheet.create({
  textStyle: {
    flex: .5,
    fontFamily: 'Roboto',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'top',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'column'
  },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0.001,
    flex: .5
  },
  subText: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: .5
  },
  image: {}
});

ViroARTrackingTargets.createTargets({
  "learningAndDevelopment": {
    source: require('.\\res\\card\\Ld.png'),
    orientation: "Up",
    physicalWidth: 0.05 // real world width in meters
  }
});

ViroMaterials.createMaterials({
  imagePlaceholder: {
    diffuseColor: "rgba(255,255,255,1)"
  },
  quad: {
    diffuseColor: "rgba(0,0,0,0.5)"
  }
});

ViroAnimations.registerAnimations({
  animateImage: {
    properties: {
      positionX: 0.05,
      opacity: 1.0
    },
    easing: "Bounce",
    duration: 500
  },
  animateViro: {
    properties: {
      positionZ: 0.02,
      opacity: 1.0,
    },
    easing: "Bounce",
    duration: 500
  }
});

module.exports = BusinessCard;