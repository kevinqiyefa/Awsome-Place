import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={stlyes.listItem}>
      <Image source={props.placeImg} style={stlyes.placeImage} />
      <Text style={stlyes.item}>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

const stlyes = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 15,
    marginBottom: 5,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center'
  },

  placeImage: {
    marginRight: 10,
    height: 50,
    width: 50
  },

  item: {
    fontSize: 17
  }
});

export default listItem;
