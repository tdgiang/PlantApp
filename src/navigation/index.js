import React, { Component } from 'react';
import { 
    Image,Button
 } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import Browse from '../screens/Browse';
import Explore from '../screens/Explore';
import Forgot from '../screens/Forgot';
import Login from '../screens/Login';
import Product from '../screens/Product';
import Setting from '../screens/Setting';
import SignUp from '../screens/SignUp';
import Welcome from '../screens/Welcome';

const Stack = createStackNavigator();

export default class index extends Component {
    
    _settingOption(){
        return{
            title:"",
            headerStyle: {
                 elevation:0,
              },
            headerBackImage:()=><Image source={require('../constants/images/icons/back.png')} />,
        }
    }


    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Welcome">
                    <Stack.Screen 
                        name="Browse" 
                        component={Browse}
                        
                        options={this._settingOption()}
                    />
                    <Stack.Screen 
                        name="Explore" 
                        component={Explore} 
                        options={this._settingOption()}
                    />
                    <Stack.Screen 
                        name="Forgot" 
                        component={Forgot} 
                        options={this._settingOption()}
                    />
                    <Stack.Screen 
                        name="Login" 
                        component={Login} 
                        options={this._settingOption()}
                    />
                    <Stack.Screen 
                        name="Product" 
                        component={Product} 
                        options={this._settingOption()}
                    />
                    <Stack.Screen 
                        name="Setting" 
                        component={Setting} 
                        options={this._settingOption()}
                    />
                    <Stack.Screen 
                        name="SignUp" 
                        component={SignUp} 
                        options={this._settingOption()}
                    />
                    <Stack.Screen 
                        name="Welcome" 
                        component={Welcome} 
                        options={{
                            title:"",
                            headerStyle: {
                                 elevation:0,
                                 height:0
                              },
                            
                        }}
                    
                    />
                </Stack.Navigator>
            </NavigationContainer>
            
        );
    }
}