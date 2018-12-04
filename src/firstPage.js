import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
//<Icon name='at' size={50} color="#bf1313"/>

export default class firstPage extends Component {
  static navigationOptions={
  
    header:null,
    
}

    render() {
      return (
            <View style={styles.container}>
            <Text style={{color:'#fff',textAlign:'center',fontSize:25,marginBottom:40}}>Employee Tracking App</Text>
            <TouchableOpacity>
            <Text style={styles.inputStyle} onPress= {()=>this.props.navigation.navigate("EmployerLogin")} >Employer</Text>
            <Text style={styles.inputStyle} onPress= {()=>this.props.navigation.navigate("EmployeeLogin")} >Employee</Text>
</TouchableOpacity>
     
        </View>

      );
    }
}
 
var styles=StyleSheet.create({
container:{
    backgroundColor:'#00BFFF',
    flex:1,
    justifyContent:'center',
   paddingRight:30,
   paddingLeft:30
},
inputStyle:{
    backgroundColor:'#fff',
     marginBottom:10,
     fontSize:20,
     textAlign:'center',
     fontWeight:'bold',
     color:'#00BFFF',
     paddingTop:15,
     paddingBottom:15
}

})

