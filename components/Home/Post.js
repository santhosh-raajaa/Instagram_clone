import React from 'react'
import { View, Text ,Image, StyleSheet} from 'react-native'
import { Divider } from 'react-native-elements'

const Post = ({post}) => {
    return (
        <View style={{marginBottom:30,}}>
            <Divider color='#031216' />
            <PostHeader post={post}/>
            <PostImage  post={post}/>
        </View>
    )
}

const PostHeader = ({post})=>(
    <View 
        style={{
            flexDirection:'row',
            justifyContent:'space-between',
            margin: 5,
            alignItems: 'center',
        }}
    >
        <View style={{flexDirection:'row',alignItems:'center',}} >
            <Image source={{uri:post.profile_pic}} style={styles.story} />
            <Text 
                style={{
                    color:'white', 
                    marginLeft:5,
                    fontWeight:700
                ,}}
            >{post.user}</Text>
        </View>
        
        <View style={{color:'white',fontWeight:700,}}>...</View>

    </View>
)

const PostImage=({post})=>(
    <View style={{width:'100%',height:450,}} >
        
        <Image 
        source={{uri:post.image}} 
        style={{
            width:'100%',
            height:450,
            resizeMode:'contain',
            alignItems:'center',
            borderRadius:50,
            borderWidth:8,
            borderColor:'#100316',

        }}
    />

    </View>
    

)

const styles=StyleSheet.create({
    story:{
        width:35,
        height:35,
        borderRadius:50,
        marginLeft:10,
        borderWidth:1.5,
        borderColor:'#ff8501',
        

    },
})

export default Post

