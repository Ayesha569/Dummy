

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
  Button
} from 'react-native';
import MapView from 'react-native-maps'; // 0.21.0

export default class MapTest extends Component {
 
  constructor(props){
   super(props);
      this.state = {
        lastLat:'',
        lastLong:'',
        emp_id:''
      }
       }
  state = {
    mapRegion: null,
    lastLat_a: null,
    lastLong_b: null,

  }


UserRegistration = () =>{



  const { lastLat }  = this.state ;
  const { lastLong }  = this.state ;
   const { emp_id }  = this.state ;

 
 
 
 fetch('https://employeetrackerapp.000webhostapp.com/saveattandence.php', {
   method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({
 
 
     lastLat : this.state.lastLat_a,
     lastLong  : this.state.lastLong_b,
     emp_id:emp_id
   
 
     //name: UserName,
 
    // email: UserEmail,
 
     //password: UserPassword
 
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
          'You have successfuly saved your attandance.',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
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

  onRegionChange(region, lastLat_a, lastLong_b) {
    this.setState({
      mapRegion: region,
      // If there are no new values set use the the current ones
      lastLat_a: lastLat_a || this.state.lastLat_a,
      lastLong_b: lastLong_b || this.state.lastLong_b
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
  static navigationOptions = {
    headerTitle :'Enter EmpId to mark attandance',
    headerStyle: {
      backgroundColor:'white',
      fontSize:15,
      color:'#1e90ff',
      fontWeight:'bold',
    },
    headerTintColor :'#1e90ff',
   
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
              latitude: (this.state.lastLat_a + 0.00050) || -36.82339,
              longitude: (this.state.lastLong_b + 0.00050) || -73.03569,
            }}>
            <View>
              <Text style={{color: '#000'}}>
                { this.state.lastLong_b } / { this.state.lastLat_a }
              </Text>
            </View>
          </MapView.Marker>
        </MapView>

<View>
<TextInput   onChangeText={emp_id => this.setState({emp_id})}
    style={{fontSize: 20, justifyContent:'center', color:'#1e90ff',
    borderWidth:4,height:45, width: 300,borderColor:'#1e90ff',borderRadius:20, textAlign:'center',justifyContent:'center'}} /> 

    
    <TouchableOpacity> 
      
      
      <Text onPress={this.UserRegistration} style={{marginLeft: 50,borderColor:'#1e90ff',borderRadius:15,borderWidth:4,margin:10, width:200,textAlign:'center' }}> Save attandence </Text> 
      
      
    </TouchableOpacity>
    </View>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});

