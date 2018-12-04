/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import logoPage from './src/logoPage'

import firstPage from './src/firstPage'
import EmployerLogin from './src/EmployerLogin'
import EmployeeLogin from './src/EmployeeLogin'
import EmployerMain from './src/EmployerMain'
import EmployeeMain from './src/EmployeeMain'
import EmployeeProfile from './src/EmployeeProfile'
import EmployerProfile from './src/EmployerProfile'
import EditDetail from './src/EditDetail'
import MapTest from './src/MapTest';
import table3 from './src/table3';
import AddArea from './src/AddArea';
import AreasTable from './src/AreasTable';
import DailyAttandance from './src/DailyAttandance';
import Analysis from './src/Analysis';
import AnalysisTable from './src/AnalysisTable';
import Assign from './src/Assign'; 
import NEW from './src/NEW';


const stacknavi=StackNavigator({
  logoPage:{
     screen:logoPage,
  },
firstPage:{
    screen:firstPage,
  },
  EmployerLogin:{
    screen:EmployerLogin,
  },
  EmployeeLogin:{
    screen:EmployeeLogin,
  },
  EmployerMain:{
    screen:EmployerMain,
  },
  EmployeeMain:{
    screen:EmployeeMain,
  },
  EmployeeProfile:{
    screen:EmployeeProfile,
  },
  EmployerProfile:{
    screen:EmployerProfile,
  },
  MapTest:{
    screen:MapTest,
  },
  table3:{
    screen:table3,
  },
  EditDetail:{
    screen:EditDetail,
  },
  AddArea:{
    screen:AddArea,
  },
  AreasTable:{
    screen:AreasTable,
  },
  DailyAttandance:{
    screen:DailyAttandance,
  },
  Analysis:{
    screen:Analysis,
  },
  AnalysisTable:{
    screen:AnalysisTable,
  },
  Assign:{
    screen:Assign,
  },
  NEW:{
    screen:NEW,
  },

})
export default stacknavi;





