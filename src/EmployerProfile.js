import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,ToastAndroid
} from 'react-native';

import {Button} from 'react-native';



//type Props = {};
export default class EmployerProfile extends Component {
  static navigationOptions = {
    headerTitle :'Data Inertion Activity',
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
      emp_name: '',
      emp_password: '',
      emp_dob: '',
      emp_address: '',
      emp_phonenum: '',
      idValidate: true,
      nameValidate: true,
      passwordValidate: true,
      addressValidate: true,
      phoneValidate: true,
      dobValidate: true,
      
    }
 
  }
  
  validate(value,type){
    alph=/^[a-zA-Z\-'\s]+$/
    mobileNo=/^(\+\d{1,3}[- ]?)?\d{11}$/
    email=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    add=/^\s*\S+(?:\s+\S+){0}/
    no=/^[1-9]\d*$/
    password=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
    dob = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])/
    if (type === 'id') {
      if (no.test(value)) {
        this.setState({
          emp_id: value,
          idValidate: true
        })
        // console.warn("name is correct");
      }else {
          this.setState({idValidate: false})
          // ToastAndroid.show('name is invalid,Pelease enter a valid name',ToastAndroid.SHORT);
        // console.warn("name is invalid,Pelease enter a valid name");
      }
    }else {
      if (type === 'name') {
        if (alph.test(value)) {
          this.setState({
            emp_name: value,
            nameValidate: true
          })
          // console.warn("number is correct");
        }else {
            this.setState({nameValidate: false})
            // ToastAndroid.show('Number is Invalid,Pelease enter a valid number',ToastAndroid.SHORT);
          // console.warn("name is invalid,Pelease enter a valid name");
        }
      }else {
        if (type === 'password') {
            if (password.test(value)) {
              this.setState({
                emp_password: value,
                passwordValidate:true
              })
              // console.warn("city is correct");
            }else {
                this.setState({passwordValidate: false})
                // ToastAndroid.show('City name is Invalid,Pelease enter a valid city',ToastAndroid.SHORT);
              // console.warn("name is invalid,Pelease enter a valid name");
            }
        }else {
          if (type === 'phone') {
              if (mobileNo.test(value)) {
                this.setState({
                  emp_phonenum: value,
                  phoneValidate:true
                })
                // console.warn("email is correct");
              }else {
                  this.setState({phoneValidate: false})
                  // ToastAndroid.show('Email is Invalid,Pelease enter a valid email address',ToastAndroid.SHORT);
                // console.warn("name is invalid,Pelease enter a valid name");
              }
          }else {
            if (type === 'address') {
                if (add.test(value)) {
                  this.setState({
                    emp_address: value,
                    addressValidate:true
                  })
                  // console.warn("address is correct");
                }else {
                    this.setState({addressValidate: false})
                    // ToastAndroid.show('Address is Invalid,Pelease enter a valid address',ToastAndroid.SHORT);
                  // console.warn("name is invalid,Pelease enter a valid name");
                }
            }
            else {
              if (type === 'dob') {
                  if (dob.test(value)) {
                    this.setState({
                      emp_dob: value,
                      dobValidate:true
                    })
                    // console.warn("address is correct");
                  }else {
                      this.setState({dobValidate: false})
                      // ToastAndroid.show('Address is Invalid,Pelease enter a valid address',ToastAndroid.SHORT);
                    // console.warn("name is invalid,Pelease enter a valid name");
                  }
              }
            }
           }
          }
        }
        }
      }

  UserRegistration = () =>{
 
 
 const { emp_id }  = this.state ;
 const { emp_name }  = this.state ;
 const { emp_password }  = this.state ;
 const { emp_dob }  = this.state ;
 const { emp_address }  = this.state ;
 const { emp_phonenum}  = this.state ;

    if(this.state.emp_id.length === 0 || this.state.emp_address.length === 0 || this.state.emp_dob.length === 0 || this.state.emp_password.length === 0 || this.state.emp_phonenum.length === 0 || this.state.emp_name.length === 0)
    {
      ToastAndroid.show('Please first fill all the fields',ToastAndroid.SHORT);
    }else{

      fetch('https://employeetrackerapp.000webhostapp.com/emplogin.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emp_name : emp_name,
          emp_password  : emp_password,
          emp_dob : emp_dob,
          emp_address : emp_address,
          emp_phonenum : emp_phonenum
        
        

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
      'You have successfuly entered the data',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
   }
  render() {
    return (
     <KeyboardAvoidingView behavior="height" style={styles.container}>
     
       <Text style={{   
                textAlign:'center',
                justifyContent:'center',
                marginTop:70,
                fontSize:25,
                color:'#1e90ff'
              }}>
       EMPLOYEE   PROFILE 
       </Text>
       <View style={styles.direc} >
         <Text style={styles.textstyle}>Emp ID:           </Text>
          
           <TextInput style={styles.input}
            onChangeText={emp_id => this.validate(emp_id,'id')} 
             placeholder='Employee ID' placeholderTextColor="rgba(0,0,255,0.2)"
             style={[styles.textInput, !this.state.idValidate  ?  styles.error : styles.textInput]}
             />
           </View>

           <View style={styles.direc} >
         <Text style={styles.textstyle}>Emp Name:     </Text>
          
           <TextInput style={styles.input}
            onChangeText={emp_name => this.validate(emp_name,'name')} 
             placeholder='Employee Name' placeholderTextColor="rgba(0,0,255,0.2)"
             style={[styles.textInput,!this.state.nameValidate ? styles.error : styles.textInput]}
             />
           </View>
                
           <View style={styles.direc} >
         <Text style={styles.textstyle}>Password:      </Text>
          
           <TextInput style={styles.input}
           onChangeText={emp_password => this.validate(emp_password,'password')} 
            placeholder='Employee Password' placeholderTextColor="rgba(0,0,255,0.2)"
            style={[styles.textInput,!this.state.passwordValidate ? styles.error : styles.textInput]}
            />
           </View>

               <View style={styles.direc} >
         <Text style={styles.textstyle}>Adress:           </Text>
          
           <TextInput style={styles.input} 
           onChangeText={emp_address => this.validate(emp_address,'address')} 
           placeholder='Employee Adress' placeholderTextColor="rgba(0,0,255,0.2)"
           style={[styles.textInput,!this.state.addressValidate ? styles.error : styles.textInput]}
           />
           </View>

            <View style={styles.direc} >
         <Text style={styles.textstyle}>DOB:             </Text>
          
           <TextInput style={styles.input}
           onChangeText={emp_dob => this.validate(emp_dob,'dob')} 
            placeholder='Employee DOB' placeholderTextColor="rgba(0,0,255,0.2)"
            style={[styles.textInput,!this.state.dobValidate ?  styles.error : styles.textInput]}
            />
           </View>



              <View style={styles.direc} >
         <Text style={styles.textstyle}>Phone number:</Text>
          
           <TextInput style={styles.input}
           onChangeText={emp_phonenum => this.validate(emp_phonenum,'phone')} 
            placeholder='Employee Phonenum' placeholderTextColor="rgba(0,0,255,0.2)"
            style={[styles.textInput,!this.state.phoneValidate ?  styles.error : styles.textInput ]}
            />
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
        textInput: {
          width:110,
          fontSize:15,
          color:'#1e90ff',
        },
        error: {
          width:110,
          fontSize:15,
          color:'red',
          borderWidth:1,
          borderColor:'red',
        },
        input:
        {
          
          width:110,
          fontSize:13,
          marginTop:10,
          marginLeft:20,
          // borderWidth:1,
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
