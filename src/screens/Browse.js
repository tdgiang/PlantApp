import React, { Component } from 'react';
import { 
    View,
    Text,TouchableOpacity
 } from 'react-native';
 import LinearGradient from 'react-native-linear-gradient';

 export default class Browse extends Component {
     
     render() {
         return (
             <View  style={
                 {
                    
                 }
             } >

            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['red', 'blue']} style={{width:100,height:200}}>
        
            </LinearGradient>
                 <TouchableOpacity  onPress={()=>this.props.navigation.push("Explore")
                 } >
                    <Text>Browse</Text>
                 </TouchableOpacity>
             </View>
             
         );
     }
 }


