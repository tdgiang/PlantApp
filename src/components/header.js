import React, { Component } from 'react';
import { Image,TouchableOpacity } from 'react-native';
import {Block,Text} from './index';

function renderHeader(name,nav){
    return(
            <Block flex={1} center     row space={'between'} >
                    <Text h1 bold >{name}</Text>
                    <TouchableOpacity  onPress={()=>nav.push('Setting')} >
                        <Image 
                            resizeMode='contain'
                            style={{width:50,
                            height:50}}  
                            source={require('../constants/images/images/avatar.png')}  
                        />
                    </TouchableOpacity>
                    
                </Block>
    )
}

export default renderHeader;
