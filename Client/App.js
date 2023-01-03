import React , { useState,useEffect}  from 'react';
import axios from "axios" 
// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Text ,TextInput} from 'react-native';

//import Card
import { Card } from 'react-native-elements';

const App = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3001/api/getPost").then((res)=>{
      setData(console.log(res.data))
    })
  
  },[])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Card title="Local Modules">
          <TextInput placeholder='hello' />
          {/*react-native-elements Card*/}
          <Text style={styles.paragraph}>
           
          </Text>
        </Card>
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
