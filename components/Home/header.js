import React from 'react' 
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

const Header =() =>{
	return(
		<View style={styles.container}>
            <TouchableOpacity>
                <Image 
                    style={styles.logo} 
                    source={require("../../assets/header-logo.png")}
                />
                {/* <Text style={styles.testWords}>Instagram</Text> */}
            </TouchableOpacity>

            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <Image 
                        style={styles.icon} 
                        source={{uri:"https://img.icons8.com/ios/50/ffffff/plus-2-math.png"}}   
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                        style={styles.icon} 
                        source={{uri:"https://img.icons8.com/ios/50/ffffff/like--v1.png"}}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>25</Text>
                    </View>
                    <img  src="https://img.icons8.com/ios/50/ffffff/facebook-messenger--v3.png"/>
                </TouchableOpacity>
                
            </View>
		</View>
	)	
}

const styles = StyleSheet.create({

    testWords:{
        color:'white',
        fontWeight:600,
        fontSize:30,
        width:140,
        height:50,
        resizemode:'contain',
    },

    iconContainer:{
        flexDirection:'row',
    },

    icon:{
       width:30,
       height:30,
       marginLeft:10,
       resizeMode:'contain',
    },

    container:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginHorizontal:20,


    },

    logo:{
        width:140,
        height:50,
        resizemode:'contain',
        // opacity:0.5,
        borderRadius:10,

    },

    unreadBadge:{
        backgroundColor:'#FF3250',
        position:"absolute",
        left:20,
        bottom:18,
        width:25,
        height:18,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        zIndex:100,

    },
    unreadBadgeText:{
        position:'relative',
        color:'white',
        fontWeight:600,
    },

})

export default Header

