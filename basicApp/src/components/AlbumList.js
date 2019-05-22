//Import stuff
//Class Based component have behavoirs
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail'

//Create Component
class AlbumList extends Component{
	state = {
		albums: []
	};//Initial or Empty State

	componentWillMount() {
		fetch('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => response.json())
			.then(response => {
				console.log(response)
				this.setState({ albums: response });
			})	

	}

	renderAlbums(){
		return this.state.albums.map(album =>{
			return(//Key, must be unique it doesnt rerenders it
				<AlbumDetail key={album.title} album={album}/>
			)	
		})
	}

	render(){
		console.log(this.state)

		return(
			<ScrollView>

	 			{this.renderAlbums()}
			</ScrollView>
		);
	}
};

export default AlbumList;