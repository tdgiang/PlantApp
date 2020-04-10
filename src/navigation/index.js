import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
     
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Welcome">
                    <Stack.Screen name="Browse" component={Browse} />
                    <Stack.Screen name="Explore" component={Explore} />
                    <Stack.Screen name="Forgot" component={Forgot} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Product" component={Product} />
                    <Stack.Screen name="Setting" component={Setting} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="Welcome" component={Welcome} />
                </Stack.Navigator>
            </NavigationContainer>
            
        );
    }
}