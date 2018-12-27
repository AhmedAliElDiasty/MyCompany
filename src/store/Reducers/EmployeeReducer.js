import { ADD_EMPLOYEE , DELETE_EMPLOYEE } from "../Action/ActionType";


var initializeState = {
    empInfo:[
        {
            key:1,
            firstName:'Ahmed',
            lastName:'ali',
            salary: '4000',
            phoneNumber:'11111111',
            image:null
        }
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
        case DELETE_EMPLOYEE:
            return{
                ...state,
                info: state.empInfo.filter(emp=>{
                    return emp.key!==action.empKey
                })
            }
        default:
            return{
                ...state
            }
    }
}

export default employeeReducer;