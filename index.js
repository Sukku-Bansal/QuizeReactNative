import React from 'react';
import {View , Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


function MyQuizApp(){
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.categoryContainer}>
            
            <TouchableOpacity 
            style = {styles.category}
            onPress={() => navigation.navigate('PlayGround', {category: 'history'})}
            >
                <Text style = {styles.categoryTitle}>History</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style = {styles.category}
            onPress={() => navigation.navigate('PlayGround', {category: 'science'})}
            >
                <Text style = {styles.categoryTitle}>Science</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style = {styles.category}
            onPress={() => navigation.navigate('PlayGround', {category: 'geography'})}
            >
                <Text style = {styles.categoryTitle}>Geography</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style = {styles.category}
            onPress={() => navigation.navigate('PlayGround', {category: 'entertainment'})}
            >
                <Text style = {styles.categoryTitle}>Entertainment</Text>
            </TouchableOpacity>


            
            </View>
           
        </View>
    );
}

export default MyQuizApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'center',
    alignItems :'center',
    marginTop: 50,

  },
  category :{
    width:150,
    height:150,
    margin:10, 
    borderRadius: 10, 
    backgroundColor : '#FFFFFF',
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center '
  } 
});