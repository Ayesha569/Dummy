import React, { Component } from 'react';
import { StyleSheet, View, Text,ScrollView,TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row,Cell } from 'react-native-table-component';
export default class table3 extends Component {
constructor(props) {
super(props);
this.state = {
tableHead:['Emp_id', 'Area_id', 'Status', 'Date','Location','Profile'],
widthArr: [100, 100, 100, 100, 100, 100]
}
}
render() {
const state = this.state;
const tableData = [];
for (let i = 0; i < 10; i += 1) {
const rowData = [];
for (let j = 0; j < 6; j += 1) {
rowData.push(`${i}${j}`);
}
tableData.push(rowData);
}
const element = (data, index) => (
<TouchableOpacity onPress={() =>this.props.navigation.navigate("profile")} >
<View style={styles.btn} >
<Text style={styles.btnText}>Click</Text>
</View>
</TouchableOpacity>
);
return (
<View style={styles.container}>
<ScrollView horizontal={true}>
<View>
<Table borderStyle={{borderColor: 'transparent'}}>
<Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text1}/>
</Table>
<ScrollView style={styles.dataWrapper}>
<Table borderStyle={{borderColor: 'transparent'}}>
{
tableData.map((rowData,index) => (
<TableWrapper key={index} style={styles.row}>
{
rowData.map((cellData, cellIndex) => (
<Cell key={cellIndex} data={rowData} widthArr={state.widthArr} data={cellIndex === 5 ? element(cellData, index) : cellData} textStyle={styles.text}/>
))
}
</TableWrapper>
))
}
</Table>
</ScrollView>
</View>
</ScrollView>
</View>
)
}
}
const styles = StyleSheet.create({
container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
header: { height: 50, backgroundColor: '#00BFFF' },
text: { textAlign: 'center', fontWeight: '100',color:'#00BFFF' },
text1: { color:'#fff',fontSize:15},
dataWrapper: { marginTop: -1 },
row: { height: 40,flexDirection:'row' },
//btn: { width: 25, height: 18, backgroundColor: '#78B7BB', borderRadius: 1,alignItems:'center' },
btnText: { textAlign: 'center', color: '#fff' },
btn:{backgroundColor:'#78B7BB', height: 20,alignItems:'center'}
});

