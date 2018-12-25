import React, { PureComponent } from 'react'
import {View , StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import LoginForm from '../../components/Form/LoginForm'

class Login extends PureComponent{
    render(){
        return(
            <View style = {styles.container}>
                <LoginForm/>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        
    }
});
const mapDispatchToProps = dispatch =>{

}
export default connect()(Login);