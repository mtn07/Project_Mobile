import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

const MenuDiag = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.group1}>
        <TouchableOpacity style={styles.box1}
       onPress={() => {navigation.navigate('PtFromD2')}}>
          
          <View style={styles.img1}>
          <Image
          style = {{ width: 170, height: 80 , borderRadius: 15}}
          resizeMode="cover"
          source={require("../assets/4dqpjutzluwmjzzpd1447g2qyn1xpoct2itu4iztpeoq-1.png")}
        />
          </View>
          <Text style={styles.txt}>ไม้ผล-ไม้ยืนต้น</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box2}
       onPress={() => {navigation.navigate('DFlowerer')}}>
          <View style={styles.img1}>
          <Image
          style = {{ width: 170, height: 80 , borderRadius: 15}}
          resizeMode="cover"
          source={require("../assets/-1.png")}
        />
          </View>
          <Text style={styles.txt}>ไม้ดอก-ไม้ประดับ</Text>
        </TouchableOpacity>
 
      </View>
      <View style={styles.group2}>
        <TouchableOpacity style={styles.box4}
        onPress={() => {navigation.navigate('DVeg')}}>
          <View style={styles.img1}>
          <Image
          style = {{ width: 170, height: 80 , borderRadius: 15}}
          resizeMode="cover"
          source={require("../assets/pix0vcnt12595-2.png")}
        />
          </View>
          <Text style={styles.txt}>ผัก</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box5}
        onPress={() => {navigation.navigate('DRice')}}>
          <View style={styles.img1}>
          <Image
          style = {{ width: 170, height: 80 , borderRadius: 15}}
          resizeMode="cover"
          source={require("../assets/news-knowledge56-1.png")}
        />
          </View>
          <Text style={styles.txt}>ข้าว - พืชไร่</Text>
        </TouchableOpacity>
        
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'snow'
  },
  box1: {
    width: 170,
    height: 155,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: 'white',
    borderRadius: 15,
  
  },
  box2: {
    width: 170,
    height: 155,
    marginTop: 60,
    borderRadius: 15,
    alignItems: 'center',
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
  box3: {
    width: 170,
    height: 155,
    marginTop: 60,
    borderRadius: 15,
    alignItems: 'center',
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
  box4: {
    width: 170,
    height: 155,
    borderRadius: 15,
    alignItems: 'center',
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
  box5: {
    width: 170,
    height: 155,
    marginTop: 60,
    borderRadius: 15,
    alignItems: 'center',
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
  box6: {
    width: 170,
    height: 155,
    marginTop: 60,
    borderRadius: 15,
    alignItems: 'center',
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
  img1: {
    width: 80,
    height: 80,
    alignItems: 'center',
    borderColor: 'black'
  },
  img2: {
    marginTop: 20,
    fontSize: 40,
    alignItems: 'center',
  },
  txt: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    fontSize: 17,
    alignItems: 'center',
  },
});

export default MenuDiag;