import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native';
import { Item , Label , Input } from 'native-base'
import {FormValidationMessage} from 'react-native-elements'

class DefaultInput extends PureComponent{
    _handleChange = value => {
        this.props.onChange(this.props.name, value);
      };
    
      _handleTouch = () => {
        this.props.onTouch(this.props.name);
      };
    
      render() {
        const { label, error, ...rest } = this.props;
        return (
          <View style={styles.root}>
            <Item floatingLabel>
                <Label>{label}</Label>
                <Input
                    onChangeText = {this._handleChange}
                    onBlur = {this._handleTouch}
                    {...rest}
                />
                {/* {error && <FormValidationMessage>{error}</FormValidationMessage>} */}
                {error && <Label style = {{color:'red',fontSize:14}}>{error}</Label>}
            </Item>
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      root: {
        width: '90%',
        alignSelf: 'center',
        margin:10
      },
    });
    
    export default DefaultInput;
