import React, { Component } from 'react';
import { 
    View,
    Text,
    Image
 } from 'react-native';

 const img=require('../constants/images/images/explore_1.png')
 export default class Explore extends Component {

    componentDidMount(){
        const sizes=Image.resolveAssetSource(img);
        console.log(sizes.height);
        
    }
     
     render() {
         return (
             <View>
                
                 <Text>Explore</Text>
             </View>
             
         );
     }
 }