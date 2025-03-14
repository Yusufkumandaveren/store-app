import { Dimensions, StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        margin: 10,
        width:Dimensions.get('window').width/2.24 ,
        height:Dimensions.get('window').height/2.8,
        padding:0
    },
    body_container:{
        alignItems: 'flex-start',
        margin:5,
        
    },
    img:{
        height:Dimensions.get('window').height/3.7,
        borderRadius: 10,
        margin:5,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 17,  
    },
    price:{
        fontSize: 16,
        color:'gray',
        textAlign: "center",
    },
    stock:{
        color: 'red',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: "center",
    }
});

export default styles;