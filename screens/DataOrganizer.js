import React from 'react';
import {
 Image,
 Platform,
 ScrollView,
 StyleSheet,
 Text,
 TouchableOpacity,
 View,
 TouchableHighlight,
 Alert
} from 'react-native';
import { WebBrowser } from 'expo';
import GameScreen from '../screens/GameScreen';
import SavedGamesScreen from '../screens/SavedGamesScreen';

export default class DataOrganizer extends React.Component{
    //an array of DataOrgaznizers should be returned when game complete.

   constructor(HandData, isBigBlind, isSmallBlind){
       super(HandData, isBigBlind, isSmallBlind)
       {
            var HandData = [];
            let isBigBlind = null;
            let isSmallBlind = null;
       }

   }
   buildArray(numberOfactions){
       for(var i = 0; i < HandData.Array.length ; i++){
       Array.prototype.HandData[i] = numberOfactions;
       }
   }

     showHand(HandData, isBigBlind, isSmallBlind) {
       
    var handstring = ''
    for(i = 0; i <= HandData.length() ; i++){

    }
    return handstring;
   }

   


}