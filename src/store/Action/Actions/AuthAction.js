import {TRY_AUTH} from '../ActionType'

export const tryAuth = (AuthData)=>{
    return{
        type: TRY_AUTH,
        AuthData:AuthData
    }
}