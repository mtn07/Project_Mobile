import { View, Text, FlatList, StyleSheet, Pressable, Button} from 'react-native'
import React, { useEffect } from 'react'
import firebase from "../database/firebaseDB";
import { FontAwesome5 } from "@expo/vector-icons";


export default function App() {


   const [users, setUsers] = React.useState([]);
  const fruitsRef = firebase.firestore().collection('Alert');

useEffect(async () => {
  fruitsRef
  .onSnapshot(
      (querySnapshot) => {
          const users = [];
          querySnapshot.forEach((doc) => {
              const { disease, environment, growth_stage, name, prevention, symptoms } = doc.data();
              users.push({
                  id: doc.id,
                  disease,
                  environment,
                  growth_stage,
                  name,
                  prevention,
                  symptoms
                })
              })
          setUsers(users);
          }
      )
  }, [])

  return (
  <View style={{flex:1, marginTop:20}}>
      <FlatList
      style={{height:'100%'}}
      data={users}
      numColumns={1}
      renderItem={({item}) => (
        <Pressable style={styles.container}>
              <View style={styles.innerContainer}>
                  <Text style={styles.itemHeading}>! ระวัง {item.disease}ใน{item.name}</Text>
                  <Text style={styles.itemText}><FontAwesome5 name="cloud"/ > สภาพอากาศในช่วงนี้มี{item.environment} เตือนผู้ที่ปลูก {item.name} ในระยะ{item.growth_stage}รับมือกับ{item.disease}</Text>
                  <Text style={styles.itemsubheading}><FontAwesome5 name="disease"/> อาการของโรค{item.disease}</Text>
                  <Text style={styles.itemText}>{item.symptoms}</Text>
                  <View style={styles.innerContainer1}>
                    <br></br>
                  <Text style={styles.itemsubheading1}><FontAwesome5 name="lightbulb"/> แนวทางป้องกัน หรือ แก้ไข</Text> 
                  <Text style={styles.itemText}>{item.prevention}</Text>
                  </View>
                  
              </View>
        </Pressable>
        
      )}
      />
  </View>
)
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#EEEEEE',
      padding: 5,
      borderRadius: 15,
      margin:20,
      marginLeft:30,
      marginRight:30,
      marginHorizontal:10,
      alignItems: 'center',
      justifyContent: 'center',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },
  innerContainer: {
      flexDirection:'column',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  innerContainer1: {
    flexDirection:'column',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
  itemHeading: {
      fontSize: 27,
      fontWeight: 'bold',
      color: '#00ADB5',
      margin: 10,
  },
  itemsubheading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0D4C92',
    margin:5,
},
  itemsubheading1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0D4C92',
    margin:5,
  },
  itemText: {
      fontSize: 23,
      color: '#222831',
      margin: 10,
  },
  itemImage: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    width: 349,
    height: 133,
  },
  itemButton: {
      backgroundColor: 'blue',
      padding: 10,
      margin: 10,
      borderRadius: 10,
  },
  itemButtonText: {
      color: 'white',
      fontSize: 15,
  },
});