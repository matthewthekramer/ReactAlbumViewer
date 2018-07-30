import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//the main app that runs contains an albumlist and a header
const App = () =>
    (
        <View style={{ flex: 1 }}>
          <Header headerText={'Albums'} />
          <AlbumList />
        </ View>
    );


AppRegistry.registerComponent('album', () => App);
