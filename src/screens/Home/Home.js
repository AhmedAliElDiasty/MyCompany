import React, { Component } from 'react'
import {connect} from 'react-redux'
import {StyleSheet} from 'react-native'
import {Navigation} from 'react-native-navigation'
import { Icon, Fab ,View} from 'native-base';
import { addEmployee } from '../MainScreens/MainScreens'

class Home extends Component{
    constructor(props) {
        super(props);
        // this.isSideDrawerVisible = false; 
        Navigation.events().bindComponent(this);
        this.state = {
            active: 'false'
          };
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
    _handleAdd = ()=>{
        addEmployee();
    }
    render(){
        return(
            <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={this._handleAdd}
            >
            <Icon name="add" />
            
          </Fab>
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