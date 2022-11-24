import React, {Component} from "react";
import {Image, ScrollView, View, Text, StyleSheet} from "react-native";


const Showinfo = ({ route}) => {
    const {key, 
        name,
        disease,
        cause,
        symptom,
        prevention,
        type,
        pic,
        bookmark} = route.params;
        return (
        <ScrollView>
            <View style={styles.gridItem1}>
            <Text style={{textAlign: "center", fontSize: 20, marginTop: 10}}><b>{disease}</b></Text>
            <Image style={styles.pic} source={{uri: pic}}></Image>
            </View>
            <View style={styles.gridItem}>
                <Text style={styles.detailText}>  <b>ประเภท :</b> {type}  </Text>
                <View><Text>{" "}</Text></View>
                <Text style={styles.detailText}>  <b>พืช :</b> {name}  </Text>
                <View><Text>{" "}</Text></View>
                <Text style={styles.detailText}>  <b>สาเหตุ :</b> {cause}  </Text>
                <View><Text>{" "}</Text></View>
                <Text style={styles.detailText}>  <b>ลักษณะอาการ :</b> {symptom}  </Text>
                <View><Text>{" "}</Text></View>
                <Text style={styles.detailText}>  <b>การป้องกันกำจัด :</b>  {prevention}  </Text>
            <View><Text>{" "}</Text></View>
            <View><Text>{" "}</Text></View>
            </View>
        </ScrollView>

    
    );
    
}

const styles = StyleSheet.create({
    gridItem: {
        margin: 20,
        height: 'auto',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        backgroundColor: 'white',
        borderRadius: 10,
      },
      pic: {
        width: '80%',
        height: 300,
        border: 2,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
      },
      gridItem1:{
        margin: 20,
        height: 'auto',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        backgroundColor: 'white',
        alignItems:'center',
        borderRadius: 10,
      },
      detailText:{
        fontSize: 18,
        flexWrap: 'wrap',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
      }
});

export default Showinfo;
