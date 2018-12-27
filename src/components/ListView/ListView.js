import React from 'react';
import {StyleSheet , FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem'

const empList = props =>{

  
  return(

    <FlatList
     style = {styles.listContainer}
     data = {props.list}
     renderItem = {(info) =>(
      <ListItem
        empName = {info.item.firstName}
        empImage = {info.item.image}
        onItemPressed = {()=>{
            props.onItemSelected(info.item.key)}}/>
     )}
     /> 
  
  );
}


const styles = StyleSheet.create({
    listContainer:{
        width : '100%'
  
    }
});

  export default empList;