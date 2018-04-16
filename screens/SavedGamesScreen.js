import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {View, Text} from 'react-native';



export default class SavedGamesScreen extends React.Component {
  static navigationOptions = {
    title: 'Saved Games',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return(
    <View> 
    <Text> view Games Here </Text>
    </View>
    )
  }
}
