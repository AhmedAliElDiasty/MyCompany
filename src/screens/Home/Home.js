import React, { Component } from 'react'
import {connect} from 'react-redux'
import {View,Text,StyleSheet} from 'react-native'

class Home extends Component{
    constructor(props) {
        super(props);
        // this.isSideDrawerVisible = false; 
        Navigation.events().bindComponent(this);
      }
    static options(passProps) {
        return {
          topBar: {
            rightButtons: {
              id: 'rightButton',
              icon: require('../../assets/icon.png')
            }
          }
        };
    }
    navigationButtonPressed({ buttonId  }) {
        if(buttonId === 'rightButton'){
        // (!this.isSideDrawerVisible) ? this.isSideDrawerVisible = true : this.isSideDrawerVisible = false
            Navigation.mergeOptions('SideMenu.left', {
                sideMenu: {
                    right: {
                        visible: true,
                    }
                }
            });
            // alert('Hello world')
        }
    }
    render(){
        return(
            <View style = {styles.container}>
                <Text>This is the Home</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default connect()(Home);