import { Text, View, StyleSheet } from "react-native";
import React from "react";
import Task from "../components/taskComponent/task";


export default function home() {
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's task</Text>
        <View style={styles.items}>
          {/* This is where the task */}
          <Task text = {'Task 1'}/>
          <Task text = {'Task 2'}/>
          <Task text = {'Task 3'}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
  },
  items:{
    marginTop:30,
  }


})