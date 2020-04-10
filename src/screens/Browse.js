import React, { Component } from 'react';
import { 
    View,
    Text,TouchableOpacity
 } from 'react-native';

 export default class Browse extends Component {
     
     render() {
         return (
             <View>
                 <TouchableOpacity  onPress={()=>console.log(this.props.navigation)
                 } >
                    <Text>Browse</Text>
                 </TouchableOpacity>
             </View>
             
         );
     }
 }