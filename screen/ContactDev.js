import React, {useState} from "react";
import { View, StyleSheet, TouchableOpacity, Text, Linking } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const SettingPage = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={{margin: 10}}>
            <Text style={styles.header}>ติดต่อผู้พัฒนา</Text>
            <TouchableOpacity style={styles.gridItem} onPress={() => Linking.openURL('mailto:agronomy4u.dev@gmail.com')}>
                <Text style={styles.text1}><FontAwesome5 name="envelope" style={{fontSize:'30px'}}/ > อีเมล์ </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem} onPress={() => Linking.openURL(`tel:02-9406190`)}>
                <Text style={styles.text1}><FontAwesome5 name="phone" style={{fontSize:'30px'}}/ > โทร </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 25,
        height: 200,
        backgroundColor: 'white',
        padding: 20,
        shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 15,
  
    },
    text1: {
        fontSize: 25
    },
    gridItemS:{
        flex: 1,
        margin: 25,
        height: 200,
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 20,
        marginTop: 50,
        shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 15,
  
    },
    switch:{
        position: 'absolute',
        top: '45%',
        right: 50
    },
    header:{
        fontSize: 30,
        marginTop: 10,
        marginLeft: 20
    }
})

export default SettingPage;
