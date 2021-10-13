import * as actions from "../Constants/CreateReview"
import axios from "axios"

const AddReviewAction = ({courseId, gradeId, userId, profId, forCredit, attendance, retake, textbook, quality, difficulty, review }) => async (dispatch) => {
    try {
        dispatch({
            type: actions.ADD_REVIEW_REQUESTED
        });
        const { data } = await axios.post(`https://localhost:5001/api/Review/${profId}/${userId}`, {courseId, gradeId, profId, userId, forCredit, attendance, retake, textbook, quality, difficulty, review});
        dispatch({
            type: actions.ADD_REVIEW_SUCCEEDED, payload: data
        });
        
    } catch (error) {
        dispatch({
            type: actions.ADD_REVIEW_FAILED, payload: error
        });
    }
    
}
export { AddReviewAction };