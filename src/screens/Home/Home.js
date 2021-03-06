import React, { Component } from 'react'
import {connect} from 'react-redux'
import {StyleSheet, TouchableOpacity} from 'react-native'
import {Navigation} from 'react-native-navigation'
import { Icon, Fab ,View, Text} from 'native-base';
import { addEmployee } from '../MainScreens/MainScreens'
import EmpList from '../../components/ListView/ListView'


class Home extends Component{
    constructor(props) {
        super(props);
        // this.isSideDrawerVisible = false; 
        Navigation.events().bindComponent(this);
        this.state = {
            active: 'false',
          };
      }
    static options(passProps) {
        return {
          topBar: {
            rightButtons: [{
              id: 'menu',
              icon: require('../../assets/icon.png')
            },
            {id:'search',
            icon: require('../../assets/search.png')
        
        }
        ]
          }
        };
    }
    
    navigationButtonPressed({ buttonId  }) {
        if(buttonId === 'menu'){
            Navigation.mergeOptions('SideMenu.left', {
                sideMenu: {
                    right: {
                        visible: true,
                    }
                }
            })
        }
        else if(buttonId === 'search'){
            alert("It doesn't handle yet")
        }
    }
    _handleAdd = ()=>{
        addEmployee();
    }

    itemSelectedHandler = key =>{
        const selItem =  this.props.emp.find(emp=>{
            return key === emp.key;
           })
           Navigation.push(this.props.componentId, {
            component: {
              name: 'test.ViewEmployee',
              passProps: {
                selectedEmp : selItem
              },
              options: {
                topBar: {
                  title: {
                    text: selItem.firstName
                  }
                }
              }
            }
          });
      
    }
    

    
    render(){
        return(
            <View style={{ flex: 1 }}>
            
                <EmpList list = {this.props.emp}
                 onItemSelected = {this.itemSelectedHandler}
                 />
            
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

const mapStateToProps = state =>{
    return{
        emp: state.empData.empInfo
    }
}

export default connect(mapStateToProps)(Home);