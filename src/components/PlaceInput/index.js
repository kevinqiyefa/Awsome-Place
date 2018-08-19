import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

class PlaceInput extends Component {
  state = {
    placeName: ''
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim()) {
      this.props.onPlaceAdded(this.state.placeName);
    }

    this.setState({
      placeName: ''
    });
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="An awsome place."
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
        />
        <Button
          style={styles.placeButton}
          title="Add"
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%',
    fontSize: 20
  },
  placeButton: {
    width: '30%'
  }
});

export default PlaceInput;
