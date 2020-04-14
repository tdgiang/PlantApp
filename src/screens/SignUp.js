import React, { Component } from 'react';
import { 
    View,
    TextInput,
    TouchableOpacity,
    Image
 } from 'react-native';
import {Block,Text,Button} from '../components/index';
import   styles   from '../styles/styles';

 export default class SignUp extends Component {
     constructor(props){
         super(props);
         this.state={
             txtEmail:"",
             txtUserName:"",
             txtPassword:"",
             showPass:true
         }
     }
     
     render() {
         const {txtEmail,txtUserName,txtPassword,showPass}=this.state;
         
         return (
             <Block color={'white'}  padding={[0,20]} >
                <Text  h1  bold>Sign Up</Text>
                <Block  middle  >
                    
                         <TextInput
                            placeholder={"Email"}
                            onChangeText={(val)=>this.setState({txtEmail:val})}
                            style={styles.txtInput}
                            value={txtEmail}
                        />
                        <TextInput
                            placeholder={"User name"}
                            onChangeText={(val)=>this.setState({txtUserName:val})}
                            style={styles.txtInput}
                            value={txtUserName}
                        />
                        <View  style={{
                            ...styles.rowBetween,
                            ...styles.txtInput}}>
                            <TextInput
                                placeholder={"Password"}
                                onChangeText={(val)=>this.setState({txtPassword:val})}
                                style={{width:100,height:40}}
                                value={txtPassword}
                                secureTextEntry={showPass}
                            />
                            <TouchableOpacity  onPress={()=>this.setState({showPass:!showPass})} >
                                <Image
                                    style={{width:25,height:25}}
                                    source={require('../constants/images/icons/eye.png')}
                                />
                             </TouchableOpacity>
                         </View>
                 
                    <Block flex={0.1}  center  margin={[20,0]}>
                        <Button  gradient style={{width:100}} >
                            <Text center h3 white>Sign Up</Text>
                        </Button>
                        <TouchableOpacity  onPress={()=>this.props.navigation.pop()} >
                            <Text gray2 style={{textDecorationLine:'underline'}} >Back to Login</Text>
                        </TouchableOpacity>

                    </Block>
                </Block>
             </Block>
             
         );
     }
 }