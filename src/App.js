import React from 'react';
import {View, Text, FlatList, StyleSheet, TextInput} from 'react-native';
import PatikaStore from './components/PatikaStore/PatikaStore';
import patikaStore_data from './patikaStore_data.json';

const App =()=>{
  const [text, onChangeText] = React.useState();

  return(
    <View style={styles.container}>
        
        <Text style={styles.mainTitle}>PATIKASTORE</Text>
        <TextInput 
        style={styles.textInput} 
        onChangeText={onChangeText}
        value={text}
        placeholder='Ara...'
        fontSize={20}
        placeholderTextColor={"gray"}
        
        > 
        </TextInput>
        
        <FlatList
         
            numColumns={2 }
            keyExtractor={(item)=> item.id.toString()}
            data={patikaStore_data}
            
            renderItem={({item}) => <PatikaStore product={item} />  }
            
            
        />
        
    </View>
  );
}

const styles = StyleSheet.create(
{
    container:{
      backgroundColor:'white',
      flex:1,

    },
    mainTitle:{
      fontSize:40,
      fontWeight:'bold',
      color:"purple",
    },
    textInput:{
      height: 50,
      
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor:'#e0e0e0',
      borderColor:'#e0e0e0',
      borderRadius:10,


    },

}
);

export default App;