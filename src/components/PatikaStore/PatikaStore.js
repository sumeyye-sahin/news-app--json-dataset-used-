import React from 'react';
import { View, Text ,Image} from 'react-native';
import styles from './PatikaStore.Style';

const PatikaStore =({product})=>{
    const inStock=(product.inStock) ? false : "STOKTA YOK";

    
    return(
      
        <View style={styles.container}>

             
             <View style={styles.inner_container}>
             <View style={styles.image_container}>
                <Image style={styles.image } source={{ uri: product.imgURL}} />
             </View>
             <View  style={styles.text_container}>

                <Text style={styles.title}  >{product.title} </Text> 
             
                <Text style={styles.price}>{product.price} </Text>
                {inStock && <Text style={styles.inStock}>{inStock}</Text>}
                </View>
            

             </View>
        </View>
       
    );
}

export default PatikaStore;