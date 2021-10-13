import axios from "axios"
import * as actions from "../Constants/ProfessorsList"

const ProfessorsListAction = () => async (dispatch) => {

    dispatch({
        type: actions.PROFESSORS_REQUESTED
    })
    try {
        const { data } = await axios.get("https://localhost:5001/api/Professor/GetAll");
        dispatch({
            type: actions.PROFESSORS_SUCCEEDED,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: actions.PROFESSORS_FAILED,
            payload: error
        })
    }
}
export {ProfessorsListAction}