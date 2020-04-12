import React, { Component } from 'react';
import { 
    TouchableOpacity,TextInput,KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard
 } from 'react-native';
 import {Text,Button,Block} from '../components/index';
import styles from '../styles/styles';
 export default class Login extends Component {
     
     render() {
         return (
             <Block  color={'white'} middle  padding={[0,20]} flex={1} >
                     <Block flex={0.5} >
                        <Text  h1 bold >Login</Text>
                     </Block>
                    <KeyboardAvoidingView  
                        behavior={'padding'} 
                        style={{flex:2}} 
                    >
                        <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
                        <Block  flex={1}  middle  >
                            <Block  margin={[30,0]}  >
                                <Text  gray >Email</Text>
                                <TextInput
                                
                                    style={styles.txtInput }
                                />
                                <Text  accent >Password</Text>
                                <TextInput
                                
                                    style={styles.txtInput }
                                    secureTextEntry
                                    autoCompleteType={'password'}
                                />
                                <Button gradient onPress={()=>this.props.navigation.push('Browse')} >
                                    <Text  center white h3 >Login</Text>
                                </Button>
                                <TouchableOpacity>
                                    <Text gray center style={{textDecorationLine:'underline'}}  >Forgot your password?</Text>
                                </TouchableOpacity>
                            </Block>       
                        </Block>
                    </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                 
             </Block>
                 
            
             
         );
     }
 }
 