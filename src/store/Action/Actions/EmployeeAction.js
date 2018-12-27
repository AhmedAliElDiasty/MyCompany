import { ADD_EMPLOYEE , DELETE_EMPLOYEE } from '../ActionType'

export const addEmployee = (firstName,lastName,salary,phoneNumber,image)=>{
    return{
        type: ADD_EMPLOYEE,
        firstName: firstName,
        lastName: lastName,
        salary: salary,
        phoneNumber: phoneNumber,
        image: image
    }
}

export const deleteEmployee = (key)=>{
    return{
        type: DELETE_EMPLOYEE,
        empKey : key
    }
}