import React , {Component} from 'react'
import {View,   StyleSheet , Dimensions , TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {connect} from 'react-redux'
import {tryAuth} from '../../store/Action/Index'
import Modal from "react-native-modal";

import {Login} from '../MainScreens/MainScreens'
import { H1 ,Text} from 'native-base';


class SideMenu extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false
          };
      }
    logout = ()=>{
        this.setState({ isModalVisible: !this.state.isModalVisible });
        Login()
    }
    _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });
    
    render(){
        
        return(
            <View style = {styles.drawer}>
                <TouchableOpacity onPress = {this._toggleModal}>
                    <View style = {styles.drawerItem}>
                        <Icon name= 'sign-out' size = {30} color="#000" ></Icon>
                        <Text style ={styles.myText}>Log out</Text>

                    </View>
                </TouchableOpacity>
               <View style = {styles.ModalContainer}>
                <Modal isVisible={this.state.isModalVisible} style = {styles.modalContent}>
                        <H1 style = {{color:'red'}}>Alert</H1>
                        <Text >Are You Sure to quit?</Text>
                        <View style = {{flexDirection:'row'}}>
                            <View style={styles.button}>
                                <TouchableOpacity onPress={this.logout}>
                                    <Text style = {styles.bottomModal}>Yes</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.button}>
                                <TouchableOpacity onPress={this._toggleModal}>
                                    <Text style = {styles.bottomModal}>No</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
               </View>
                

            </View>
        );
    }
}
styles = StyleSheet.create({
    drawer:{
        backgroundColor: 'white',
        paddingTop: 20,
        flex : 1,
        width: Dimensions.get("window").width*0.8
    
    }, 
    myText:{
        fontSize: 22
    },
    drawerItem:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor:'#eee',
        margin:5,
        padding:7
    },
    modalContent: {
        backgroundColor:'white',        
        marginVertical: 220,
        // marginHorizontal: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      bottomModal: {
        justifyContent: 'center',
        margin: 1,
      },
      button: {
        backgroundColor: '#2B8EA6',
        padding: 12,
        margin: 16,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      ModalContainer:{
          height:'40%',
          width:'70%',
          justifyContent:'center',
          alignItems:'center'
      }
})
const mapDispatchToProps = dispatch =>{
    return{
        onLogin:(authData)=>dispatch(tryAuth(authData))
    }
}

export default connect(null,mapDispatchToProps)(SideMenu);

