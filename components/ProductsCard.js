import React from "react";
import styles from "./ProductsCardStyle"
import { View, Text, Image } from "react-native"

function ProductsCard({ store }) {
    return (
        <View style={styles.container} >
            <Image style={styles.img} source={{ uri: store.imgURL }} /> 
            <View style={styles.body_container}>
            <Text style={styles.title} >{store.title}</Text>
            <Text style={styles.price} >{store.price}</Text>
            {!store.inStock ? <Text style={styles.stock} >Stokta Yok</Text> : null }
            </View>
            
        </View>
    );
};

export default ProductsCard;
