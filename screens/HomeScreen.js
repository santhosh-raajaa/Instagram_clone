import React from 'react' 
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native'
import { POSTS } from '../components/data/posts'
import Header from '../components/Home/header'
import Post from '../components/Home/Post'
import Stories from '../components/Home/Stories'

const HomeScreen =() =>{
	return(
		<SafeAreaView style={styles.container}>
			<br/>
			<Header/>
			<br/>
			<Stories/>
			<br/>
			<ScrollView>
				{POSTS.map((post,index)=>(
					<Post post={post} key={index} />
				))}
				
			</ScrollView>
			
		</SafeAreaView>
		
	)	
}

const styles = StyleSheet.create({
	container:{
		backgroundColor:'black',
		flex:1,
	}
})

export default HomeScreen
