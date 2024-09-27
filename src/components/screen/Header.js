import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../utils';

export default function Header({
  title = 'Title',
  iconName = 'arrow-left',
  onPress,
}) {
  return (
    <View style={styles.container(StatusBar.currentHeight)}>
      <TouchableNativeFeedback useForeground onPress={onPress}>
        <Icon name={iconName} color={'black'} size={32} />
      </TouchableNativeFeedback>
      <Text style={styles.titleHeader}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleHeader: {
    fontWeight: '700',
    marginHorizontal: 20,
    color: 'black',
    fontSize: 19,
  },
  btnHeader: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: 'black',
    overflow: 'hidden',
    width: 35,
    height: 35,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: statBarHeight => ({
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    zIndex: 9,
  }),
});
