'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, ToastAndroid } from 'react-native';

import {
    ViroARScene,
    ViroText,
    ViroNode,
    ViroFlexView,
    ViroConstants,
    ViroARImageMarker,
    ViroARTrackingTargets,
    ViroMaterials,
    ViroAnimations,
    ViroImage,
    ViroVideo
} from '@viro-community/react-viro';
interface Props { }
interface State {
    text: string;
}
export default class Questions extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        // Set initial state here
        this.state = {
            text: "-"
        };

    }
    showToast = (text: string) => {
        ToastAndroid.show(`${text}`, ToastAndroid.LONG);
    };
    renderText = () => {
        return (
            <ViroFlexView
                //rotation={[-90, 0, 0]}
                height={0.03}
                width={0.05}
                style={styles.card}
            >
                <ViroFlexView
                    style={styles.cardWrapper}
                >
                    <ViroText
                        textClipMode="None"
                        text={this.state.text}
                        //rotation={[-90, 0, 0]}
                        scale={[.015, .015, .015]}
                        style={styles.textStyle}
                    />
                </ViroFlexView>
            </ViroFlexView>
        )
    }

    render() {
        return (
            <ViroNode>
                {this.renderText()}
                {this.showToast("Point to the images during presentation !")}

                <ViroARImageMarker target={"q1"}
                    onAnchorFound={() => { this.showToast("Anchor Found ") 
                    this.setState({ text: 'Who invented C#' })
                    }}>
                </ViroARImageMarker>

                <ViroARImageMarker target={"q2"}
                    onAnchorFound={() => { this.showToast("Anchor Found ") 
                     this.setState({ text: 'Who invented b#' })
                    }}>
                </ViroARImageMarker>

                <ViroARImageMarker target={"q3"}
                    onAnchorFound={() => { this.showToast("Anchor Found ") 
                    this.setState({ text: 'Who invented d#' })
                    }}>
                </ViroARImageMarker>

                <ViroARImageMarker target={"q4"}
                    onAnchorFound={() => { this.showToast("Anchor Found ") 
                    this.setState({ text: 'Who invented e#' })
                    }}>
                </ViroARImageMarker>

                <ViroARImageMarker target={"q5"}
                    onAnchorFound={() => { this.showToast("Who is this famous sports personality ? ") 
                    }}>

                    <ViroNode key="card">
                        <ViroFlexView
                            style={styles.cardWrapper}
                        >
                            <ViroImage
                                height={10}
                                width={10}
                                rotation={[-90, 0, 0]}
                                style={styles.image}
                                source={require('.\\res\\questions\\sachin.jpg')}
                            />
                        </ViroFlexView>
                    </ViroNode>
                </ViroARImageMarker>

                <ViroARImageMarker target={"flower"}
                    onAnchorFound={() => { this.showToast("Guess the movie ") }}>
                    <ViroVideo position={[0, 0 - .02, 0]} rotation={[-90, 0, 0]} loop={true} height={.02} width={.02}
                        source={require('https://drive.google.com/file/d/1ic10GzK-V9IFrVH62gnjFBuZynaOgGeO/view?usp=sharing')}/>
                </ViroARImageMarker>
            </ViroNode>

        );
    }
}

ViroARTrackingTargets.createTargets({
    "q1": {
        source: require('.\\res\\questions\\q1.png'),
        orientation: "Up",
        physicalWidth: 0.01 // real world width in meters
    },
    "q2": {
        source: require('.\\res\\questions\\q2.png'),
        orientation: "Up",
        physicalWidth: 0.01 // real world width in meters
    },
    "q3": {
        source: require('.\\res\\questions\\q3.png'),
        orientation: "Up",
        physicalWidth: 0.01 // real world width in meters
    },
    "q4": {
        source: require('.\\res\\questions\\q4.png'),
        orientation: "Up",
        physicalWidth: 0.01 // real world width in meters
    },
    "q5": {
        source: require('.\\res\\questions\\q5.png'),
        orientation: "Up",
        physicalWidth: 0.01 // real world width in meters
    },
    "LD": {
        source: require('.\\res\\questions\\Ld.png'),
        orientation: "Up",
        physicalWidth: 0.01 // real world width in meters
    },
    "flower": {
        source: require('.\\res\\questions\\flower.jpg'),
        orientation: "Up",
        physicalWidth: 0.01 // real world width in meters
    },

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
var styles = StyleSheet.create({
    helloWorldTextStyle: {
        fontFamily: 'Arial',
        fontSize: 30,
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
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
