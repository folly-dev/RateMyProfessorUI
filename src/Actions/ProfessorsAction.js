import axios from "axios"
import * as actions from "../Constants/Prof"

const ProfAction = () => async (dispatch) => {
    
    dispatch({ type: actions.PROFESSOR_LIST_REQUESTED })
    try {
        const { data } = await axios.get("https://localhost:44330/api/professors")
        dispatch({type: actions.PROFESSOR_LIST_SUCCEEDED, payload: data})
    } catch (error) {
        dispatch({type: actions.PROFESSOR_LIST_FAILED, payload: error})
    } 
}

export {ProfAction}