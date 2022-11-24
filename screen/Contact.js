import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Linking, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box1} 
      onPress={() => {
              Linking.openURL("http://www.ppsf.doae.go.th/wordpress/?page_id=2597");
            }}>
        <View style={styles.l1}>
          <FontAwesome5
            name="seedling"
            style={styles.i1}
            
          />
        </View>
        <View style={styles.r1}>
          <Text
            style={styles.txt}
            onPress={() => {
              Linking.openURL("http://www.ppsf.doae.go.th/wordpress/?page_id=2597");
            }}
          >
            กองส่งเสริมการอารักขาพืชและจัดการดินปุ๋ย
          </Text>
          <Text
            style={styles.call}
            onPress={() => {
              Linking.openURL(`tel:02-9406190`);
            }}
          >
            &#9990; โทร : 02-9406190
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box2}
                  onPress={() => {
                    Linking.openURL("https://www.doa.go.th/plprotect/?page_id=43");
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
            สำนักวิจัยพัฒนาการอารักขาพืชกรมวิชาการเกษตร
          </Text>
          <Text
            style={styles.call}
            onPress={() => {
              Linking.openURL(`tel:02-579-8540`);
            }}
          >
            &#9990; โทร : 02-579-8540
          </Text>
        </View>

      </TouchableOpacity>
      <TouchableOpacity style={styles.box3}
      onPress={() => {
        Linking.openURL(
          "https://www.dnp.go.th/FOREMIC/WEB%20SITE2/rba_info.php"
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
            การควบคุมแมลงศัตรูพืชโดยศูนย์วิจับกีฏวิทยาป่าไม้ที่ 2
          </Text>
          <Text
            style={styles.call}
            onPress={() => {
              Linking.openURL(`tel:083-3554545`);
            }}
          >
            &#9990; โทร : 083-3554545
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
