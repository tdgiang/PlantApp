import React, { Component } from 'react';
import { 
    TextInput,
    Switch,
     TouchableOpacity,
     Dimensions,
     KeyboardAvoidingView
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
            profile:profile,
            editName:false,
            editLocation:false
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
    renderUserName(){
        const {profile,editName}=this.state;
        if(editName)
        {
            return(
                <TextInput 
                    style={{ height:40,width:200,alignItems:'center'}}
                    value={profile.username}
                    autoFocus
                    onChangeText={(val)=>this.setState({
                        profile:{
                            ...profile,
                            username:val
                        }
                    })}
                />
            )
        }

        return <Text bold>{profile.username}</Text>

    }
    renderLocation(){
        const {profile,editLocation}=this.state;
        if(editLocation)
        {
            return(
                <TextInput 
                    style={{ height:40,width:200,alignItems:'center'}}
                    value={profile.location}
                    autoFocus
                    onChangeText={(val)=>this.setState({
                        profile:{
                            ...profile,
                            location:val
                        }
                    })}
                />
            )
        }

        return <Text bold>{profile.location}</Text>

    }
  
     
     render() {
         const {bodySetting,silerStyle}=styles;
         const {editName,editLocation}=this.state;
         const  {username,location,email,budget,monthly_cap,notifications,newsletter}=this.state.profile
         return (
             
 

             
             <Block flex={1} padding={[0,20]} color={'white'}  >
                 <Block flex={1} >
                    {renderHeader('Settings',this.props.navigation)}
                 </Block>
                    <Block flex={3} middle   >
                        <Block  flex={1}   padding={[10,0]} >
                            <Text gray2 >User name</Text>
                            <Block row  center  space={'between'} >
                                {this.renderUserName()}
                                <TouchableOpacity  
                                    onPress={()=>this.setState({editName:!editName})} 
                                >
                                    <Text  secondary >{editName?'Save':'Edit' }</Text>
                                </TouchableOpacity>
                            
                            </Block>
                        </Block>
                        <Block flex={1} padding={[10,0]}  >
                            <Text gray2 >Location</Text>
                            <Block row  center space={'between'} >
                                {this.renderLocation()}
                                <TouchableOpacity  onPress={()=>this.setState({editLocation:!editLocation})} >
                                    <Text  secondary >{editLocation?'Save':'Edit' }</Text>
                                </TouchableOpacity>
                            </Block>
                        </Block>
                        <Block  flex={1}  padding={[10,0]} >
                            <Text gray2 >E-mail</Text>
                            <Block row center >
                                <Text bold >{email}</Text>
                            </Block>
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