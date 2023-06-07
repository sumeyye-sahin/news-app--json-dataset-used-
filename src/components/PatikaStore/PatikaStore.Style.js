import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        width:Dimensions.get('window').width/2.1,
        backgroundColor:'white',
        padding:5,
        paddingLeft:10,
    },
    image:{
        height: Dimensions.get('window').height/3 ,
        alignItems:'center',
        borderRadius:9,
    },
    title:{
        flex:1,
        
        fontWeight:'900',
        fontSize:19,
        color:'black',
        textAlign: 'left' ,
        
        
    },
    price:{
        
        marginTop:3,
        color:'gray',
        fontWeight:'bold',
        fontSize:20,
        
    },
    inStock:{
        fontSize:19,
        fontWeight:'900',
        color:'red',
    },
    inner_container:{
        flex:1,
        padding:10,
        backgroundColor:'#e0e0e0',
        justifyContent:'center',
        borderRadius:9,
    },
    image_container:{
        flex:1,
        padding:3,
        
    },
    text_container:{
        flex:1,
        padding:3,
        textAlign: 'left' ,
        alignSelf: 'flex-start',
        
    }

});