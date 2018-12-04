




















import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  ListView,
  ScrollView
} from 'react-native';
export default class DailyAttandance extends Component{
     
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true
      }
    }
  GetItem (emp_id, lastLat) {
     
    Alert.alert(emp_id, lastLat);
   
    }
    static navigationOptions =
    {
       title: 'Attandance Activity',
    };
   
   
    componentDidMount() {
   
      return fetch('https://employeetrackerapp.000webhostapp.com/New.php')
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
  
   /*  GetStudentIDFunction=(employee_id,employee_name, employee_password, employee_dob, employee_address, employee_phonenum)=>{
   
      this.props.navigation.navigate('Third', { 
  
        ID : employee_id,
        NAME : employee_name,
        PASSWORD : employee_password,
        DOB : employee_dob,
        ADDRESS : employee_address,
        PHONENUM : employee_phonenum,
  
  
      })
  
  }*/
   
    ListViewItemSeparator = () => {
      return (
        <View
          style={{
            height: .5,
            width: "100",
            backgroundColor: "#000",
            flex:1,
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
        <ScrollView horizontal={true} vertical={true} >
     
        <View style={styles.MainContainer}>
        
        
       
  
          <View style={styles.rowView} >
  
          <Text style={styles.text}> Emp_ID </Text>
   
          <ListView
   
            dataSource={this.state.dataSource}
   
           // renderSeparator= {this.ListViewItemSeparator}
   
            renderRow={(rowData) => <Text style={styles.rowViewContainer} 
            onPress={this.GetItem.bind(this, rowData.emp_id)} >{rowData.emp_id}</Text>}
   
          />
  
          </View>
  
  
           <View style={styles.rowView} >
           <Text style={styles.text}> lastLat </Text>
  
   
        <ListView
  
         dataSource={this.state.dataSource}
  
        // renderSeparator= {this.ListViewItemSeparator}
  
         renderRow={(rowData) => <Text style={styles.rowViewContainer} 
         onPress={this.GetItem.bind(this, rowData.lastLat)} >{rowData.lastLat} </Text>}
  
   />
  
         </View>
  
            
  
             
      <View style={styles.rowView} >
  
              <Text style={styles.text}> lastlong  </Text>
  
   
      <ListView
  
       dataSource={this.state.dataSource}
  
       //renderSeparator= {this.ListViewItemSeparator}
  
       renderRow={(rowData) => <Text style={styles.rowViewContainer} 
       onPress={this.GetItem.bind(this, rowData.lastLong)} >{rowData.lastLong} </Text>}
  
  />
  
  </View>
  
  
  
           <View style={styles.rowView} >
  
                   <Text style={styles.text}> Area Id </Text>
  
   
        <ListView
  
        dataSource={this.state.dataSource}
  
        //renderSeparator= {this.ListViewItemSeparator}
  
       renderRow={(rowData) => <Text style={styles.rowViewContainer} 
       onPress={this.GetItem.bind(this, rowData.area_id)} >{rowData.area_id} </Text>}
  
  />
  
 
  
  </View>
   
        </View>
        </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
  
  MainContainer :{
 
    alignItems: 'center',
    flex:1,
    paddingTop: 40,
    backgroundColor: '#fff',
    flexDirection: 'row',
 
  },
  
 
  TextStyle:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold'
  },
 
  rowViewContainer: {
      
    fontSize: 14,
    //paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    color:'#000',
    textAlign:'center'
  },
  rowView:{
      //marginLeft:10,
    
  },
  text:{
    fontSize:16,
    color:'#fff',
    textAlign:'center',
   // borderRadius: 7,
    
   // borderColor: '#FF5722',
    backgroundColor : '#0000FF',
    //padding : 2,
    //flex:2,
    flexDirection:'row',
    justifyContent: 'center',
    height:60,
    paddingTop:14,
    paddingRight:12
    
  }
 
});