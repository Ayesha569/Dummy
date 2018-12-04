
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

export default class EmployeeMain extends Component {
   
  static navigationOptions = {
    headerTitle :'      Employee Actions',
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
          <Text style={styles.inputStyle}  onPress= {()=>this.props.navigation.navigate("MapTest")} >Mark Attendence</Text>
          <Text style={styles.inputStyle} onPress= {()=>this.props.navigation.navigate("Analysis")}>Enter Sales Detail</Text>

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
