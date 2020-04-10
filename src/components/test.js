import React, { Component } from 'react';
import { 
    View,
    Text
 } from 'react-native';
import * as theme from '../constants/theme';
 export default class test extends Component {
      
     render() {
         return (
             <View  style={{ flex:1}}  >
                    <View  style={{ flex:1, backgroundColor:theme.colors.accent}}  >
                        <Text style={theme.fonts.h1} >Accent h1</Text>
                    </View>
                    <View  style={{ flex:1, backgroundColor:theme.colors.black}}  >
                        <Text  style={theme.fonts.h2} >Black h2</Text>
                    </View>
                    <View  style={{ flex:1, backgroundColor:theme.colors.gray}}  >
                        <Text  style={theme.fonts.h3}>Gray h3</Text>
                    </View>
                    <View  style={{ flex:1, backgroundColor:theme.colors.gray2}}  >
                        <Text style={theme.fonts.header} >Gray2 header</Text>
                    </View>
                    <View  style={{ flex:1, backgroundColor:theme.colors.primary}}  >
                        <Text  style={theme.fonts.body} >primary body</Text>
                    </View>
                    <View  style={{ flex:1, backgroundColor:theme.colors.secondary}}  >
                        <Text  style={theme.fonts.title} >secondary title</Text>
                    </View>
                    <View  style={{ flex:1, backgroundColor:theme.colors.tertiary}}  >
                        <Text style={theme.fonts.caption} >tertiary  caption</Text>
                    </View>
                    <View  style={{ flex:1, backgroundColor:theme.colors.white}}  >
                        <Text  >white</Text>
                    </View>

             </View>
             
         );
     }
 }