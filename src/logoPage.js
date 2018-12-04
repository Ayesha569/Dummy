/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  Image,
  View
  
} from 'react-native';



export default class logoPage extends Component {
    componentWillMount(){
        setTimeout(() => {
            
            this.props.navigation.navigate("firstPage")
        }, 3000);
    }
    static navigationOptions = {
      header: null
   }
  render() {
     console.disableYellowBox=true;
    return (
      <View style={styles.container}>
      <View style={styles.logo}>
      <Image style={{width:300,height:150,alignItems:'center',marginBottom:10,marginLeft:35}}
      source={require('../src/Pictures/mr.png')} 
      />
      <Text style={styles.logotext}>
      <Text style={{color:'#00BFFF'}}>Employee Tracker App</Text>
     
      

      </Text>


      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    backgroundColor: '#eeeef1',
  },
  logo: {
    
    //textAlign: 'center',
    justifyContent: 'center',
    flexGrow:1,
    paddingRight:40
    

  },
  logotext:{
    color: '#00BFFf',
    fontSize:24,
    fontWeight:'bold',
     textAlign: 'center',
     justifyContent: 'center',
     paddingLeft:30

  },
  
});
AppRegistry.registerComponent('logoPage', () => logoPage);

