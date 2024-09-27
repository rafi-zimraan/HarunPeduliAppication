import {useNavigation} from '@react-navigation/native';
import moment from 'moment-hijri'; // Import moment-hijri untuk format tanggal Hijri dan Masehi
import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Bglangit,
  IconAlquran,
  IconBeasiswa,
  IconBell,
  IconDoa,
  IconDzikir,
  IconHadist,
  IconMap,
  IconQurban,
  IconSedekah,
  IconZakat,
} from '../../assets'; // Import asset icon
import {Gap} from '../../components'; // Import komponen Gap untuk jarak antar elemen
import {COLORS} from '../../utils'; // Import warna dari file utilitas

export default function Home() {
  // Mendapatkan instance Navigation
  const navigation = useNavigation();

  // Mengambil waktu saat ini menggunakan moment-hijri
  const current = moment();

  // Format tanggal Masehi
  const masehiDate = current.format('DD/MMMM/YYYY'); // Contoh: 11 September 2024

  // Format tanggal Hijri
  const hijriDate = current.format('iDD/iMM/iYYYY'); // Contoh: 08/12/1445

  // Gabungkan format tanggal Masehi dan Hijri
  const formatCurrent = `${masehiDate} | ${hijriDate}`;

  return (
    <SafeAreaView style={styles.container}>
      {/* NAVBAR */}
      <View style={styles.navbar}>
        {/* Bagian untuk menampilkan peta lokasi */}
        <View style={styles.viewImg}>
          <Image source={IconMap} style={styles.imgMap} />
        </View>

        {/* Menampilkan nama kota dan tanggal */}
        <View style={styles.centerAligned}>
          <Text style={styles.txtCity}>Yogyakarta</Text>
          <Text style={styles.txtClock}>{formatCurrent}</Text>
        </View>

        {/* Icon Bell untuk notifikasi */}
        <View style={styles.viewImg}>
          <Image source={IconBell} style={styles.imgBell} />
        </View>
      </View>

      <Gap height={20} />

      {/* BACKGROUND IMAGE CLOCK */}
      <ImageBackground
        source={Bglangit}
        style={styles.contentClock}
        imageStyle={{borderRadius: 20}}>
        <Text style={styles.txtContentDay}>Magrib</Text>
        <Text style={styles.txtContentClock}>17.80</Text>
        <Text style={styles.txtContent}>3 JAM SEBELUM SHOLAT</Text>
      </ImageBackground>

      {/* JARAK ANTARA ELEMENT */}
      <Gap height={25} />

      {/* MENU LAYER 1 */}
      <View style={styles.menu}>
        {renderMenuItem(IconAlquran, 'ALquran', () =>
          navigation.navigate('AlQuran'),
        )}
        {renderMenuItem(IconDzikir, 'Dzikir')}
        {renderMenuItem(IconDoa, 'Doa')}
        {renderMenuItem(IconHadist, 'Hadist')}
      </View>

      {/* JARAK ANTARA ELEMENT */}
      <Gap height={30} />

      {/* MENU LAYER 2 */}
      <View style={styles.menu}>
        {renderMenuItem(IconBeasiswa, 'Beasiswa')}
        {renderMenuItem(IconQurban, 'Qurban')}
        {renderMenuItem(IconZakat, 'Zakat')}
        {renderMenuItem(IconSedekah, 'Sedekah')}
      </View>
    </SafeAreaView>
  );
}

// Fungsi untuk merender item menu secara dinamis
const renderMenuItem = (icon, title, onPress) => (
  <View style={styles.containerMenuItem}>
    <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
      <View style={styles.viewMenuIcon}>
        <Image source={icon} style={styles.menuIcon} />
      </View>
    </TouchableOpacity>
    <Gap height={10} />
    <Text style={styles.txt}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  txt: {
    fontSize: 15,
    fontWeight: '400',
    color: COLORS.black,
  },
  containerMenuItem: {
    alignItems: 'center',
    top: 10,
  },
  viewMenuIcon: {
    backgroundColor: COLORS.greyLight,
    padding: 10,
    borderRadius: 10,
    elevation: 10,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menuIcon: {
    width: 45,
    height: 45,
  },
  txtContentDay: {
    color: COLORS.white,
    fontSize: 27,
    fontWeight: '500',
  },
  txtContentClock: {
    color: COLORS.white,
    fontSize: 70,
    fontWeight: 'bold',
  },
  txtContent: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '400',
  },
  contentClock: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 180,
  },
  txtCity: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: '500',
  },
  txtClock: {
    fontSize: 14,
    color: COLORS.black,
  },
  viewImg: {
    backgroundColor: COLORS.greyLight,
    padding: 8,
    borderRadius: 15,
    borderColor: COLORS.black,
    elevation: 5,
  },
  centerAligned: {
    alignItems: 'center',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgBell: {
    width: 45,
    height: 45,
  },
  imgMap: {
    width: 45,
    height: 45,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 10,
    paddingTop: 33,
  },
});
