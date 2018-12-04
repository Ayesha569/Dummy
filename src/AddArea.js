
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert
} from 'react-native';

export default class AddArea extends Component{
  static navigationOptions = {
    headerTitle :'Area Activity',
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
 
      areaid: '',
      areaname: '',
      arealatitude: '',
      arealongitude: '',
      areadate: ''
 
    }
 
  }
 
  UserRegistrationFunction = () =>{
 
 
 const { areaid }  = this.state ;
 const { areaname }  = this.state ;
 const { arealatitude }  = this.state ;
 const { arealongitude }  = this.state ;
 const { areadate}  = this.state ;
 
 
 
fetch('https://employeetrackerapp.000webhostapp.com/area.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    areaid : areaid ,
    areaname : areaname,
    arealatitude  : arealatitude,
    arealongitude : arealongitude,
    areadate : areadate

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

 alert(message){
  Alert.alert(
    'Response',
    'You have successfuly enter area data',
    [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    { cancelable: false }
  )
 }
  render() {
    return (
      <View style={styles.MainContainer}>
 
      <Text style= {{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>Add an area</Text>

      <TextInput
        placeholder="Area id"
        onChangeText={areaid => this.setState({areaid})} 
        underlineColorAndroid='transparent'
        style={styles.TextInputStyleClass}
      />

      <TextInput
        placeholder="Area name"
        onChangeText={areaname => this.setState({areaname})} 
        underlineColorAndroid='transparent'
        style={styles.TextInputStyleClass}
      />

      <TextInput
        placeholder="Area latitude"
        onChangeText={arealatitude => this.setState({arealatitude})}
        underlineColorAndroid='transparent'
        style={styles.TextInputStyleClass}
     
      />


        <TextInput
        placeholder="Area longitude"
        onChangeText={arealongitude => this.setState({arealongitude})}
        underlineColorAndroid='transparent'
        style={styles.TextInputStyleClass}
    
      />


        <TextInput
        placeholder="Date"
        onChangeText={areadate => this.setState({areadate})}
        underlineColorAndroid='transparent'
        style={styles.TextInputStyleClass}
 
      />

      <Button title="Save data" onPress={this.UserRegistrationFunction} color="#2196F3" />
    


</View>
          
  );
}
}

const styles = StyleSheet.create({

MainContainer :{

justifyContent: 'center',
flex:1,
margin: 10
},

TextInputStyleClass: {

textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
// Set border Hex Color Code Here.
borderColor: '#2196F3',

// Set border Radius.
borderRadius: 5 ,

// Set border Radius.
//borderRadius: 10 ,
}

});