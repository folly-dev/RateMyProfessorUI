import * as actions from "../Constants/Course";

function ListCourse(state = { Courses : [] }, action) {
    switch (action.type) {
        case actions.COURSE_LIST_REQUESTED:
            return { loading: true }
        case actions.COURSE_LIST_SUCCEEDED:
            return {loading : false, Courses : action.payload }
        case actions.COURSE_LIST_FAILED:
            return {loading : false, error : action.payload}
    
        default:
            return state;
    }
}
export {ListCourse}