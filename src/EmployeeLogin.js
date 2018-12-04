
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert
} from 'react-native';


//import { StackNavigator } from 'react-navigation'

//import Icon from 'react-native-vector-icons/FontAwesome'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {
  
  Sae,
  Fumi
} from 'react-native-textinput-effects';



export default class Employeelogin extends Component {

  constructor(props) {

    super(props)

    this.state = {

      Userid: '',
      UserPassword: '',

    }

  }

UserLoginFunction = () =>{

 const { Userid }  = this.state ;
 const { UserPassword }  = this.state ;


fetch('https://employeetrackerapp.000webhostapp.com/Employeelogin.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({

    emp_id: Userid,

    emp_password: UserPassword

  })

}).then((response) => response.json())
      .then((responseJson) => {

        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {

            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate('EmployeeMain');

        }
        else{

          Alert.alert(responseJson);
        }

      }).catch((error) => {
        console.error(error);
      });


  }
  static navigationOptions = {
    headerTitle :'     Employee Sign In',
    headerStyle: {
      backgroundColor:'white',
      fontSize:15,
      color:'#00bbff'
    },
    headerTintColor :'#00bbff',
   
  }

   render() {
    return(
      
  
<View style={{flex:1}}>
          
<ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={{height:150}}></View>
      <View style={styles.inputStyle}>
          <Fumi 
            label={'Employee ID'}
            labelStyle={{ color: "rgba(0,0,255,0.2)"}}
            onChangeText={Userid => this.setState({Userid})}
           
           inputStyle={{ color: '#00BFFF' }}
            iconClass={FontAwesomeIcon}
            iconName={'user'}
            iconColor={'#00BFFF'}
            iconSize={25}
          />
          
          <Fumi
            style={styles.input}
            label={'Password'}
           
           labelStyle={{ color: "rgba(0,0,255,0.2)" }}
           onChangeText={UserPassword => this.setState({UserPassword})}
            inputStyle={{ color: '#00BFFF' }}
            iconClass={FontAwesomeIcon}
            iconName={'lock'}
            iconColor={'#00BFFF'}
            iconSize={25}
            secureTextEntry={true}
          />
         <View style={{width:300,alignItems:'center'}}>
          <TouchableOpacity style={{height:50,
                                    width:150,
                                    backgroundColor:'white',
                                    marginTop:20,
                                    justifyContent:'center',
                                    alignItems:'center'}} 
                                    onPress={this.UserLoginFunction}>
              <Text 
                style={{
                  color:'#00BFFF',
                  fontSize:22,
                  fontWeight:'bold',                
                }}
              
              >Sign In</Text>
            

          
            
          </TouchableOpacity>
         </View>

          </View>
          </ScrollView>
        </View>
       
    );}
  }



  const styles = StyleSheet.create({
    container:{
      backgroundColor:'#00BFFF',
      flex:1,
      //justifyContent:'center',
     paddingRight:15,
     paddingLeft:15
  },
    
    card2: {
      //padding: 16,
      flex:1,
    },
    input: {
      marginTop: 4,
    },
    
    inputStyle:{
      //backgroundColor:'#fff',
       marginBottom:8,
       paddingTop:20,
       paddingBottom:10,
       marginTop:20
  }

  });
