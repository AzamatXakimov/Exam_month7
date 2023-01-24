import { ADD_ME, CHANGE_ME, DELETE_ME } from "./meTypes"


const initialStateMe = {
    me: JSON.parse(localStorage.getItem("me")) || {},
}

export const MeReducer = (state=initialStateMe, action) => {
    switch (action.type){
        case ADD_ME: 
            return{
                ...state,
                me: action.payload
            }
        case DELETE_ME: 
            return{
                ...state,
                me: {}
            }
        default : return state
    }
}