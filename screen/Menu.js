import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

const Menu = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.group1}>
        <TouchableOpacity style={styles.box1}
       onPress={() => {navigation.navigate('NewsPage')}}>
          
          <View style={styles.img1}>
            <FontAwesome5 name="calendar" style={styles.img2}/>
          </View>
          <Text>ข่าวสาร</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box2}
        onPress={() => {navigation.navigate('MenuDNavigator')}}>
          <View style={styles.img1}>
            <FontAwesome5 name="list" style={styles.img2}/>
          </View>
          <Text>วินิจฉัย</Text>
          <Text>ตามชนิดพืช</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box3}
         onPress={() => {
          Linking.openURL(
            "https://www.fourfarm.com/category/%E0%B9%80%E0%B8%97%E0%B8%84%E0%B8%99%E0%B8%B4%E0%B8%84%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%81%E0%B8%A9%E0%B8%95%E0%B8%A3/"
          );
        }}>
          <View style={styles.img1}>
            <FontAwesome5 name="search" style={styles.img2}/>
          </View>
          <Text>เทคนิคอื่นๆ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.group2}>
        <TouchableOpacity style={styles.box4}
        onPress={() => {navigation.navigate('MenuProtect')}}>
          <View style={styles.img1}>
            <FontAwesome5 name="seedling" style={styles.img2}/>
          </View>
          <Text>องค์ความรู้ด้าน</Text>
          <Text>การอารักขาพืช</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box5}
        onPress={() => {navigation.navigate('AlertPage')}}>
          <View style={styles.img1}>
            <FontAwesome5 name="bullhorn" style={styles.img2}/>
          </View>
          <Text style={{fontSize: 12}}>พยากรณ์</Text>
          <Text style={{fontSize: 12}}>เตือนการระบาด</Text>
          <Text style={{fontSize: 12}}>ของศัตรูพืช</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box6}
        onPress={() => {navigation.navigate('ContactDev')}}>
          <View style={styles.img1}>
            <FontAwesome5 name="envelope" style={styles.img2}/>
          </View>
          <Text>ติดต่อ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.group3}>
        <TouchableOpacity style={styles.box7}
        onPress={() => {navigation.navigate('DiagnoseNavigator')}}>
          <View style={styles.img1}>
            <FontAwesome5 name="bug" style={styles.img2}/>
          </View>
          <Text>วินิจฉัย</Text>
          <Text>ศัตรูพืชเบื้องต้น</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box8}
        onPress={() => {navigation.navigate('Weather')}}>
          <View style={styles.img1}>
            <FontAwesome5 name="cloud" style={styles.img2}/>
          </View>
          <Text>พยากรณ์อากาศ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box9}>
          <View style={styles.img1}>
            <FontAwesome5 name="info" style={styles.img2}/>
          </View>
          <Text>คำแนะนำ</Text>
          <Text>ในการใช้งานแอป</Text>
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
    width: 100,
    height: 130,
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
    width: 100,
    height: 130,
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
    width: 100,
    height: 130,
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
    width: 100,
    height: 130,
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
    width: 100,
    height: 130,
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
    width: 100,
    height: 130,
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
  box7: {
    width: 100,
    height: 130,
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
  box8: {
    width: 100,
    height: 130,
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
  box9: {
    width: 100,
    height: 130,
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
});

export default Menu;