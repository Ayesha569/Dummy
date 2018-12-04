import React, { Component } from 'react';
import {
  AppRegistry,
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

import Icon from 'react-native-vector-icons/FontAwesome';
//import Button from 'react-native-icon-button';
import {
  
  Sae,
  Fumi,
  Jiro
} from 'react-native-textinput-effects';

import MapView from 'react-native-maps'; // 0.21.0


import {StackNavigator} from 'react-navigation';

 
// Creating Login Activity.
 class DailyAttandanc extends Component {
   // Setting up Login Activity title.
  static navigationOptions =
   {
      title: 'DailyAttandanc',
   };
   constructor(props) {
 
    super(props)
 
    this.state = {
 
      emp_id: '',
      
 
    }
 
  }
 

  UserMapFunction = () =>{
 
    const { emp_id }  = this.state ;
    
    
    
   fetch('https://employeetrackerapp.000webhostapp.com/Attandance.php', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
    
       emp_id: emp_id,
    
       
    
     })
    
   }).then((response) => response.json())
         .then((responseJson) => {
    
           // If server response message same as Data Matched
          if(responseJson === 'Data Matched')
           {
    
               //Then open Profile activity and send user email to profile activity.
               this.props.navigation.navigate("MapTest");
    
           }
           else{
    
             Alert.alert(responseJson);
           }
    
         }).catch((error) => {
           console.error(error);
         });
    
    
     }
    
   render() {
   return(
    <ScrollView
    style={styles.container}
    contentContainerStyle={styles.content}
  >
    
    <View style={[styles.card1, { backgroundColor: '#fff' }]}>
          <Text style={styles.title}>Attendance</Text>
          <Jiro
            label={"Employee ID"}
            borderColor={'#00BFFF'}
            inputStyle={{ color: 'white' }}
            onChangeText={emp_id => this.setState({emp_id})}
          />
          
        
        <TouchableOpacity  style={{marginTop:40,width:200,marginLeft:50}} >
      <Icon.Button name="check"
       backgroundColor="#3b5998" size={30}  
      // onPress= {()=>this.props.navigation.navigate('Map')}>
      onPress={this.UserMapFunction}>
        Mark Attendance
      </Icon.Button>                                                                 
      </TouchableOpacity>
  </View>
     </ScrollView>
  );
}}
 
 
 

     class MyApp extends Component {
    
     static navigationOptions =
   {
      title: 'Map',
    
   }
  state = {
    mapRegion: null,
    lastLat: null,
    lastLong: null,
  }

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      // Create the object to update this.state.mapRegion through the onRegionChange function
      let region = {
        latitude:       position.coords.latitude,
        longitude:      position.coords.longitude,
        latitudeDelta:  0.00922*1.5,
        longitudeDelta: 0.00421*1.5
      }
      this.onRegionChange(region, region.latitude, region.longitude);
    });
  }

  onRegionChange(region, lastLat, lastLong) {
    this.setState({
      mapRegion: region,
      // If there are no new values set use the the current ones
      lastLat: lastLat || this.state.lastLat,
      lastLong: lastLong || this.state.lastLong
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  onMapPress(e) {
    console.log(e.nativeEvent.coordinate.longitude);
    let region = {
      latitude:       e.nativeEvent.coordinate.latitude,
      longitude:      e.nativeEvent.coordinate.longitude,
      latitudeDelta:  0.00922*1.5,
      longitudeDelta: 0.00421*1.5
    }
    this.onRegionChange(region, region.latitude, region.longitude);
  }
 
  
render() {
    return (
      <View style={{flex: 1}}>
        <MapView
          style={styles.map}
          region={this.state.mapRegion}
          showsUserLocation={true}
          followUserLocation={true}
          onRegionChange={this.onRegionChange.bind(this)}
          onPress={this.onMapPress.bind(this)}>
          <MapView.Marker

            pinColor={'hotpink'}
            coordinate={{
              latitude: (this.state.lastLat + 0.00050) || -36.82339,
              longitude: (this.state.lastLong + 0.00050) || -73.03569,
            }}>
            <View>
              <Text style={{color: '#000'}}>
                { this.state.lastLong}  / { this.state.lastLat }/>
              </Text>
              <View>
                <TouchableOpacity onPress={this.save}>
                     <Text style={styles.inputStyle}>Save Attandance!</Text>
                  </TouchableOpacity>
                </View>
            </View>
          </MapView.Marker>
        </MapView>
      </View>
    );
  }
}
 
export default DailyAttandance = StackNavigator(
{
   First: { screen: DailyAttandanc },
   
   Second: { screen: MyApp }
 
});
 


const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },

  container:{
    backgroundColor:'#000',
    flex:1,
    //justifyContent:'center',
   paddingRight:15,
   paddingLeft:15
},
  card1: {
    paddingVertical:170,
    
  },

 
title: {
  paddingBottom: 16,
  textAlign: 'center',
  //color: '#404d5b',
  color: '#3b5998',
  fontSize: 20,
  fontWeight: 'bold',
  opacity: 0.8,
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
});




