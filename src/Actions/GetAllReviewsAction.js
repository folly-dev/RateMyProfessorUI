import * as actions from "../Constants/AllREviews";
import axios from "axios";

const GetAllReviews = (course, id) => async (dispatch) => {
    dispatch({
        type: actions.ALL_REVIEWS_REQUESTED
    })
    try {

        if (course === 0) {
            const { data } = await axios.get(`https://localhost:5001/api/Review/${id}`);
            dispatch({
                type: actions.ALL_REVIEWS_SUCCEEDED,
                payload: data
            })
        }
        else {
            const { data } = await axios.get(`https://localhost:5001/api/Review/${course}/${id}`);
            dispatch({
                type: actions.ALL_REVIEWS_SUCCEEDED,
                payload: data
            })
        } 
       
    } catch (error) {
        dispatch({
            type: actions.ALL_REVIEWS_FAILED,
            payload : error
        })
    }
}
export {GetAllReviews}