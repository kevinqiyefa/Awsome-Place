import * as actionType from './actionTypes';

export const addPlace = placeName => {
  return {
    type: actionType.ADD_PLACE,
    placeName
  };
};

export const deletePlace = () => {
  return {
    type: actionType.DELETE_PLACE
  };
};

export const selectPlace = key => {
  return {
    type: actionType.SELECT_PLACE,
    placeKey: key
  };
};

export const deselectPlace = () => {
  return {
    type: actionType.DESELECT_PLACE
  };
};
