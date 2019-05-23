import React, {Component} from 'react';
import { View, Text, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import axios from 'axios';

class AlbumDetail extends Component {
	render(){
		const { album } = this.props
		const  {title, artist, thumbnail_image, image, url} = album;
		const {thumbnailStyle, headerContentStyle, imageStyle, headerTextStyle,thumbnailContainerStyle} = styles;
		return (
			<Card>
				<CardSection>
					<View style={thumbnailContainerStyle}>
						<Image 
						style={thumbnailStyle}
						source={{ uri : thumbnail_image}}/>
					</View>
					<View style={headerContentStyle}>
						<Text style={headerTextStyle}>{title}</Text>
						<Text>{artist}</Text>
					</View>
				</CardSection>
				<CardSection>
						<Image 
						style={imageStyle}
						source={{ uri: image}}/>
				</CardSection>
				<CardSection>
					<Button onPress={() => axios.get('http://localhost:3000').then(console.log)}>
						Consulta
					</Button>
					<Button onPress={() => Linking.openURL(url)}>
						Ok
					</Button>
				</CardSection>
			</Card>
		)	
	}
	
};

const styles = {
	headerContentStyle:{
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize:18
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 100,
		width: null
	}
} 

export default AlbumDetail;