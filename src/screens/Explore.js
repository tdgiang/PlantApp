import React, { Component } from 'react';
import { 
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ScrollView
 } from 'react-native';
import  {Block,Text,Button} from '../components/index';
const {width,height} =Dimensions.get('window');
 import styles from '../styles/styles';
import dataExplore from '../constants/data/dataExplore';
import LinearGradient from 'react-native-linear-gradient';

export default class Explore extends Component {
    
    renderHeader(){
        return(
            <Block row  flex={0.1}  center space={'between'} >
                <Text h1 bold >Explore</Text>
                <TextInput  
                    style={{ width:100,elevation:1}}
                    placeholder={'input'}
                />
            </Block>
        )
    }


    renderImg(img,index){
        const sizes=Image.resolveAssetSource(img);
        const fullWidth=width-40;
        const ratio=(sizes.width*100)/fullWidth;
        const imgWidth=ratio>75?fullWidth:sizes.width*1.1;
        return (
            <TouchableOpacity  key={`${index}`}    >
               <Image
                source={img}
                style={[styles.imgExplore,{minWidth:imgWidth,maxWidth:imgWidth}]}  
               />
               </TouchableOpacity>  
        )

    }

    renderFooter(){
        return(
            <LinearGradient 
                            start={{x: 0, y: 0}} end={{x: 0, y: 1}} 
                            colors={['rgba(256, 256,256, 0)', 'rgba(256, 256,256,0.7)']} 
                            style={styles.footerExplore}
                        >
            <Block  center middle   >
                <Button  gradient  style={{width:width/3}} >
                    <Text white center h3 >Filters</Text>
                </Button>
            </Block>
            </LinearGradient>
        )
    }
     


     render() {
         return (
            <Block  flex={1} color={'white'} padding={[0,20]} >
                {this.renderHeader()}
                <Block flex={1} >
                <ScrollView
                  showsVerticalScrollIndicator={false}
                >
                <View style={styles.bodyExplore} >
                    {dataExplore.map((e,index)=>this.renderImg(e,index))} 
                </View>
                </ScrollView>
                </Block>

                {this.renderFooter()}
            </Block>
         );
     }
 }