import { ADD_ME, DELETE_ME } from "./meTypes"

export const addMe = (token) => {
    return{
        type: ADD_ME,
        payload: token,
    }
}

export const deleteME = () => {
    return{
        type: DELETE_ME,
    }
}