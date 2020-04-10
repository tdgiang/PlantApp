import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList
 } from 'react-native';
import styles from '../styles/styles';
import {colors} from '../styles/theme';
import LinearGradient from 'react-native-linear-gradient';
const data=[
    require('../constants/images/images/illustration_1.png'),
    require('../constants/images/images/illustration_2.png'),
    require('../constants/images/images/illustration_3.png'),
]


export default class Welcome extends Component {

    constructor(props){
        super(props);
        this.state={
            step:0
        }
    }

    renderStep(){
         let steps=[];
        for(let i=0;i<3;i++)
        {
            if(this.state.step==i)
            {
                steps.push(<View style={{...styles.dot,width:8,height:8,backgroundColor:'black'}}  />);
                continue;

            }
                
            steps.push(<View style={styles.dot}  />)
        }

        return steps;
    }


     render() {
        const {containerCenter,row,
            txth1Bold,txth3Gray2,txtGreen,
            btnLogin,txtLogin,txtSignUp,
            imgSlide,containerDot}=styles;
         return (
             <View  style={{flex:1,backgroundColor:'white'}} >
                 <View style={containerCenter}>
                    <View style={row}  >
                        <Text  style={txth1Bold} >Your home.</Text>
                        <Text style={txtGreen} >Greener.</Text>
                    </View>
                    <Text  style={txth3Gray2} >Enjoy the experience.</Text>
                 </View>

                 <View style={{flex:2}}>
                     <FlatList
                        
                        data={data}
                        renderItem={({item})=> <Image
                        style={imgSlide}
                        source={item}/>}
                        horizontal
                        snapToAlignment="center"
                        pagingEnabled
                        scrollEnabled
                        scrollEventThrottle={16}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item)=>item.toString()}
                        onScrollEndDrag={()=>this.setState({step:(this.state.step+1)%3})}
                        
                     />
                     <View   style={containerDot}>
                        {this.renderStep()}
                     </View>
                    
                 </View>
                 <View   style={{flex:1,justifyContent:'space-around',alignItems:'center'}} >
                 
                    <TouchableOpacity>
                        <LinearGradient 
                            start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
                            colors={[colors.primary, colors.secondary]} 
                            style={btnLogin}
                        >
                            <Text style={txtLogin} >Login</Text>
                        </LinearGradient>      
                    </TouchableOpacity>

                    <TouchableOpacity style={btnLogin} >
                        <Text  style={txtSignUp} >Signup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text  style={{color:colors.gray}} >Terms of service</Text>
                    </TouchableOpacity>
                    
                 </View>
             </View>
             
         );
     }
 }