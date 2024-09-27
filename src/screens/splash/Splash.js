import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ActivityIndicator, Image, SafeAreaView, StyleSheet} from 'react-native';
import {imgAlQuran} from '../../assets';
import {COLORS} from '../../utils';

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    // ! Timer untuk pindah halaman ke Home setelah 3 detik
    const timer = setTimeout(() => {
      navigation.navigate('Bottom');
    }, 3000);

    // Bersihkan timer saat komponent unmout
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator
        size={'large'}
        color={COLORS.black}
        style={styles.activityIndicator}
      />
      <Image source={imgAlQuran} style={styles.img} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    position: 'absolute',
    top: 50,
  },
  img: {
    width: 230,
    height: 230,
    resizeMode: 'contain',
  },
});
