import React, { Component } from 'react';
import { 
    View,
    Switch,
     TouchableOpacity,
     Dimensions
 } from 'react-native';
 import {Block,Text,Button} from '../components/index';
import renderHeader from '../components/header';
import styles  from '../styles/styles';
import profile from '../constants/data/profile';
import Slider from '@react-native-community/slider';
export default class Setting extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            switchNotifi:true,
            switchNews:false,
            profile:profile
        }
    }

    toggleNotifi(){
        this.setState({
            profile:{
                ...profile,
                notifications:!this.state.profile.notifications
            }
            
        })
    }
    toggleNews(){
        this.setState({
            profile:{
                ...profile,
                newsletter:!this.state.profile.newsletter
            }
            
        })
    }
  
     
     render() {
         const {bodySetting,silerStyle}=styles;
         const {switchNotifi,switchNews}=this.state;
         const  {username,location,email,budget,monthly_cap,notifications,newsletter}=this.state.profile
         return (
             <Block flex={1} padding={[0,20]} color={'white'}  >
                 <Block flex={1} >
                    {renderHeader('Settings',this.props.navigation)}
                 </Block>
                 <Block flex={3} middle   >
                    <Text gray2 >Username</Text>
                    <Block row  space={'between'} >
                        <Text>{username}</Text>
                        <TouchableOpacity>
                            <Text  secondary >Edit</Text>
                        </TouchableOpacity>
                        
                    </Block>
                    <Text gray2 >Location</Text>
                    <Block row  space={'between'} >
                        <Text>{location}</Text>
                        <TouchableOpacity>
                            <Text  secondary >Edit</Text>
                        </TouchableOpacity>
                    </Block>
                    <Text gray2 >E-mail</Text>
                    <Block row >
                        <Text>{email}</Text>
                    </Block>
                 </Block>
                 <Block flex={2}  style={bodySetting} >
                    <Block  flex={0.5} middle    >
                        <Text gray >Budget</Text>
                        <Slider
                            style={silerStyle}
                            minimumValue={0}
                            maximumValue={1000}
                            minimumTrackTintColor="#2BDA8E"
                            maximumTrackTintColor="#000000"
                            value={budget}
                            thumbTintColor={'#2BDA8E'}
                        />
                        <Text gray right >$1000</Text>

                     </Block>
                     <Block flex={0.5}  middle    >
                        <Text gray >Monthly Cap</Text>
                        <Slider
                            style={silerStyle}
                            minimumValue={0}
                            maximumValue={5000}
                            minimumTrackTintColor="#2BDA8E"
                            maximumTrackTintColor="#000000"
                            value={monthly_cap}
                            thumbTintColor={'#2BDA8E'}
                        />
                        <Text gray right >$5000</Text>

                     </Block>
                    
                </Block>
                    <Block flex={2}    >
                        <Block row space={'between'} center >
                                <Text gray2 >Notifications</Text>
                                <Switch 
                                 trackColor={{ false: "#767577", true: "#2BDA8E" }}
                                 thumbColor={notifications ? "white" : "white"}
                                 ios_backgroundColor="#3e3e3e"
                                 onChange={()=>this.toggleNotifi()}
                                 value={notifications} 
                                 
                                 />
                        </Block>                          
                        <Block  row space={'between'} center  >
                                <Text gray2 > Newsletter</Text>
                                <Switch 
                                 trackColor={{ false: "#767577", true: "#2BDA8E" }}
                                 thumbColor={newsletter ? "white" : "white"}
                                 ios_backgroundColor="#3e3e3e"
                                 onChange={()=>this.toggleNews()}
                                 value={newsletter} 
                                 
                                 />
                        </Block>
                        <Block>
                        </Block>
                            
                    </Block>

             </Block>
         );
     }
 }