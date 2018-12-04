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

export default class EmployerMain extends Component {
   
  static navigationOptions = {
    headerTitle :'      Employer Actions',
    headerStyle: {
      backgroundColor:'white',
      fontSize:15,
      color:'#22aa99',
      fontWeight:'bold',
    },
    headerTintColor :'#22aa99',
   
  }
  render() {
    return (
          <View style={styles.container}>
          <TouchableOpacity>
          <Text style={styles.inputStyle} onPress= {()=>this.props.navigation.navigate("EmployerProfile")}>Add New Employees</Text>
          <Text style={styles.inputStyle} onPress= {()=>this.props.navigation.navigate("AreasTable")}>View All Areas</Text>
          <Text style={styles.inputStyle} onPress= {()=>this.props.navigation.navigate("AddArea")}>Add An Area</Text>
          <Text style={styles.inputStyle} onPress= {()=>this.props.navigation.navigate("AnalysisTable")}>Analysis</Text>
          <Text style={styles.inputStyle} onPress= {()=>this.props.navigation.navigate("Assign")}>Assign An Area</Text>
          <Text style={styles.inputStyle}  onPress= {()=>this.props.navigation.navigate("NEW")} >Daily Attendence</Text>
          <Text style={styles.inputStyle} onPress= {()=>this.props.navigation.navigate("EditDetail")}>Edit Employee Profile</Text>
         
</TouchableOpacity>

      </View>

    );
  }
}

var styles=StyleSheet.create({
  container:{
      backgroundColor:'#26AE90',
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
       color:'#26AE90',
       paddingTop:15,
       paddingBottom:15
  }
})
