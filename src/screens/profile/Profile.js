import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Profile</Text>
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
  txt: {color: 'black', fontSize: 20, fontWeight: '500'},
});
