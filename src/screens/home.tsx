'use strict';

import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Text, useTheme } from 'react-native-elements';

interface Props { }
interface State {
  text: string;
}
export default class Home extends Component<Props, State> {
  // const { theme } = useTheme();

  constructor(props: Props) {
    super(props);
  }

  componentDidMount = () => {

  }

  render() {

    return (
      <View style={styles.view}>
        <Text
          style={{...styles.text,color:'blue'}}
          h1
        // h1Style={{ color: theme?.colors?.secondary }}
        >
          You are all set !
        </Text>
        <Text
          style={{...styles.text,color:'purple'}}
          h3
        // h2Style={{ color: theme?.colors?.success }}
        >
          See you on 24 Feb at 3pm

        </Text>

        <View style={styles.container}>

          <Image
            style={styles.tinyLogo}
            source={require('..//res//questions//Ld.png')}
          />

        </View>
        <Text
          style={{ ...styles.text, justifyContent: 'space-between', color: 'brown', marginTop: 100 }}
          h1
        >
          Talks @ EP, India
        </Text>
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
  tinyLogo: {
    width: 200,
    height: 200,
    // alignItems:'center',
    justifyContent: 'space-evenly'

  },
  container: {
    marginTop:50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});