import React, { Component } from 'react';

import { StyleSheet, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ListView, ActivityIndicator } from 'react-native';

import { StackNavigator } from 'react-navigation';

class MainActivity extends Component {

  static navigationOptions =
  {
     title: 'MainActivity',
  };

constructor(props) {

   super(props)

   this.state = {

     TextInput_Employee_Name: '',
     TextInput_Employee_Password: '',
     TextInput_Employee_PhoneNumber: '',
     TextInput_Employee_Dob: '',
     TextInput_Employee_Address:''


   }

 }

 InsertEmployerRecordsToServer = () =>{

      fetch('https://employeetrackerapp.000webhostapp.com/employerlogin.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        employee_name : this.state.TextInput_Employee_Name,

        employee_password : this.state.TextInput_Employee_Password,

        employee_phone_number : this.state.TextInput_Employee_PhoneNumber,

        employee_dob: this.state.TextInput_Employee_Dob,

        employee_address: this.state.TextInput_Employee_Address


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
    'You have successfuly edited data',
    [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    { cancelable: false }
  )
 }
 GoTo_Show_EmployerList_Activity_Function = () =>
  {
    this.props.navigation.navigate('Second');
    
  }

 render() {
   return (

<View style={styles.MainContainer}>


       <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Student Registration Form </Text>
 
       <TextInput
         
         placeholder="Enter Employee Name"

         onChangeText={ TextInputValue => this.setState({ TextInput_Employee_Name : TextInputValue }) }

         underlineColorAndroid='transparent'

         style={styles.TextInputStyleClass}
       />

      <TextInput
         
         placeholder="Enter Employee Password"

         onChangeText={ TextInputValue => this.setState({ TextInput_Employee_Password : TextInputValue }) }

         underlineColorAndroid='transparent'

         style={styles.TextInputStyleClass}
       />

      <TextInput
         
         placeholder="Enter Employee Phone Number"

         onChangeText={ TextInputValue => this.setState({ TextInput_Employee_PhoneNumber : TextInputValue }) }

         underlineColorAndroid='transparent'

         style={styles.TextInputStyleClass}
       />

       <TextInput

         placeholder="Enter Employee Date-of-birth"

         onChangeText={ TextInputValue => this.setState({ TextInput_Employee_Dob : TextInputValue }) }

         underlineColorAndroid='transparent'

         style={styles.TextInputStyleClass}
       />


       <TextInput

         placeholder="Enter Employee Address"

         onChangeText={ TextInputValue => this.setState({ TextInput_Employee_Address : TextInputValue }) }

         underlineColorAndroid='transparent'

         style={styles.TextInputStyleClass}
       />

      <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.InsertEmployerRecordsToServer} >

        <Text style={styles.TextStyle}> INSERT Employee RECORD TO SERVER </Text>

      </TouchableOpacity>

      <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.GoTo_Show_EmployerList_Activity_Function} >

        <Text style={styles.TextStyle}> SHOW ALL INSERTED Employee RECORDS IN LISTVIEW </Text>

      </TouchableOpacity>
 

</View>
           
   );
 }
}

class ShowEmployerListActivity extends Component {

  constructor(props) { 

    super(props);

    this.state = {

      isLoading: true

    }
  }

  static navigationOptions =
  {
     title: 'ShowEmployerListActivity',
  };

  componentDidMount() {
    
       return fetch('https://employeetrackerapp.000webhostapp.com/datashow.php')
         .then((response) => response.json())
         .then((responseJson) => {
           let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
           this.setState({
             isLoading: false,
             dataSource: ds.cloneWithRows(responseJson),
           }, function() {
             // In this block you can do something with new state.
           });
         })
         .catch((error) => {
           console.error(error);
         });
     }
    
     GetEmployerIDFunction=(employee_id,employee_name, employee_password, employee_phone_number, employee_dob, employee_address)=>{

          this.props.navigation.navigate('Third', { 

            ID : employee_id,
            NAME : employee_name,
            PASSWORD : employee_password,
            PHONE_NUMBER : employee_phone_number,
            DOB : employee_dob,
            ADDRESS : employee_address

          });

     }

     ListViewItemSeparator = () => {
       return (
         <View
           style={{
             height: .5,
             width: "100%",
             backgroundColor: "#000",
           }}
         />
       );
     }

     render() {
      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }
   
      return (
   
        <View style={styles.MainContainer_For_Show_EmployerList_Activity}>
   
          <ListView
   
            dataSource={this.state.dataSource}
   
            renderSeparator= {this.ListViewItemSeparator}
   
            renderRow={ (rowData) => <Text style={styles.rowViewContainer} 

                      onPress={this.GetEmployerIDFunction.bind(
                        this, rowData.employee_id,
                         rowData.employee_name, 
                         rowData.employee_password, 
                         rowData.employee_phone_number, 
                         rowData.employee_dob,
                         rowData.employee_address
                         )} > 

                      {rowData.employee_name} 
                      
                      </Text> }
   
          />
   
        </View>
      );
    }

}

