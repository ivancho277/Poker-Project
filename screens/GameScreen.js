import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableHighlight, } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class GamesScreen extends React.Component {
  static navigationOptions = {
    title: 'Games',
  };
constructor(props) {
   super(props)
   this.state = { count: 0 }
 }

 onPress = () => {
   this.setState({
     count: this.state.count+1
   })
 }
 render(){
   return (
       <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
         <Text> Start a New Game </Text>
         <TouchableHighlight
           
            onPress={this.onPress}
           >
        <Text> Touch Here </Text>
            </TouchableHighlight>
         <Text>{this.state.count}</Text>
       </View>
   )
 }
}


