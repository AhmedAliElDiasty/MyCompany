import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
 
export default class ModalTester extends Component {
    constructor(props) {
        super(props);
        // this.isSideDrawerVisible = false; 
        Navigation.events().bindComponent(this);
        this.state = {
            isModalVisible: false
          };
      }
      
  
 
  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });
 
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this._toggleModal}>
          <Text>Show Modal</Text>
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
            <TouchableOpacity onPress={this._toggleModal}>
              <Text>Hide me!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}