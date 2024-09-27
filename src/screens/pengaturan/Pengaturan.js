import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Pengaturan() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}>
        Pengaturan
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
