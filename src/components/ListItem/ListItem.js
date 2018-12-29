import React from 'react'
import {View  , StyleSheet , TouchableWithoutFeedback , Image} from 'react-native'
 import {Card , CardItem,Text , Thumbnail, Body} from 'native-base'

const listItem = (props) =>(
    <TouchableWithoutFeedback onPress = {props.onItemPressed}>
        <View  >
            <Card>
                <CardItem>
                    <Thumbnail source = {props.empImage} 
                    />
                    <Body>
                        <Text>{props.empName}</Text>
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