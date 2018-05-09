import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableHighlight, Switch } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import DataOganizer from '../screens/DataOrganizer';
import DataOrganizer from '../screens/DataOrganizer';

export default class GamesScreen extends React.Component {
  static navigationOptions = {
    title: 'Games',
  };
constructor(props) {
   super(props)
   this.state = { check: 0, bet: 0, call: 0, raise: 0, reRaise: 0, fold: 0,  handNumber : 1, isHandinPlay : true, isBigBlind : false, isSmallBlind : false, } 
   
 }
 _handleToggleSwitch = () => this.setState(state => ({
  isBigBlind: !state.isBigBlind}));
  newHand(){
      var HandArray = [];
      
        HandArray.push(this.state.check);
        HandArray.push(this.state.bet);
        HandArray.push(this.state.call);
        HandArray.push(this.state.raise);
        HandArray.push(this.state.reRaise);
        HandArray.push(this.state.handNumber);
        var Hand = new DataOrganizer(HandArray, this.isBigBlind, this.isSmallBlind); //saves to DataOrganizer class.
        Hand.showOnConsole();
        if(this.isBigBlind == true){
          this.setState({isBigBlind: this.state.isBigBlind = false,isSmallBlind: this.state.isSmallBlind = true})
          onValueChange= {isBigBlind : this._handleToggleSwitch} //why wont switch go back to normal?
        }
        else (this.isSmallBlind == true)
        {
          this.setState({isSmallBlind: this.state.isSmallBlind = false});
        }

       this.setState({handNumber: this.state.handNumber+1, check: this.state.check=0,  bet: this.state.bet=0, 
        call: this.state.call=0,  raise: this.state.raise=0,  reRaise: this.state.reRaise=0, fold: this.state.fold=0})
        //Clears data after each hand, needs to also be sent to DataOganizer, so may need to change this.})
      }
      
 
//think about wrapping in while loop, while(handInPlay == true || if False clear and start new hand)
//Once new hand is pressed, the data should be sent to DataOrganizer class to be prepared for storage.
//Still need to add a Big Blind button.
//What data structor to use to save each game? 
//function buttonPresses() {
  
  //while(isHandinPlay)
//{
 onPress(action){
   if(action == 'check'){
     this.setState({check: this.state.check+1})
   }
   else if(action == 'bet'){
     this.setState({bet: this.state.bet+1})
   }
   else if(action == 'call'){
     this.setState({call: this.state.call+1})
   }
   else if(action == 'raise'){
     this.setState({raise: this.state.raise+1})
   }
   else if(action == 'reRaise'){
     this.setState({reRaise: this.state.reRaise+1})
   }
   else if(action == 'fold'){
     this.setState({fold: this.state.fold+1})
     this.newHand(); //should also clear and start new hand
   }
  else if(action == 'New Hand'){
     this.setState({handNumber: this.state.handNumber+1, /*DataOganizer:create(this.state.check),*/ check: this.state.check=0, /*DataOganizer:Component(this.state.bet),*/ bet: this.state.bet=0, /*DataOganizer:Component(this.state.call),*/
    call: this.state.call=0, /*DataOganizer:Comment(this.state.raise),*/  raise: this.state.raise=0, /*reRaise: DataOganizer(this.state.reRaise),*/ reRaise: this.state.reRaise=0, /*fold: DataOganizer(this.state.fold), */fold: this.state.fold=0})
   } //Clears data after each hand, needs to also be sent to DataOganizer, so may need to change this.
  }
  //}
 //}

 render(){
   return (
       <View  style={{justifyContent: 'center', flex: 1,}}>
         <View style={{flex:1}}>
            <Text> Track your Game </Text>
         </View>
         <View style={{ flex:0}}>
            <TouchableHighlight onPress={() => this.onPress('New Hand')} style={[styles.button]}>
            <Text> New Hand </Text>
            </TouchableHighlight>
            <Text>   Hand #{this.state.handNumber}  </Text>
         </View>
          <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center' }}>     
        <Switch
           title="Blind"
          onValueChange={this._handleToggleSwitch}
          value={this.state.isBigBlind}
        />
        <Text> Are you Big Blind </Text>
      </View> 


         <View style={{flex:2, backgroundColor:'yellow'}}>
           <View style={[styles.row1, styles.rows]}>
              <TouchableHighlight onPress={() => this.onPress('check')} style={[styles.button]}>
              <Text> Check </Text>
              </TouchableHighlight>
              <Text>{this.state.check}</Text>
              <TouchableHighlight onPress={() => this.onPress('bet')} style={[styles.button]}>
                <Text> Bet </Text>
              </TouchableHighlight>
              <Text>{this.state.bet}</Text>
              <TouchableHighlight onPress={() => this.onPress('call')} style={[styles.button]}>
                <Text> Call </Text>
              </TouchableHighlight>
              <Text>{this.state.call}</Text>
          </View>
          <View style={[styles.row2, styles.rows]}>
              <TouchableHighlight onPress={() => this.onPress('raise')} style={[styles.button]}>
                <Text> Raise </Text>
              </TouchableHighlight>
              <Text>{this.state.raise}</Text>
              <TouchableHighlight onPress={() => this.onPress('reRaise')} style={[styles.button]}>
                <Text> Re-Raise </Text>
              </TouchableHighlight>
              <Text>{this.state.reRaise}</Text>
              <TouchableHighlight onPress={() => this.onPress('fold')} style={[styles.button]}>
                <Text> Fold </Text>
              </TouchableHighlight>
              <Text>{this.state.fold}</Text>
          </View>
         </View>
       </View>
   )
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    // alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  rows: {
    flex: 1,
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'space-around'

  },
  row1:{
    backgroundColor: 'red'
  },
  row2:{
    backgroundColor: 'blue'
  }
})


