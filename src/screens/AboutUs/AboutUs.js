import React , {Component} from 'react'
import { View , Text , StyleSheet } from 'react-native'
import {connect} from 'react-redux'

class AboutUs extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text>
                    Made By Ahmed El-Diasty
                </Text>
            </View>

        );
    };
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default connect()(AboutUs);
