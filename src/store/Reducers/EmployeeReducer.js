import { ADD_EMPLOYEE , DELETE_EMPLOYEE } from "../Action/ActionType";


var initializeState = {
    empInfo:[
        
    ],
    
}

const employeeReducer = (state = initializeState,action)=>{
    switch (action.type){
        case ADD_EMPLOYEE:
            return{
                ...state,
                empInfo: state.empInfo.concat({
                    key: Math.random(),
                    firstName: action.firstName,
                    lastName: action.lastName,
                    salary: action.salary,
                    phoneNumber:action.phoneNumber,
                    image: {
                        uri:action.image.uri
                    },
                })
            }
       
        default:
            return{
                ...state
            }
    }
}

export default employeeReducer;