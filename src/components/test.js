import React, { Component } from 'react';
 import { 
     View
  } from 'react-native';
  import {Button,Text,Block } from './index';

export default class test extends Component {
    
    render() {
        return (
            <Block  row    >  
             
              
                <Block   middle  center flex={0.5} color="primary" >
                 <Text>Trong block</Text>
                
                </Block>

                <Button   showdow  color='tertiary' style={{flex:1,marginHorizontal:20}}      >
                    <Text>Hello</Text>
                </Button>
            </Block>
                

            
            
        );
    }
}