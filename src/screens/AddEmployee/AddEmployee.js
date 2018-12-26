import React, { Component } from 'react'
import {connect} from 'react-redux'
import {StyleSheet , ScrollView } from 'react-native'
import { Card, CardItem, Body, Text , Button} from 'native-base';
import {Navigation} from 'react-native-navigation'
import DefaultInput from '../../DefaultUI/DefaultInput/DefaultInput'
import { Formik } from 'formik';
import * as Yup from 'yup';
import ImagePicker from '../../components/ImagePicker/ImagePicker';




class AddEmployee extends Component{
    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
        
      }
    static options() {
        return {
          topBar: {
            rightButtons: {
              id: 'rightButton',
              icon: require('../../assets/back.jpg')
            }
          }
        };
    }
    navigationButtonPressed({ buttonId  }) {
        if(buttonId === 'rightButton'){
            Navigation.dismissModal(this.props.componentId)
        }
    }
    state = {
        image : {
            value: null,
            valid : false
        }
    }
    onImagePickHandler = image =>{
        this.setState(prevState=>{
            return{
                ...prevState,
                image:{
                    value: image,
                    valid: true
                }   
            }
        });
    }
    _handleSubmit = () =>{
        if(this.state.image.valid!==true){
            alert('please Enter an image')
        }
        else{
            alert('Welcome')
        }
        
    }
    render(){
        const phoneRegExp = /(01)[0-9]{9}/

        return(
            <Formik
                initialValues = {{firstName:'',lastName:'',salary:'',phoneNumber:''}}
                onSubmit = {this._handleSubmit}
                validationSchema = {
                    Yup.object().shape({
                        firstName: Yup.string()
                            .required('First name is required'),
                        lastName: Yup.string()
                            .required('Last name is required'),
                        salary: Yup.number().min(1000).max(10000).integer('Enter Integer Numbers')
                            .required('Salary is required'),
                        phoneNumber:Yup.string().matches(phoneRegExp, 'Phone number is not valid')
                            .required('Phone is required'),
                        // image: Yup.object().required('Image is required')
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
                            <ScrollView>
                            <Card>
                                <CardItem>
                                    <Body>
                                    <DefaultInput 
                                            label = 'First Name'
                                            autoCapitalize = 'words'
                                            value = {values.firstName}
                                            onChange = {setFieldValue}
                                            onTouch = {setFieldTouched}
                                            name = 'firstName'
                                            error = {touched.firstName && errors.firstName}
                                        />
                                    </Body>
                                </CardItem>
                           </Card>

                           <Card>
                                <CardItem>
                                    <Body>
                                    <DefaultInput 
                                            label = 'Last Name'
                                            autoCapitalize = 'words'
                                            value = {values.lastName}
                                            onChange = {setFieldValue}
                                            onTouch = {setFieldTouched}
                                            name = 'lastName'
                                            error = {touched.lastName && errors.lastName}
                                        />
                                    </Body>
                                </CardItem>
                           </Card>

                           <Card>
                                <CardItem>
                                    <Body>
                                    <DefaultInput 
                                            label = 'Salary'
                                            value = {values.salary}
                                            onChange = {setFieldValue}
                                            onTouch = {setFieldTouched}
                                            name = 'salary'
                                            keyboardType = 'phone-pad'
                                            error = {touched.salary && errors.salary}
                                        />
                                    </Body>
                                </CardItem>
                           </Card>

                           <Card>
                                <CardItem>
                                    <Body>
                                        <ImagePicker
                                            // onImagePick = {this.onImagePickHandler}
                                         />
                                    </Body>
                                </CardItem>
                           </Card> 
                            <Card>
                                <CardItem>
                                    <Body>
                                    <DefaultInput 
                                            label = 'Phone Number'
                                            value = {values.phoneNumber}
                                            onChange = {setFieldValue}
                                            onTouch = {setFieldTouched}
                                            name = 'phoneNumber'
                                            keyboardType = 'phone-pad'
                                            error = {touched.phoneNumber && errors.phoneNumber}
                                        />
                                    </Body>
                                </CardItem>
                           </Card> 
                            <Button block 
                            onPress={handleSubmit}
                            enabled = {isValid && !isSubmitting}
                            >
                             <Text style = {styles.buttonText}>Apply</Text>
                        </Button> 
                           </ScrollView>
                            
                        </React.Fragment>
     
                    )
                }
            />
           
        );
    }
}
const styles = StyleSheet.create({
    buttonText: {
        color: 'white'
    }
})
const mapDispatchToProps = dispatch =>{

}
export default connect()(AddEmployee);