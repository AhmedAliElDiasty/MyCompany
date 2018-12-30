import React, {Component} from 'react';
import {StyleSheet , FlatList , ActivityIndicator , View} from 'react-native';
import ListItem from '../ListItem/ListItem'
import { SearchBar , List } from 'react-native-elements'


class empList extends Component{
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
      searching: false
    };
  }

  componentDidMount() {
    // this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });
    setTimeout(()=>{
      fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false , refreshing: false });
      });
    },1000)
    
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderHeader = () => {
    // return(
    //   <SearchBar placeholder="Type Here..." lightTheme round onChangeText = {this.props.searchText }/>
    // )
     
    
    
  };

  renderFooter = () => {
    if(!this.state.loading) return null;
    return(
      <View
        style = {styles.footer}
      >
        <ActivityIndicator animating size = 'large'/>
      </View>
    )
  }

  handleRefresh = () =>{
    this.setState({
      page:1,
      refreshing:true,
      seed: set.state.seed + 1,
    }
      // ,()=>{
      //   this.makeRemoteRequest()
      // }
    )
  }
  hanleLoadMore = () =>{
    this.setState({
      page : this.state.page+1
    }
    // ,()=>{
    //   this.makeRemoteRequest()
    // }
    )
  }

  render(){
    return(
      <List>
        <FlatList
          style = {styles.listContainer}
          data = {this.props.list}
          renderItem = {(info) =>(
            <ListItem
              empName = {info.item.firstName}
              empImage = {info.item.image}
              onItemPressed = {()=>{
                  this.props.onItemSelected(info.item.key)}}/>
          )} 
          ItemSeparatorComponent={this.renderSeparator}
          // ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          refreshing = {this.state.refreshing}
          onRefresh = {this.handleRefresh}
          onEndReached = {this.hanleLoadMore}
          onEndReachedThreshold = {100}
        /> 
      </List>

      
    
    );
  }
  
}


const styles = StyleSheet.create({
    listContainer:{
        width : '100%'
  
    },
    footer:{
      // paddingVertical:20,
      borderTopWidth:1,
      borderColor: '#CED0CE'
    }
});

  export default empList;