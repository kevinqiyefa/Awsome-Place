import * as t from '../actions/actionTypes';
import image_gif from '../../assets/image.gif';
import uuid from 'uuid/v1';

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD_PLACE:
      return {
        ...state,
        places: [
          ...state.places,
          { key: uuid(), name: action.placeName, image: image_gif }
        ]
      };
    case t.DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(p => p.key !== state.selectedPlace.key),
        selectedPlace: null
      };

    case t.SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(p => p.key === action.placeKey)
      };

    case t.DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };
    default:
      return state;
  }
};

export default reducer;
