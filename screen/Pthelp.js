import React, { Component, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Button, Image, SearchBar } from "@rneui/base";
import firebase from "../database/firebaseDB";



const Pthelp = ({navigation}) => {
  
  const [fruit_list, setfruit_list] = useState([]);
  const [filtered_list, setfiltered_list] = useState([]);
  const [text, setText] = useState("");

  const getCollection = (querySnapshot) => {
    const all_data = [];
    querySnapshot.forEach((res) => {
      const { name, appearance, pic, sci_name, time, benefit, type, bookmark } =
        res.data();
      all_data.push({
        key: res.id,
        name,
        appearance,
        pic,
        sci_name,
        time,
        benefit,
        type,
        bookmark,
      });
    });
    //console.log("all_data : ", all_data);
    const filtered = all_data.filter((res) => res.type != "");
    
    setfruit_list(all_data);
    setfiltered_list(filtered);
  }

  const updateBookmark = (key,
        name,
        appearance,
        pic,
        sci_name,
        time,
        benefit,
        type,
    bookmark) => {
    const updateBookmarkDoc = firebase
      .firestore()
      .collection("Microbes")
      .doc(key);
    updateBookmarkDoc
      .set({
        name: name,
        appearance: appearance,
        pic: pic,
        sci_name: sci_name,
        time: time,
        benefit: benefit,
        type: type,
        bookmark: !bookmark,
      })
      .then(() => {
        console.log("update success!");
      });
  }

  useEffect(() => {
    const fruitCollection = firebase.firestore().collection("Microbes");
    const unsubscribe = fruitCollection.onSnapshot(getCollection);
    return () => {
      unsubscribe();
    }
  }, [])

  const Datasearch = () => {
    const searchText = text;
    const before = fruit_list.filter((r) => r.type != "");
    const search_filtered = before.filter((r) => r.name.includes(searchText)
    || r.disease.includes(searchText) || r.cause.includes(searchText) || r.symptom.includes(searchText)
   || r.type.includes(searchText));
   console.log(search_filtered);
    if (searchText == "" && search_filtered.length == 0){
      console.log("1");
        setfiltered_list(before);
        return filtered_list;
    }
    if (searchText == "" && search_filtered.length != 0) {
      console.log("2");
        setfiltered_list(before);
        return filtered_list;
    }
    if (search_filtered.length != 0 && searchText != ""){
      console.log("3");
    setfiltered_list(search_filtered);
    return filtered_list;
    } 
    if (search_filtered.length == 0 && searchText != ""){
      console.log("4");  
      alert('ไม่พบข้อมูล');
        setfiltered_list(before);
        return filtered_list;
    }
    }
    

    return (
      <View style={{flex: 1}}>
        <ScrollView>
            <View style={styles.searchBar}>
        <TextInput placeholder="ค้นหา" name="text" keyboardType="default" onChangeText={(text) => setText(text)} style={styles.search}></TextInput>
        <Button style={styles.searchbtn} onPress={()=>(console.log(text), Datasearch())}><FontAwesome5 style={{fontSize: 20}} name="search"/><Text> ค้นหา</Text></Button>
        </View>
        {filtered_list.map((item, i) => {
          return (
            
            <TouchableOpacity style={styles.gridItem} key={i} 
            onPress={()=>{navigation.navigate("ShowInfoHelp", 
            {key:item.key, 
            name:item.name,
            appearance:item.appearance,
            pic:item.pic,
            sci_name:item.sci_name,
            time:item.time,
            benefit:item.benefit,
            type:item.type,
            bookmark: item.bookmark})}}>
              <View style={styles.tab}>
                <TouchableOpacity
                  style={{ position: "absolute", top: 0, right: 5 }}
                  onPress={() => (
                    updateBookmark(item.key,
                      item.name,
                      item.appearance,
                      item.pic,
                      item.sci_name,
                      item.time,
                      item.benefit,
                      item.type,
                      item.bookmark)
                  )}
                >
                  <FontAwesome5
                    name="bookmark"
                    style={item.bookmark ? styles.bookmark : styles.unbookmark}
                  />
                </TouchableOpacity>
                <View style={styles.tab}>
                  <Image source={item.pic} style={styles.img} />
                </View>
                <View style={styles.tab}>
                  <Text style={{ fontSize: 20 }}>{item.name}</Text>
                  <br />
                  <Text style={styles.info1}>
                    {" "}
                    <FontAwesome5 name="newspaper" /> {item.sci_name}{" "}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            
          );
        })}
        </ScrollView>
      </View>
    );
  }

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 20,
    height: 200,
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: 'white'
  },
  icon: {
    fontSize: 60,
    padding: 30,
  },
  tab: {
    display: "inline-block",
    paddingTop: 15,
    paddingBottom: 20,
    paddingLeft: 10,
  },
  bookmark: {
    fontSize: 30,
    color: "green",
  },
  unbookmark: {
    fontSize: 30,
    color: "orange",
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  search: {
    backgroundColor: 'lightgray',
    height: 40,
    fontSize: 15,
    paddingLeft: 10,
    width: '100%',
    marginRight: 20
  },
  searchbtn:{
    width: '100%',
    height: 40
  },
  searchBar:{
    flexDirection: 'row', 
    alignSelf:'center',
    margin: 30
  }
});


export default Pthelp;
