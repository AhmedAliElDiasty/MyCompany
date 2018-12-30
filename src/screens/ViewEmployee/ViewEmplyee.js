import React, { Component } from 'react'
import {connect} from 'react-redux'
import {View , Image , StyleSheet,findNodeHandle , TouchableOpacity ,ScrollView} from 'react-native'
import { BlurView } from 'react-native-blur';
import { ListItem , Left , Body , Text } from 'native-base'





class ViewEmployee extends Component{

    constructor(props) {
        super(props);
        this.state = { viewRef: null };
      }

    imageLoaded() {
        this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
      }
      
    render(){
        // React-native-fast-image
        return(

                <View style = {styles.container}>
                    <View>
                        <View style = {styles.subContainer}>
                            <Image
                            
                            source={this.props.selectedEmp.image}
                            style={styles.absolute}
                            ref={(img) => { this.backgroundImage = img; }}
                            onLoadEnd={this.imageLoaded.bind(this)}
                            />
                            <BlurView
                            blurType="light"
                            blurAmount={1}
                            viewRef={this.state.viewRef}
                            style={styles.absolute}
                            />
                            <View style = {styles.profileImage}>
                                <Image
                                    source = {this.props.selectedEmp.image}
                                    style = {styles.img}
                                />
                            </View>
                        </View>  
                        
                    <ListItem>
                        <Left>
                            <Text>First Name</Text>
                        </Left>
                        <Body>
                            <Text>
                                {this.props.selectedEmp.firstName}
                            </Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>Last Name</Text>
                        </Left>
                        <Body>
                            <Text>
                                {this.props.selectedEmp.lastName}
                            </Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>Salary</Text>
                        </Left>
                        <Body>
                            <Text>
                                {this.props.selectedEmp.salary}
                            </Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>Phone Number</Text>
                        </Left>
                        <Body>
                            <Text>
                                {this.props.selectedEmp.phoneNumber}
                            </Text>
                        </Body>
                    </ListItem>
                    
                    </View>
                
                </View>
                
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    absolute: {
        position: "absolute",
        top: 0, left: 0, bottom: 0, right: 0,
        width: "100%",
        height: "100%"
      },
      subContainer:{
        width:'100%',
        height:'50%'
      },
      placeDetailContainer: {
        width:'100%',
        height:'100%'
      },
      profileImage:{
        justifyContent:'center',
        alignItems: 'center',
        width:'100%',
        height:'100%',
      },
      img:{
          width:130,
          height:130,
          borderRadius:100,
          borderColor:'white',
          borderWidth:3
          
      },
      
})



export default connect()(ViewEmployee);