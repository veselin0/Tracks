import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';
import TrackListScreen from './TrackListScreen';

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');

  // eslint-disable-next-line no-underscore-dangle
  const track = state.find((trc) => trc._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <>
      <Text style={{ fontSize: 48 }}>{track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </>
  );
};

TrackListScreen.navigationOptions = {
  title: 'Tracks',
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default TrackDetailScreen;
