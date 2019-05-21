//Import stuff
import React, { Component } from 'react';
import { View, Text } from 'react-native';

//Create Component
class AlbumList extends Component{
	componentWillMount() {
		fetch('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => response.json())
			.then(response => {
				console.log(response)
			})	

	}

	render(){
		return(
			<View>
	 			<Text>Album List!!! </Text>
			</View>
		);
	}
};

export default AlbumList;