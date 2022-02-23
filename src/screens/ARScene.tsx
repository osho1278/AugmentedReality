'use strict';

import BusinessCard from 'components/BusinessCard';
import Render3D from 'components/Render3D';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, ButtonGroup, Text, useTheme } from 'react-native-elements';
import {
    ViroARScene,
    ViroConstants
} from '@viro-community/react-viro';
import Questions from 'components/Questions';

interface Props { }
interface State {
    text: string;
}
export default class ARScene extends Component<Props, State> {
    // const { theme } = useTheme();

    constructor(props: Props) {
        super(props);
        this.state = {
            text: "Initializing AR..."
        };
    }

    componentDidMount = () => {

    }
    _onInitialized = (state: State, reason: string) => {
        if (state == ViroConstants.TRACKING_NORMAL) {
            this.setState({
                text: "Hello World!"
            });
        } else if (state == ViroConstants.TRACKING_NONE) {
            // Handle loss of tracking
        }
    }

    render() {
        return (
            <View>               
                <ViroARScene onTrackingUpdated={this._onInitialized} >
                    {/* <Render3D /> */}
                    {/* <BusinessCard /> */}
                    <Questions/>
                </ViroARScene>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        margin: 10,
    },
    text: {
        textAlign: 'center',
        padding: 5,
    },
    more: {
        marginVertical: 20,
    },
    button: {
        width: 120,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});