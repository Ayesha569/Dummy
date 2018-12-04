import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

import {Button} from 'react-native';



//type Props = {};
export default class EmployeeProfile extends Component {
 
  render() {
    return (
     <KeyboardAvoidingView behavior="height" style={styles.container}>
     
       <Text style={{   
                textAlign:'center',
                justifyContent:'center',
                marginTop:100,
                fontSize:25,
                color:'#1e90ff'
              }}>
       EMPLOYEE   PROFILE
       </Text>
       <View style={styles.direc} >
         <Text style={styles.textstyle}>Name:  </Text>
          
           <TextInput style={styles.input} placeholder='Employee Name' placeholderTextColor="rgba(0,0,255,0.2)"/>
           </View>

           <View style={styles.direc} >
         <Text style={styles.textstyle}>Emp ID:  </Text>
          
           <TextInput style={styles.input} placeholder='Employee ID' placeholderTextColor="rgba(0,0,255,0.2)"/>
           </View>
                
           <View style={styles.direc} >
         <Text style={styles.textstyle}>CNIC:  </Text>
          
           <TextInput style={styles.input} placeholder='Employee CNIC' placeholderTextColor="rgba(0,0,255,0.2)"/>
           </View>

              <View style={styles.direc} >
         <Text style={styles.textstyle}>CNIC:  </Text>
          
           <TextInput style={styles.input} placeholder='Employee CNIC' placeholderTextColor="rgba(0,0,255,0.2)"/>
           </View>
           <TouchableOpacity>
             <Text style={{
            backgroundColor:'#1e90ff',
            color:'#fff',
            fontSize:20,
            paddingBottom:10,
            paddingTop:10,
            marginTop:60,
            textAlign:'center',           
            marginLeft:60,
            marginRight:60 
          }}>
          VIEW LOCATION     
          </Text> 
          </TouchableOpacity>
           </KeyboardAvoidingView>

           );
        }
    }

    var styles=StyleSheet.create({
        container:{
            backgroundColor:'#FFFFFF',
            flex:1,
           // justifyContent:'center',
           paddingRight:30,
           paddingLeft:30
        },
        input:
  {
    
    width:110,
    fontSize:13,
    marginTop:10,
    marginLeft:20,
    //borderWidth:2
    //textAlign:'center',
    //fontWeight:'bold',
    color:'#1e90ff',
    borderColor: 'blue',
  },
  direc:{
      flexDirection:'row',
  },
  textstyle:{
    marginLeft:60,
    marginTop:30,
    fontSize:15,
    color:'#1e90ff'
  }
      
      })
      
