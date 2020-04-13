import React, { Component } from 'react';
import { 
    View,
     TouchableOpacity,
     Image,
     FlatList
 } from 'react-native';
import {Block,Text,Button} from '../components/index';
const avatar=require('../constants/images/images/avatar.png');
const titleTabs=["Products","Inspirations","Shop"];
import categories from '../constants/data/categories';
import styles from '../styles/styles';
import  renderHeader from '../components/header';
export default class Browse extends Component {
    constructor(props){
        super(props);

        this.state={
            tabSelect:"Products",
            dataCategories:categories
        }
    }
 
 

    item(item,index){
        let marginRight=(index%2==0)?20:0;
        return(
            <TouchableOpacity style={[styles.itemStyle,{marginRight}]} >           
                <View style={styles.bgImg} >
                    <Image resizeMode={'contain'} style={styles.imgAvatar} source={item.image} />
                </View>
                <Text black  >{item.name }</Text>
                <Text gray >{item.count} produucts</Text>
            </TouchableOpacity>
        )
    }

    _onPressTab(tab){
        let data=categories.filter(e=>{
            if(e.tags.indexOf(tab)>-1)
                return e
        })

        

        this.setState({
            tabSelect:tab,
            dataCategories:data
        })

        
    }

    renderTabs(){
        let tabs=[];
        titleTabs.map(e=>{
            tabs.push(
                    <TouchableOpacity 
                        key={e}
                        style={[{justifyContent:'center'} ,
                        this.state.tabSelect==e?{borderBottomColor:'#2BDA8E',
                        borderBottomWidth:2}:{}]} 
                        onPress={()=>this._onPressTab(e)}
                    >
                        <Text style={this.state.tabSelect==e?{color:'#2BDA8E'}:{color:'#9DA3B4'}}  h3 semibold >{e}</Text>
                    </TouchableOpacity>     
            )
        })
        return tabs;   
    }

 

     render() {
         const {imgAvatar,containerTab}=styles;
         return (
             <Block   flex={1}>
                 <Block  padding={[0,20]}  color={'white'}    flex={0.2} space={'between'} >
                    {renderHeader("Browse",this.props.navigation)}
                    <Block flex={1} row    space={'between'} style={containerTab}  >                     
                        {this.renderTabs()}      
                    </Block>
                </Block>
                <Block flex={1}   padding={[20,20,0,20]}   >
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={this.state.dataCategories}
                        renderItem={({item,index})=>this.item(item,index)}
                        numColumns={2}
                    />
                     
                </Block>

             </Block>
              
             
         );
     }
 }


