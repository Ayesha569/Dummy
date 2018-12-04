import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  ToastAndroid
} from 'react-native';

import {Button} from 'react-native';



//type Props = {};
export default class Analysis extends Component {
  static navigationOptions = {
    headerTitle :'Analysis Activity',
    headerStyle: {
      backgroundColor:'white',
      fontSize:15,
      color:'#1e90ff',
      fontWeight:'bold',
    },
    headerTintColor :'#1e90ff',
   
  }


  constructor(props) {
 
    super(props)
 
    this.state = {
 
      emp_id: '',
      date: '',
      Products_Given: '',
      Product_Sales: '',
      area_id: ''
    
 
    }
 
  }
 
  UserRegistration = () =>{
 
 
 const { emp_id }  = this.state ;
 const { date }  = this.state ;
 const { Products_Given }  = this.state ;
 const { Product_Sold }  = this.state ;
 const { area_id }  = this.state ;
 
 if(this.state.emp_id.length === 0 || this.state.date.length === 0 || this.state.Products_Given.length === 0 || this.state.Product_Sold.length === 0 || this.state.area_id.length === 0 )
 {
   ToastAndroid.show('Please first fill all the fields',ToastAndroid.SHORT);
 }else{

 
 
fetch('https://employeetrackerapp.000webhostapp.com/Analysis.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    emp_id : emp_id ,
    date : date ,
    Products_Given  : Products_Given,
    Product_Sold : Product_Sold,
    area_id : area_id
    

    //name: UserName,
 
   // email: UserEmail,
 
    //password: UserPassword
 
  })
 
}).then((response) => response.json)
      .then((responseJson) => {
 
// Showing response message coming from server after inserting records.
        this.alert(responseJson);
 
      }).catch((error) => {
        console.error(error);
      });
 
    }
  }
  alert(message){
    Alert.alert(
      'Response',
      'You have successfuly entered data',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
   }
  render() {
    return (
    
     <ScrollView>
       <View>
       <Text style={{   
                textAlign:'center',
                justifyContent:'center',
                marginTop:70,
                fontSize:25,
                color:'#1e90ff'
              }}>
       PRODUCT ANALYSIS 
       </Text>
       <View style={styles.direc} >
         <Text style={styles.textstyle}>Emp ID:             </Text>
          
           <TextInput style={styles.input}
            onChangeText={emp_id => this.setState({emp_id})} 
             placeholder='Employee ID' placeholderTextColor="rgba(0,0,255,0.2)"/>
           </View>

           <View style={styles.direc} >
         <Text style={styles.textstyle}>Date:      </Text>
          
           <TextInput style={styles.input}
            onChangeText={date => this.setState({date})} 
             placeholder='Date' placeholderTextColor="rgba(0,0,255,0.2)"/>
           </View>
                
           <View style={styles.direc} >
         <Text style={styles.textstyle}>Products Given:    </Text>
          
           <TextInput style={styles.input}
           onChangeText={Products_Given => this.setState({Products_Given})} 
            placeholder='Products_Given' placeholderTextColor="rgba(0,0,255,0.2)"/>
           </View>

               <View style={styles.direc} >
         <Text style={styles.textstyle}>Product_Sold:       </Text>
          
           <TextInput style={styles.input} 
           onChangeText={Product_Sold => this.setState({Product_Sold})} 
           placeholder='Product_Sold' placeholderTextColor="rgba(0,0,255,0.2)"/>
           </View>

            <View style={styles.direc} >
         <Text style={styles.textstyle}>Area_id:               </Text>
          
           <TextInput style={styles.input}
           onChangeText={area_id => this.setState({area_id})} 
            placeholder='Area Id' placeholderTextColor="rgba(0,0,255,0.2)"/>
           </View>



            
           <TouchableOpacity onPress={this.UserRegistration}>
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
          ADD!!!     
          </Text> 
          </TouchableOpacity>
          </View>
           </ScrollView>

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
