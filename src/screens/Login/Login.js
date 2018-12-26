
import {connect} from 'react-redux'
import {tryAuth} from '../../store/Action/Index'
import React, { PureComponent } from 'react'
import { StyleSheet, View , Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DefaultInput from '../../DefaultUI/DefaultInput/DefaultInput'
import { RectButton } from 'react-native-gesture-handler';
import { Button , Text} from 'native-base'

import {startTabs,Signup} from '../MainScreens/MainScreens'

const api = user =>
 new Promise((resolve, reject) => {
   setTimeout(() => {
     if (user.email === 'hello@gmail.com') {
       reject({ email: 'Email already use' });
     } else {
        
       resolve();
     }
   }, 2000);
 });

class Login extends PureComponent{
    _handleSubmit = async (values, bag) => {
        try {
          await api(values);
          this.props.onLogin(values.email);
          startTabs();
        } catch (error) {
          bag.setSubmitting(false);
          bag.setErrors(error);
        }
    }
    _signup = () =>{
        Signup()
    }
    
    render(){
        return(
            <View style = {styles.container}>
            <Formik
                initialValues = {{email:'',password:''}}
                onSubmit = {this._handleSubmit}
                validationSchema = {
                    Yup.object().shape({
                        email: Yup.string()
                            .email('Not valid Email')
                            .required('Email is required'),
                        password: Yup.string()
                            .min(6)
                            .required('password is required'),
                    })
                }
                render = {
                    
                    
                    ({
                        values,
                        setFieldValue,
                        setFieldTouched,
                        touched,
                        errors,
                        isValid,
                        isSubmitting,
                        handleSubmit
     
                    })=>(
                        <React.Fragment>
                            <Image source = {require('../../assets/logo.png')} style ={styles.img}/>                       
                            <DefaultInput 
                                label = 'Email'
                                autoCapitalize = 'none'
                                value = {values.email}
                                onChange = {setFieldValue}
                                onTouch = {setFieldTouched}
                                name = 'email'
                                error = {touched.email && errors.email}
                                keyboardType = 'email-address'
                            />
                             <DefaultInput 
                                label = 'Password'
                                autoCapitalize = 'none'
                                secureTextEntry
                                value = {values.password}
                                onChange = {setFieldValue}
                                onTouch = {setFieldTouched}
                                name = 'password'
                                error = {touched.password && errors.password}
                            />
                             
                            <RectButton
                                // backgroundColor="blue"
                                style={styles.button}
                                // title="Submit"
                                onPress={handleSubmit}
                                enabled = {isValid && !isSubmitting}
                                
                                // disabled={!isValid || isSubmitting}
                                // loading={isSubmitting}
                            >
                            <Text style = {styles.buttonText}>Submit</Text>
                            </RectButton>
                            <View style = {{flexDirection:'row'}}>
                            <Text style = {{margin:10}}>Do you have an account</Text>
                            <Button transparent danger onPress = {this._signup}>
                                 <Text>Sign Up</Text>
                             </Button>
                            </View>
                          
                             
                        </React.Fragment>
     
                    )
                }
            />
            
          </View>
        )
      }
     }
     const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          },
          button: {
            marginTop: 20,
            padding:10,
            backgroundColor: '#1E90FF',
            width: '50%',
          },
          buttonText:{
              color:'white',
              textAlign:'center',
              
          },
          img:{
             width:'40%',
             height:'30%',
             alignItems:'center',
             justifyContent:'center'
         }
     });
const mapDispatchToProps = dispatch =>{
    return{
        onLogin:(authData)=>dispatch(tryAuth(authData))
    }
}
export default connect(null,mapDispatchToProps)(Login);