import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props : String) => {
  return (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <TouchableOpacity style={styles.square}/>
            <Text style={styles.itemText}>
            {props.text}
            </Text>
        </View>
        <View style={styles.circular}>

        </View>
    </View>
  )
};

const styles = StyleSheet.create({
    item:{
        backgroundColor:'white',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,


    },
    itemLeft:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
    },
    square:{
        width:24,
        height:24,
        backgroundColor:'blue',
        opacity:0.4,
        borderRadius:5,
        marginRight:10,
    },
    itemText:{
        maxWidth: '80%',

    },
    text:{

    },
    circular:{
        width: 12,
        height:12,
        borderColor: 'blue',
        borderWidth:2,
        borderRadius:5,
    }
});

export default Task;
