import * as actions from "../Constants/QueriedReviews";
import axios from "axios";

const QueryReview = (courseId, profId) => async (dispatch) => {
    dispatch({
        type: actions.QUERY_REQUESTED
    })

    try {
        const {data} = await axios.get(`https://localhost:5001/api/Review/${courseId}/${profId}`)
        dispatch({
            type: actions.QUERY_SUCCEEDED,
            payload : data
        })
    } catch (error) {
        dispatch({
            type: actions.QUERY_FAILED,
            payload : error
        })
    }
}
export {QueryReview}