class EditEmployerRecordActivity extends Component {
  
  constructor(props) {
    
       super(props)
    
       this.state = {
    
         TextInput_Employee_ID: '',
         TextInput_Employee_Name: '',
         TextInput_Employee_Password: '',
         TextInput_Employee_PhoneNumber: '',
         TextInput_Employee_Dob: '',
         TextInput_Employee_Address:''

       }
    
     }

     componentDidMount(){

      this.setState({ 
        TextInput_Employee_ID : this.props.navigation.state.params.ID,
        TextInput_Employee_Name: this.props.navigation.state.params.NAME,
        TextInput_Employee_Password: this.props.navigation.state.params.PASSWORD,
        TextInput_Employee_PhoneNumber: this.props.navigation.state.params.PHONE_NUMBER,
        TextInput_Employee_Dob: this.props.navigation.state.params.DOB,
        TextInput_Employee_Address: this.props.navigation.state.params.ADDRESS,

      })

     }
  
    static navigationOptions =
    {
       title: 'EditEmployerRecordActivity',
    };

    UpdateEmployerRecord = () =>{
      
            fetch('https://employeetrackerapp.000webhostapp.com/update.php', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
      
              employee_id : this.state.TextInput_Employee_ID,

              employee_name : this.state.TextInput_Employee_Name,
      
              employee_password : this.state.TextInput_Employee_Password,
      
              employee_phone_number : this.state.TextInput_Employee_PhoneNumber,
      
              employee_dob: this.state.TextInput_Employee_Dob,

              employee_address: this.state.TextInput_Employee_Address

      
            })
      
            }).then((response) => response.json)
                .then((responseJson) => {
      
                  // Showing response message coming from server updating records.
                  Alert.alert(responseJson);
      
                }).catch((error) => {
                  console.error(error);
                });
      
      }


  

    render() {

      return (
   
   <View style={styles.MainContainer}>
   
          <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Edit Employer Record Form </Text>
    
          <TextInput
            
            placeholder=" Update Employee Name "
            
            value={this.state.TextInput_Employee_Name}
   
            onChangeText={ TextInputValue => this.setState({ TextInput_Employee_Name : TextInputValue }) }
   
            underlineColorAndroid='transparent'
   
            style={styles.TextInputStyleClass}
          />
   
         <TextInput
            
            placeholder="Update Password"

            value={this.state.TextInput_Employee_Password}
   
            onChangeText={ TextInputValue => this.setState({ TextInput_Employee_Password : TextInputValue }) }
   
            underlineColorAndroid='transparent'
   
            style={styles.TextInputStyleClass}
          />
   
         <TextInput
            
            placeholder="Update Employee Phone Number"

            value={this.state.TextInput_Employee_PhoneNumber}
   
            onChangeText={ TextInputValue => this.setState({ TextInput_Employee_PhoneNumber : TextInputValue }) }
   
            underlineColorAndroid='transparent'
   
            style={styles.TextInputStyleClass}
          />
   
          <TextInput
   
            placeholder="Update Employee DOB"

            value={this.state.TextInput_Employee_Dob}
   
            onChangeText={ TextInputValue => this.setState({ TextInput_Employee_Dob : TextInputValue }) }
   
            underlineColorAndroid='transparent'
   
            style={styles.TextInputStyleClass}
          />

          <TextInput
   
            placeholder="Update Employee ADDRESS"

            value={this.state.TextInput_Employee_Address}
   
            onChangeText={ TextInputValue => this.setState({ TextInput_Employee_Address : TextInputValue }) }
   
            underlineColorAndroid='transparent'
   
            style={styles.TextInputStyleClass}
          />
   
         <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.UpdateEmployerRecord} >
   
            <Text style={styles.TextStyle}> UPDATE Employee RECORD </Text>
   
         </TouchableOpacity>
   
       
   
   </View>
              
      );
    }

}

export default MyNewProject = StackNavigator(

  {

    First: { screen: MainActivity },

    Second: { screen: ShowEmployerListActivity },

    Third: { screen: EditEmployerRecordActivity }

  });

const styles = StyleSheet.create({

  MainContainer :{

    alignItems: 'center',
    flex:1,
    paddingTop: 30,
    backgroundColor: '#fff'

  },

  MainContainer_For_Show_EmployerList_Activity :{
    
    flex:1,
    paddingTop: (Platform.OS == 'ios') ? 20 : 0,
    marginLeft: 5,
    marginRight: 5
    
    },

  TextInputStyleClass: {

  textAlign: 'center',
  width: '90%',
  marginBottom: 7,
  height: 40,
  borderWidth: 1,
  borderColor: '#f4f442',
  borderRadius: 5 ,

  },

  TouchableOpacityStyle: {

    paddingTop:10,
    paddingBottom:10,
    borderRadius:7,
    marginBottom:7,
    width: '100%',
    backgroundColor: '#f4f442'

  },

  TextStyle:{
    color:'black',
    textAlign:'center',
  },

  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  }

});