import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Linking, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box1} 
      onPress={() => {
              Linking.openURL("http://water.rid.go.th/flood/flood/daily.pdf");
            }}>
        <View style={styles.l1}>
          <FontAwesome5
            name="water"
            style={styles.i1}
            
          />
        </View>
        <View style={styles.r1}>
          <Text
            style={styles.txt}
            onPress={() => {
              Linking.openURL("http://water.rid.go.th/flood/flood/daily.pdf");
            }}
          >
            รายการสรุปสถานการณ์น้ำรายวัน 
          </Text>
          <Text
            style={styles.call}
          >
            จากกรมชลประทาน
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box2}
                  onPress={() => {
                    Linking.openURL("https://www.ryt9.com/tag/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%81%E0%B8%A9%E0%B8%95%E0%B8%A3");
                  }}>
        <View style={styles.l1}>
          <FontAwesome5
            name="leaf"
            style={styles.i1}
          />
        </View>
        <View style={styles.r1}>
          <Text
            style={styles.txt}
          >
            ข่าวการเกษตร ล่าสุด
          </Text>
          <Text
            style={styles.call}
          >
            จากเว็บไซต์ RYT9
          </Text>
        </View>

      </TouchableOpacity>
      <TouchableOpacity style={styles.box3}
      onPress={() => {
        Linking.openURL(
          "https://www.thairath.co.th/tags/%E0%B8%A7%E0%B8%B1%E0%B8%8A%E0%B8%9E%E0%B8%B7%E0%B8%8A"
        );
      }}>
        <View style={styles.l1}>
          <FontAwesome5
            name="bug"
            style={styles.i1}
          />
        </View>
        <View style={styles.r1}>
          <Text
            style={styles.txt}
          >
            ข่าววัชพืช
          </Text>
          <Text
            style={styles.call}
          >
            จาก ไทยรัฐ ออนไลน์
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },
  box1: {
    width: "90%",
    height: 140,
    flexDirection: "row",
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
  box2: {
    width: "90%",
    height: 140,
    marginTop: 50,
    flexDirection: "row",
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
  box3: {
    width: "90%",
    height: 140,
    marginTop: 50,
    flexDirection: "row",
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
  l1: {
    width: "40%",
    height: 130,
  },
  r1: {
    width: "60%",
    height: 100,
    marginTop: 20
  },
  i1: {
    fontSize: 80,
    margin: 22,
  },
  txt: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: -5,
  },
  txt1: {
    marginLeft: 10,
    marginTop: 10,
  },
  call: {
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: "green",
    color: "white",
    padding: 7,
    borderRadius: 5,
  },
  cir: {
    width: 30,
    height: 30,
    backgroundColor: "violet",
    flexDirection: "row",
    borderRadius: "50%",
    margin: 10,
  },
  i2: {
    fontSize: 20,
    marginLeft: 7,
    marginTop: 4,
  },
});
