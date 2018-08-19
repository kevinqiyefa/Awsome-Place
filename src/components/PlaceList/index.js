import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem';

const PlaceList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.placeList}
      renderItem={places => (
        <ListItem
          placeName={places.item.name}
          placeImg={places.item.image}
          onItemPressed={() => {
            props.onItemSelected(places.item.key);
          }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

export default PlaceList;
