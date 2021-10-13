import * as actions from "../Constants/Course"
import axios from "axios"
const CourseList = (id) => async (dispatch) => {

    dispatch({
        type: actions.COURSE_LIST_REQUESTED
    });
    try {
        const { data } = await axios.get(`https://localhost:5001/api/Course/${id}`);
        dispatch({
            type: actions.COURSE_LIST_SUCCEEDED,
            payload : data
        })
    } catch (error) {
        dispatch({
            type: actions.COURSE_LIST_FAILED,
            error : error
        })
    }
}
export {CourseList}