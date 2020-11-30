import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    default: 
      return state;
  }
};

const startRecording = (dispatch) => () => {};
const stopRecording = (dispatch) => () => {};
const addLocation = (dispatch) => () => {};

export { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, lcations: [], currentLocation: null }
);