//Import a library
import React from 'react';
import {AppRegistry, Text, View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';



//Create a component
const App = () => {
	return (
		<View style={{ flex: 1}}>
			<Header headerText={'Albums!'}/>
			<AlbumList/>
		</View>
	);
};



//Render the component
AppRegistry.registerComponent('basicApp',() => App)