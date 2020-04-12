import { 
    StyleSheet,
    Dimensions
 } from 'react-native';
import {sizes,colors} from './theme';
const {width,height}=Dimensions.get('window');

 const styles=StyleSheet.create({

    containerCenter:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    row:{
        flexDirection:'row',
       
    },
    txtLogin:{
        color:colors.white,
        textAlign:'center',
        fontSize:sizes.h3
    },
    txtSignUp:{
        color:colors.black,
        textAlign:'center',
        fontSize:sizes.h3
    },
    txth1Bold:{
        fontSize:sizes.h1,
        fontWeight:'bold',
        
    },
    txth3Gray2:{
        fontSize:sizes.h3,
        color:colors.gray2
    },
    txtGreen:{
        fontSize:sizes.h1,
        fontWeight:'bold',
        color:colors.primary,
        marginLeft:10
    },
    btnLogin:{
        width:width-100,
        padding:10,
        borderRadius:5,
        elevation:1,
        alignItems:'center'
    },
    imgSlide:{
        width:width,
        height:height/2,
        resizeMode:'contain'
    },
    containerDot:{
        position:'absolute',
        left:width/2-40,
        top:(height/2)-30,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    dot:{
        width:5,
        height:5,
        backgroundColor:colors.gray,
        marginHorizontal:10,
        borderRadius:10,
        
    
    },
    txtInput:{
        borderBottomWidth:1,
        borderBottomColor:colors.gray2,
        marginBottom:10
    },
    imgAvatar:{
        width:50,
        height:50
    },
    containerTab:{
        borderBottomColor:colors.gray2,
        borderBottomWidth:1,
        
    },
    itemStyle:{
        backgroundColor:'white',
        elevation:2,
        borderRadius:sizes.radius,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20,
        paddingVertical:20
    
    },
    bgImg:{
        width:80,
        height:80,
        backgroundColor:'#66ffc2',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:40,
        marginBottom:5
        
    }
 


 })

 export default styles;