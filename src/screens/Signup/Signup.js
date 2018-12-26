import React, { PureComponent } from 'react'
import { StyleSheet, View ,Image} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../../DefaultUI/DefaultInput/DefaultInput'
import { RectButton } from 'react-native-gesture-handler';
import {startTabs,Login} from '../MainScreens/MainScreens'
import { Button , Text} from 'native-base'
import {connect} from 'react-redux'
import {tryAuth} from '../../store/Action/Index'
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

class Signup extends PureComponent{
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
    _login = ()=>{
        Login();
    }
    render(){
        return(
            <View style = {styles.container}>
            <Formik
                initialValues = {{email:'',password:'',confirmPassword:''}}
                onSubmit = {this._handleSubmit}
                validationSchema = {
                    Yup.object().shape({
                        email: Yup.string()
                            .email('Not valid Email')
                            .required('Email is required'),
                        password: Yup.string()
                            .min(6)
                            .required('password is required'),
                        confirmPassword: Yup.string()
                            .oneOf([Yup.ref('password',null)])
                            .required('Confirm Password is required'),
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
                            <Input 
                                label = 'Email'
                                autoCapitalize = 'none'
                                value = {values.email}
                                onChange = {setFieldValue}
                                onTouch = {setFieldTouched}

                                name = 'email'
                                error = {touched.email && errors.email}
                            />
                             <Input 
                                label = 'Password'
                                autoCapitalize = 'none'
                                secureTextEntry
                                value = {values.password}
                                onChange = {setFieldValue}
                                onTouch = {setFieldTouched}
                                name = 'password'
                                error = {touched.password && errors.password}
                            />
                             <Input 
                                label = 'Confirm password'
                                autoCapitalize = 'none'
                                secureTextEntry
                                value = {values.confirmPassword}
                                onChange = {setFieldValue}
                                onTouch = {setFieldTouched}
                                name = 'confirmPassword'
                                error = {touched.confirmPassword && errors.confirmPassword}
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
                            <Text style = {{margin:10}}>Do you want to</Text>
                            <Button transparent danger onPress={this._login} >
                                 <Text>Login</Text>
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
              textAlign:'center'
          },
          img:{
             width:'40%',
             height:'30%',
              alignItems:'center',
             justifyContent:'center',
          },
          cover: {
             
             width: null,
             height: null
         }
     });
     
     const mapDispatchToProps = dispatch =>{
        return{
            onLogin:(authData)=>dispatch(tryAuth(authData))
        }
    }
    export default connect(null,mapDispatchToProps)(Signup);