import React from 'react'
import { View, Text, ScrollView, Image ,StyleSheet} from 'react-native'
import {USERS} from '../../components/data/users'

const Stories = () => {
    return (
        <View style={{marginBottom:13}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {USERS.map((story,index)=>(
                    <View key={index} style={{alignItems:'center'}}>

                        <Image source={{uri:story.image}} style={styles.story} />

                        <Text style={{color:'white',alignItems:'center',marginLeft:10,}}>
                            {
                            story.user.length >9? 
                            story.user.slice(0,8)+'...'
                            : story.user
                            }
                        </Text>

                    </View>
                    
                ))}   
            </ScrollView>
            {/* <Text style={{color:'white',fontWeight:100}}>Stories</Text> */}
        </View>
    )
}

const styles=StyleSheet.create({
    story:{
        width:70,
        height:70,
        borderRadius:50,
        marginLeft:10,
        borderWidth:3,
        borderColor:'#ff8501',
        

    },
})

export default Stories
