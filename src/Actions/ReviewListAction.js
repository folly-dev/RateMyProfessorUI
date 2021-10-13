import * as actions from "../Constants/ReviewsList"
import axios from "axios"
const ReviewList = (id) => async (dispatch) => {
    dispatch({
        type: actions.REVIEWS_LIST_REQUESTED
    })
    try {
        const { data } = await axios.get(`https://localhost:5001/api/Professor/${id}`);
        dispatch({
            type: actions.REVIEWS_LIST_SUCCEEDED,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: actions.REVIEWS_LIST_FAILED,
            payload: error
        })
    }
}
export {ReviewList}