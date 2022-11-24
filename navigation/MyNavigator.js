import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Mainpage from "../screen/Main";
import Menu from "../screen/Menu";
import MenuProtect from "../screen/MenuProtect";
import BookMark from "../screen/BookMark";
import SettingPage from "../screen/SettingPage";
import NewsWebsite from "../screen/NewsWebsite";
import AlertPage from "../screen/Alert";
import Contact from "../screen/Contact";
import Showinfo from "../screen/ShowInfo";
import NewsPage from "../screen/News"
import PtFromP from "../screen/PtFromP";
import PtFromD2 from "../screen/PtFromD2";
import Ptflowers from "../screen/Ptflowers";
import Ptrice from "../screen/Ptrice";
import Ptplant from "../screen/Ptplant";
import Pthelp from "../screen/Pthelp";
import Ptveg from "../screen/Ptveg";
import Scan1 from "../screen/diagnose/Scan1";
import Scan2 from "../screen/diagnose/Scan2";
import Scan3 from "../screen/diagnose/Scan3";
import Scan4 from "../screen/diagnose/Scan4";
import Scan5 from "../screen/diagnose/Scan5";
import Scan6 from "../screen/diagnose/Scan6";
import Scan7 from "../screen/diagnose/Scan7";
import Scan8 from "../screen/diagnose/Scan8";
import Scan9 from "../screen/diagnose/Scan9";
import Scan10 from "../screen/diagnose/Scan10";
import Finish from "../screen/diagnose/Finish";
import Finish1 from "../screen/diagnose/Finish1";
import Finish2 from "../screen/diagnose/Finish2";
import Finish3 from "../screen/diagnose/Finish3";
import Finish4 from "../screen/diagnose/Finish4";
import Finish5 from "../screen/diagnose/Finish5";
import Weather from "../screen/Weather";
import ContactDev from "../screen/ContactDev";
import MenuDiag from "../screen/MenuDiag";
import DVeg from "../screen/DVeg";
import DRice from "../screen/DRice";
import DFlowerer from "../screen/DFlowerer";

const Tab = createBottomTabNavigator();
const MainNavigation = createNativeStackNavigator();
const MenuNavigation = createNativeStackNavigator();
const MenuPNavigation = createNativeStackNavigator();
const MenuDNavigation = createNativeStackNavigator();
const DiagnoseNavigation = createNativeStackNavigator();


function MenuNavigator() {
  return (
    <MenuNavigation.Navigator
      screenOptions={{ headerShown: false}}
      initialRouteName="Menu"
    >
      <MenuNavigation.Screen name="Menu" component={Menu}/>
      <MenuNavigation.Screen name="NewsPage" component={NewsPage}/>
      <MenuNavigation.Screen name="PtFromP" component={PtFromP}/>
      <MenuNavigation.Screen name="PtFromD2" component={PtFromD2}/>
      <MenuNavigation.Screen name="Ptflowers" component={Ptflowers}/>
      <MenuNavigation.Screen name="Ptrice" component={Ptrice}/>
      <MenuNavigation.Screen name="Ptplant" component={Ptplant}/>
      <MenuNavigation.Screen name="Pthelp" component={Pthelp}/>
      <MenuNavigation.Screen name="Ptveg" component={Ptveg}/>
      <MenuNavigation.Screen name="ShowInfo" component={Showinfo}/>
      <MenuNavigation.Screen name="MenuProtect" component={MenuProtect}/>
      <MenuNavigation.Screen name="MenuPNavigator" component={MenuPNavigator}/>
      <MenuNavigation.Screen name="DiagnoseNavigator" component={DiagnoseNavigator}/>
      <MenuNavigation.Screen name="MenuDNavigator" component={MenuDNavigator}/>
      <MenuNavigation.Screen name="AlertPage" component={AlertPage}/>
      <MenuNavigation.Screen name="Weather" component={Weather}/>
      <MenuNavigation.Screen name="ContactDev" component={ContactDev}/>
    </MenuNavigation.Navigator>
  );
}

