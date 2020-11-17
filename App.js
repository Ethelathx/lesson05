import React from 'react';
import {ScrollView, Text} from 'react-native';
import Movies from './Movies.js';
import Boats from './Boats.js';

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <Text>GetABoat - For Sale</Text>
      <Boats />
    </ScrollView>
  );
};

export default App;
