


import React, { Component } from 'react';

import { StyleSheet, Text, View, ListView, ActivityIndicator,ScrollView,Platform ,TextInput} from 'react-native';

import { StackNavigator } from 'react-navigation';

class AnalysisTable extends Component {
 

  constructor(props) { 

    super(props);

    this.state = {

      isLoading: true

    }
  }
  static navigationOptions =
  {
     
     header: null
     
  };
  
 

  OpenSecondActivity(emp_id) {
       
    this.props.navigation.navigate('Second', { ListViewClickItemHolder: emp_id });

  }

  componentDidMount() {
    
       return fetch('https://employeetrackerapp.000webhostapp.com/showAnalysisdata.php')
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
   
       
        <ScrollView horizontal={true}>
   
        <View style={styles.MainContainer}>
  
          <View style={styles.rowView} >
  
          <Text style={styles.text}> Emp_ID </Text>
   
          <ListView
   
            dataSource={this.state.dataSource}
   
            renderSeparator= {this.ListViewItemSeparator}
   
            renderRow={(rowData) => <Text style={styles.rowViewContainer} 
            onPress={this.OpenSecondActivity.bind(this, rowData.emp_id)} > 
                 {rowData.emp_id}</Text>}
   
          />
  
          </View>
  
  
           <View style={styles.rowView} >
           <Text style={styles.text}> Date </Text>
  
   
        <ListView
  
         dataSource={this.state.dataSource}
  
         renderSeparator= {this.ListViewItemSeparator}
  
         renderRow={(rowData) => <Text style={styles.rowViewContainer} 
         onPress={this.OpenSecondActivity.bind(this, rowData.emp_id)} >{rowData.date} </Text>}
  
   />
  
         </View>
  
            
  
             
      <View style={styles.rowView} >
  
              <Text style={styles.text}> Products Given </Text>
  
   
      <ListView
  
       dataSource={this.state.dataSource}
  
       renderSeparator= {this.ListViewItemSeparator}
  
       renderRow={(rowData) => <Text style={styles.rowViewContainer} 
       onPress={this.OpenSecondActivity.bind(this, rowData.emp_id)} >{rowData.Products_Given} </Text>}
  
  />
  
  </View>
  
  <View style={styles.rowView} >
  
  <Text style={styles.text}> Products Sold </Text>


<ListView

dataSource={this.state.dataSource}

renderSeparator= {this.ListViewItemSeparator}

renderRow={(rowData) => <Text style={styles.rowViewContainer} 
onPress={this.OpenSecondActivity.bind(this, rowData.emp_id)} >{rowData.Product_Sold} </Text>}

/>

</View>

   <View style={styles.rowView} >
  
  <Text style={styles.text}> Area ID </Text>


<ListView

dataSource={this.state.dataSource}

renderSeparator= {this.ListViewItemSeparator}

renderRow={(rowData) => <Text style={styles.rowViewContainer} 
onPress={this.OpenSecondActivity.bind(this, rowData.emp_id)} >{rowData.area_id} </Text>}

/>

</View>


  
          </View>
 </ScrollView>
   
   
        
      );
    }
  }





class SecondActivity extends Component
{
 static navigationOptions =
 {
    title: 'SecondActivity',
    header: false
 };

 constructor(props) {
    
       super(props)

       this.state={

        IdHolder : '',
        NameHolder : '',
        DOBHolder : '',
        CNICHolder : '',
        AddressHolder : '',
        
       

       }
    
     }

 componentDidMount(){

  fetch('https://employeetrackerapp.000webhostapp.com/showprofiledata.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
       
          // Getting the id.
          emp_id: this.props.navigation.state.params.ListViewClickItemHolder
       
        })
       
      }).then((response) => response.json())
            .then((responseJson) => {

              this.setState({

                IdHolder : responseJson[0].emp_id,
                NameHolder : responseJson[0].emp_name,
                DOBHolder : responseJson[0].emp_dob,
                CNICHolder : responseJson[0].emp_cnic,
                AddressHolder : responseJson[0].emp_address,

              })
              
            }).catch((error) => {
              console.error(error);
            });
       
 }

 render()
 {
    return(
      
<ScrollView vetical={true} style={styles.container} >

       <Text style={{   
                textAlign:'center',
                justifyContent:'center',
                marginTop:60,
                fontSize:25,
                color:'#1e90ff'
              }}>
       EMPLOYEE   PROFILE 
       </Text>
       <View style={styles.direc} >
         <Text style={styles.textstyle}>Emp ID:  </Text>
          
         <TextInput style={styles.input}>
          { + this.state.IdHolder} 
            </TextInput>
           </View>

           <View style={styles.direc} >
         <Text style={styles.textstyle}>Name:   </Text>
         <TextInput style={styles.input}>
          {'' + this.state.NameHolder} 
            </TextInput>
           
           </View>
                
           
           <View style={styles.direc} >
         <Text style={styles.textstyle}>DOB:     </Text>
          
           <TextInput style={styles.input}>
          { + this.state.DOBHolder} 
            </TextInput>
           </View>

            <View style={styles.direc} >
         <Text style={styles.textstyle}>CNIC:    </Text>
          
           <TextInput style={styles.input}>
          { + this.state.CNICHolder} 
            </TextInput>
           </View>

            <View style={styles.direc} >
         <Text style={styles.textstyle}>Address:</Text>
          
           <TextInput style={styles.input}>
          {'' + this.state.AddressHolder} 
            </TextInput>
           </View>


           
           </ScrollView>
      
    );
 }
}

export default Myproject = StackNavigator(
{
 First: { screen: AnalysisTable },
 
 Second: { screen: SecondActivity }
});

const styles = StyleSheet.create({

  MainContainer :{
 
    alignItems: 'center',
    flex:1,
    paddingTop: 80,
    backgroundColor: '#fff',
    flexDirection: 'row',
 
  },
container:{
  backgroundColor: '#fff',
  flex:1,
  paddingTop:40
  //marginTop:40
  
},

  TextStyle:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold'
  },
  MainContainer_For_Show_EmployerList_Activity :{
    
    flex:1,
    paddingTop: (Platform.OS == 'ios') ? 20 : 0,
    marginLeft: 5,
    marginRight: 5
    
    },

  
    rowViewContainer: {
      
      fontSize: 14,
      //paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
      color:'#000',
      textAlign:'center'
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
      
    },
    rowView:{
      //marginLeft:10,
    
  },
   



    input:
    {
      
      width:110,
      fontSize:13,
      marginTop:10,
      marginLeft:40,
      paddingLeft:20,
      //borderWidth:2
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
    },
   
});



