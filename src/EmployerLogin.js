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
  
} from 'react-native-textinput-effects';

export default class EmployerLogin extends Component {

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


fetch('https://employeetrackerapp.000webhostapp.com/user_registration.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({

    id: Userid,

    password: UserPassword

  })

}).then((response) => response.json())
      .then((responseJson) => {

        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {

            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate('EmployerMain');

        }
        else{

          Alert.alert(responseJson);
        }

      }).catch((error) => {
        console.error(error);
      });


  }
  static navigationOptions = {
    headerTitle :'       Employer Sign In',
    headerStyle: {
      backgroundColor:'#00bbff',
      fontSize:15,
      color:'white'
    },
    headerTintColor :'white',
   
  }
   render() {
    return(
      <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
<View>
          
      <View style={{height:150}}></View>
      <View style={styles.inputStyle}>
          <Sae 
            label={'Employee ID'}
            labelStyle={{ color: "rgba(0,0,255,0.2)" }}
            onChangeText={Userid => this.setState({Userid})}
           inputStyle={{ color: '#00BFFF' }}
            iconClass={FontAwesomeIcon}
            iconName={'pencil'}
            iconColor={'#00BFFF'}
          />
         
          <Sae
            style={styles.input}
            label={'Password'}
           
           labelStyle={{ color: "rgba(0,0,255,0.2)" }}
           onChangeText={UserPassword => this.setState({UserPassword})}
            inputStyle={{ color: '#00BFFF' }}
            iconClass={FontAwesomeIcon}
            iconName={'lock'}
            iconColor={'#00BFFF'}
            iconSize={20}
            secureTextEntry={true}
          />
          <TouchableOpacity style={{marginTop:20}}>
          <Text 
          style={{
            //backgroundColor:'#1E90FF',
            backgroundColor:'#00BFFF',
            color:'#fff',
            fontSize:20,
            paddingBottom:10,
            paddingTop:10,
            marginTop:20,
            textAlign:'center',
            
            marginLeft:10 ,
            width:340
          }}
          
            onPress={this.UserLoginFunction}

          >Sign In</Text>
        

        
          
        </TouchableOpacity>

          </View>
        </View>
        </ScrollView>
    );}
  }



  const styles = StyleSheet.create({
    container:{
      backgroundColor:'#fff',
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
       paddingTop:5,
       paddingBottom:10,
       marginTop:8
  }

  });