import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

const Scan7 = ({navigation}) => {
    return (
        <View>
            <Text style={styles.question}>เกิดอาการใบเหลืองทั้งใบที่ส่วนใด?</Text>
            <TouchableOpacity style={styles.gridItem} onPress={() => {navigation.navigate("Finish1")}}>
                <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}> 7.1 เฉพาะใบล่าง หรือใบแก่ </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem} onPress={() => {navigation.navigate("Scan8")}}>
                <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}> 7.2 เกิดขึ้นทุกส่วนของลำต้น </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    gridItem: {
        flex: 1,
        margin: 'auto',
        height: 200,
        backgroundColor: 'orange',
        padding: 20,
        borderRadius: 40,
        borderWidth: 3,
        marginBottom: 20,
        width: 400
    },
    question: {
        fontSize: 25,
        marginTop: 100,
        textAlign: 'center',
        marginBottom: 50
    }
  });

export default Scan7;