import React from 'react'
import {View  , StyleSheet , TouchableWithoutFeedback , Image} from 'react-native'
 import {Card , CardItem,Text , Thumbnail, Body,Left , H1} from 'native-base'

const listItem = (props) =>(
    <TouchableWithoutFeedback onPress = {props.onItemPressed}>
        <View  >
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source = {props.empImage} />
                    </Left>
                   
                    <Body>
                        <H1>{props.empName}</H1>
                    </Body>  
                </CardItem>
           </Card>
          
        </View>
    </TouchableWithoutFeedback>
);
const styles = StyleSheet.create({
    empItem:{
        width : '100%',
        padding : 10,
        marginBottom:5,
         backgroundColor :'#eee', 
         flexDirection : 'row',
         alignItems : 'center'
    },
    empImage: {
        marginRight : 8,
        width : 30,
        height : 30,
        

    }
});
export default listItem;