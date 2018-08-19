import React from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput';
import PlaceList from './src/components/PlaceList';
import image_gif from './src/assets/image.gif';
import PlaceDetail from './src/components/PlaceDetail';
import uuid from 'uuid/v1';

export default class App extends React.Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = placeName => {
    if (placeName.trim()) {
      this.setState({
        places: [
          ...this.state.places,
          { key: uuid(), name: placeName, image: image_gif }
        ]
      });
    }
  };
  placeSelectedHandler = key => {
    this.setState({
      selectedPlace: this.state.places.find(p => p.key === key)
    });
  };

  placeDeletedHandler = () => {
    this.setState({
      places: this.state.places.filter(
        p => p.key !== this.state.selectedPlace.key
      ),
      selectedPlace: null
    });
  };

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          placeList={this.state.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 10
  }
});
