import React, { Component } from 'react';

import { StyleSheet, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ListView, ActivityIndicator } from 'react-native';

import { StackNavigator } from 'react-navigation';


class Insert extends Component{

  constructor(props){
    super(props);
    this.state = {
      TextInput_Emp_id : '',
      TextInput_Area_id: ''
    }
  }


  InsertData = () => {
    fetch('https://employeetrackerapp.000webhostapp.com/assign.php',{
      method: 'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },

     body: JSON.stringify({
      emp_id : this.state.TextInput_Emp_id,
      area_id : this.state.TextInput_Area_id
     })
     }).then((response) => response.json)
         .then((responseJson) => {

            // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);

          }).catch((error) => {
            console.error(error);
          });

  }



  GoTo_Show_EmployerList_Activity_Function = () =>
  {
    this.props.navigation.navigate('Second');
    
  }


   render(){
     return(

        <View style={styles.MainContainer}>

          <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Employee Registration Form </Text>
 
       <TextInput
         
         placeholder="Enter EMP ID"

         onChangeText={ TextInputValue => this.setState({ TextInput_Emp_id : TextInputValue }) }

         underlineColorAndroid='transparent'

         style={styles.TextInputStyleClass}
       />

      <TextInput
         
         placeholder="Enter AREA ID"

         onChangeText={ TextInputValue => this.setState({ TextInput_Area_id : TextInputValue }) }

         underlineColorAndroid='transparent'

         style={styles.TextInputStyleClass}
       />


        <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.GoTo_Show_EmployerList_Activity_Function} >

        <Text style={styles.TextStyle}> SHOW ALL INSERTED Employee RECORDS IN LISTVIEW </Text>

      </TouchableOpacity>
 

       <Button title = 'Save' onPress = {this.InsertData}/>




       </View>

      )
   }

}








class ShowEmployerListActivity extends Component {

  constructor(props) { 

    super(props);

    this.state = {

      isLoading: true

    }
  }

  static navigationOptions = {
    headerTitle :'Employer',
    headerStyle: {
      backgroundColor:'#1d1d4f'
    },
    headerTintColor :'white',
    
  }

  componentDidMount() {
    
       return fetch('https://employeetrackerapp.000webhostapp.com/datashowassign.php')
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
    
     GetEmployerIDFunction=(id,emp_id, area_id)=>{

          this.props.navigation.navigate('Third', { 

            ID : id,
            EMP_ID : emp_id,
            AREA_ID : area_id,
           

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
                        this, rowData.id,
                         rowData.emp_id, 
                         rowData.area_id, 
                         
                         )} > 

                      {rowData.emp_id} 
                      
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
    
        TextInput_Emp_id : '',
        TextInput_Area_id: ''

       }
    
     }

     componentDidMount(){

      this.setState({ 
        TextInput_ID : this.props.navigation.state.params.ID,
        TextInput_Emp_id: this.props.navigation.state.params.EMP_ID,
        TextInput_Area_id: this.props.navigation.state.params.AREA_ID,
        

      })

     }
  
    static navigationOptions =
    {
       title: 'EditEmployerRecordActivity',
    };

    UpdateEmployerRecord = () =>{
      
            fetch('https://employeetrackerapp.000webhostapp.com/updateassign.php', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
      
              id : this.state.TextInput_ID,

              emp_id : this.state.TextInput_Emp_id,
      
              area_id : this.state.TextInput_Area_id,
      
              

      
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
            
            placeholder=" Update EMP ID "
            
            value={this.state.TextInput_Emp_id}
   
            onChangeText={ TextInputValue => this.setState({ TextInput_Emp_id : TextInputValue }) }
   
            underlineColorAndroid='transparent'
   
            style={styles.TextInputStyleClass}
          />
   
         <TextInput
            
            placeholder="Update AREA ID"

            value={this.state.TextInput_Area_id}
   
            onChangeText={ TextInputValue => this.setState({ TextInput_Area_id : TextInputValue }) }
   
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

    First: { screen: Insert },

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







