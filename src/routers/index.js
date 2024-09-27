// Mengimpor modul dan komponen yang dibutuhkan untuk navigasi dan UI
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useFocusEffect} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AlQuran, Home, Pengaturan, Profile, Splash} from '../screens';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function Navigator() {
  // State untuk menyimpan nama route awal dan status loading
  const [initialRouteName, setInitialRouteName] = useState('SplashScreen');

  // INI UNTUK BOTTOM NAVIGATOR
  const NavBottom = () => {
    // State untuk mengatur warna background bottom tab
    const [bgBottom, setBgBottom] = useState('#000');

    // Menggunakan useFocusEffect untuk mengubah warna background saat screen fokus
    useFocusEffect(() => {
      setBgBottom('#FFF');
      return () => {
        setBgBottom('#000'); // Kembali ke background hitam saat tab tidak fokus
      };
    });

    // Mengembalikan navigator tab dengan tiga screen: Dasboard, Pengaturan, dan Profile
    return (
      <Tab.Navigator
        initialRouteName="Dasboard" // Tab pertama yang ditampilkan adalah Dasboard
        activeColor="rgb(0, 93, 255)" // Warna ikon saat tab aktif
        inactiveColor="#9E9E9E" // Warna ikon saat tab tidak aktif
        barStyle={{backgroundColor: {bgBottom}}}>
        <Tab.Screen
          name="Dasboard"
          component={Home}
          options={{
            tabBarLabel: 'Dasboard', // Label untuk tab
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={26} /> // Ikon tab dengan warna dinamis
            ),
          }}
        />
        {/* Screen kedua di tab, menampilkan halaman Pengaturan */}
        <Tab.Screen
          name="Pengaturan"
          component={Pengaturan}
          options={{
            tabBarLabel: 'Pengaturan', // Label untuk tab
            tabBarIcon: ({color}) => (
              <Icon name="cog-outline" color={color} size={26} /> // Ikon tab dengan warna dinamis
            ),
          }}
        />
        {/* Screen ketiga di tab, menampilkan halaman Profile */}
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile', // Label untuk tab
            tabBarIcon: ({color}) => (
              <Icon name="account-circle-outline" size={26} color={color} /> // Ikon tab dengan warna dinamis
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Menyembunyikan header di semua screen
        statusBarColor: 'transparent', // Status bar transparan
        statusBarTranslucent: true, // Membuat status bar tembus pandang
      }}
      initialRouteName={initialRouteName}>
      <Stack.Screen name="SplashScreen" component={Splash} />
      <Stack.Screen name="Bottom" component={NavBottom} />
      <Stack.Screen name="AlQuran" component={AlQuran} />
    </Stack.Navigator>
  );
}
