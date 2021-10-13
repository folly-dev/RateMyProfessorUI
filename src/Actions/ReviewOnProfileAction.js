import * as actions from "../Constants/ReviewOnProfile"
import axios from "axios";
const ReviewOnProfileAction = (id) => async (dispatch) => {
    dispatch({
        type: actions.REVIEWS_ON_PROFILE_REQUESTED
    })
    try {
        const { data } = await axios.get(`https://localhost:5001/profile/${id}`);
        dispatch({
            type: actions.REVIEWS_ON_PROFILE_SUCCEEDED,
            payload : data
        })
    } catch (error) {
        dispatch({
            type: actions.REVIEWS_ON_PROFILE_FAILED,
            payload: error
        })
    }
}
const DeleteReviewOnProfileAction = (reviewId) => async (dispatch) => {
    dispatch({
        type: actions.REVIEW_DELETE_REQUESTED
    })
    try {
        const { data } = await axios.delete(`https://localhost:5001/api/Review/${reviewId}`)
        dispatch({
            type: actions.REVIEW_DELETE_SUCCEEDED,
            payload : data
        })
    } catch (error) {
        dispatch({
            type: actions.REVIEW_DELETE_FAILED,
            payload: error
        })
    }
}
export {ReviewOnProfileAction, DeleteReviewOnProfileAction}