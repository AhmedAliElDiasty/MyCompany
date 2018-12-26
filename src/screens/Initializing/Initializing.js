import React, { Component } from 'react'
import { View , StyleSheet , Text} from 'react-native'
// import H1 from 'native-base'
import {startTabs,Login} from '../MainScreens/MainScreens'
import { Container, Header, Content, Spinner, H1 } from 'native-base';

import {connect} from 'react-redux'

  

class Initializing extends Component{
    componentDidMount(){
       
        const user = this.props.authData
        if(user){
            startTabs();
        }else{
            Login();
        }
    }

    render(){
       
      
        return(
            <View style = {styles.loading}>
                <H1>Loading</H1>
                <Spinner color='orange' />
            </View>
            

        //     <Container style = {styles.loading}>
        //     <Content >
        //       <Spinner color='orange' />
        //     </Content>
        //   </Container>
        );
    }
}
const styles = StyleSheet.create({
    loading:{
        flex:1,
        alignItems: 'center',
        justifyContent : 'center',
    }
});
const mapStateToProps = state =>{
    return{
        authData: state.authData.AuthData
    }
}
export default connect(mapStateToProps)(Initializing);