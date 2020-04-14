import React, { Component } from 'react';
import { 
    View,
    ScrollView,
    Image
 } from 'react-native';
import {Text,Block} from '../components/index';
import dataProduct from '../constants/data/dataProduct';
import styles from '../styles/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
 


 export default class Product extends Component {
    
    renderTabs(tags){
        let viewTags=[]
        tags.map((e,index)=>{
            viewTags.push(
                <View  key={`${index}`} style={styles.tagStyle} >
                    <Text   gray>{e}</Text>
                </View>
            )
        })
        return viewTags;
        
    }
    renderImg(imgs){
        let viewImgs =[];
        imgs.map((e,index)=>{
            viewImgs.push(
                <Image
                    key={`${index}`}
                    source={e}
                    style={{width:120,height:120,marginRight:20}}
                />
            )
        })
        return viewImgs;
    }


     render() {
         const {imgProduct,boxProduct,line} =styles
         const {description,tags,name,images}=dataProduct[0]
         return (
             <ScrollView 
                showsVerticalScrollIndicator={false}
            >
                <Image 
                    style={imgProduct}
                    source={images[0]}
                     
                />
                <Block  flex={0.1}  padding={[0,20]} margin={[20,0,0,0]} >
                     <Text h2  bold >{name}</Text>
                    <Block row   center >
                       {this.renderTabs(tags)}
                    </Block>
                    <Text gray  header  >
                        {description}
                    </Text>
                    <View style={styles.line} />
                    <Text h3  bold style={{marginBottom:20}} >Gallery</Text>
                    <Block row      >       
                            {this.renderImg(images.slice(1,3))}
                        <TouchableOpacity style={boxProduct}>
                            <Text>+{images.slice(3).length}</Text>   
                        </TouchableOpacity>
                    </Block>
                
                </Block>
                
                </ScrollView>
         );
     }
 }