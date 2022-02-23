'use strict';

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARImageMarker,
  Viro3DObject,
  ViroAmbientLight
} from '@viro-community/react-viro';
interface Props { }
interface State {
  text: string;
}
export default class RenderCar extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    // Set initial state here
    this.state = {
      text: "Initializing AR..."
    };

    // bind 'this' to functions
    // this._onInitialized = this._onInitialized.bind(this);
  }

  componentDidMount = () => {
    // ViroARTrackingTargets.createTargets({
    //   "temple": {
    //     source: require('.\\res\\temple.jpg'),
    //     orientation: "Up",
    //     physicalWidth: 0.01 // real world width in meters
    //   },
    //   "rabbit": {
    //     source: require('.\\res\\rabbit.jpg'),
    //     orientation: "Up",
    //     physicalWidth: 0.01 // real world width in meters
    //   }
    // });
  }

  render() {



    return (
      <View>

        <ViroText text={"Found"} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
        <ViroAmbientLight color="#ffffff" />

        <Viro3DObject
          source={require(".\\res\\car\\camionJugete.obj")}
          resources={[require('.\\res\\car\\camion_jugete.mtl')]}
          highAccuracyEvents={true}
          scale={[1, 1, 1]}
          position={[0, 0, -1]}
          rotation={[0, 45, 0]}
          type="OBJ"
          // dragType={"FixedToPlane"}
          onAnchorFound={() => console.log("3d load found")}
          onLoadStart={() => console.log("3d load start ")}
          onLoadEnd={() => console.log("3d load end ")}
          // transformBehaviors={["billboard"]}
          onError={(event: any) => console.log("OBJ loading failed with error: " + event.nativeEvent.error)}
        />

        <ViroARImageMarker
          onAnchorFound={() => console.log("Anchor found")}
        >
        </ViroARImageMarker>
      </View>
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

// module.exports = Home;