function MenuPNavigator() {
  return (
    <MenuPNavigation.Navigator
      screenOptions={{ headerShown: false}}
      initialRouteName="MenuProtect"
    >
      <MenuPNavigation.Screen name="MenuProtect" component={MenuProtect}/>
      <MenuPNavigation.Screen name="Fruits" component={PtFromP}/>
      <MenuPNavigation.Screen name="PtFromD2" component={PtFromD2}/>
      <MenuPNavigation.Screen name="Ptflowers" component={Ptflowers}/>
      <MenuPNavigation.Screen name="Ptplant" component={Ptplant}/>
      <MenuPNavigation.Screen name="Pthelp" component={Pthelp}/>
      <MenuPNavigation.Screen name="Ptveg" component={Ptveg}/>
      <MenuPNavigation.Screen name="ShowInfo" component={Showinfo}/>
    </MenuPNavigation.Navigator>
  );
}

function MenuDNavigator() {
  return (
    <MenuDNavigation.Navigator
      screenOptions={{ headerShown: false}}
      initialRouteName="MenuDiagnostic"
    >
      <MenuDNavigation.Screen name="MenuDiag" component={MenuDiag}/>
      <MenuDNavigation.Screen name="PtFromD2" component={PtFromD2}/>
      <MenuDNavigation.Screen name="DVeg" component={DVeg}/>
      <MenuDNavigation.Screen name="DRice" component={DRice}/>
      <MenuDNavigation.Screen name="DFlowerer" component={DFlowerer}/>
      <MenuDNavigation.Screen name="ShowInfo" component={Showinfo}/>
    </MenuDNavigation.Navigator>
  );
}

function MainNavigator() {
  return (
    <MainNavigation.Navigator
      screenOptions={{ headerShown: true}}
      initialRouteName="Home"
    >
      <MainNavigation.Screen name="Home" component={Mainpage} />
      <MainNavigation.Screen name="Menu" component={MenuNavigator} />
      <MainNavigation.Screen name="News" component={NewsWebsite}/>
      <MainNavigation.Screen name="Contact" component={Contact}/>
      <MainNavigation.Screen name="ShowInfo" component={Showinfo}/>
    </MainNavigation.Navigator>
  );
}

function DiagnoseNavigator() {
  return (
    <DiagnoseNavigation.Navigator
      screenOptions={{ headerShown: false}}
      initialRouteName="Diagnose"
    >
      <DiagnoseNavigation.Screen name="Scan1" component={Scan1}/>
      <DiagnoseNavigation.Screen name="Scan2" component={Scan2}/>
      <DiagnoseNavigation.Screen name="Scan3" component={Scan3}/>
      <DiagnoseNavigation.Screen name="Scan4" component={Scan4}/>
      <DiagnoseNavigation.Screen name="Scan5" component={Scan5}/>
      <DiagnoseNavigation.Screen name="Scan6" component={Scan6}/>
      <DiagnoseNavigation.Screen name="Scan7" component={Scan7}/>
      <DiagnoseNavigation.Screen name="Scan8" component={Scan8}/>
      <DiagnoseNavigation.Screen name="Scan9" component={Scan9}/>
      <DiagnoseNavigation.Screen name="Scan10" component={Scan10}/>
      <DiagnoseNavigation.Screen name="Finish" component={Finish}/>
      <DiagnoseNavigation.Screen name="Finish1" component={Finish1}/>
      <DiagnoseNavigation.Screen name="Finish2" component={Finish2}/>
      <DiagnoseNavigation.Screen name="Finish3" component={Finish3}/>
      <DiagnoseNavigation.Screen name="Finish4" component={Finish4}/>
      <DiagnoseNavigation.Screen name="Finish5" component={Finish5}/>
    </DiagnoseNavigation.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
  },
});

export default function MyNavigator() {
  return (
    <Tab.Navigator sceneContainerStyle={{backgroundColor: 'snow'}} screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={MainNavigator}
        options={{
          tabBarIcon: () => <FontAwesome5 style={styles.icon} name="home" />,
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookMark}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 style={styles.icon} name="bookmark" />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingPage}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 style={styles.icon} name="cog" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
