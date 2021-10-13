import * as actions from "../Constants/CreateReview"

function AddReviewReducer(state = { successSaveMessage: {} }, action) {
    switch (action.type) {
        case actions.ADD_REVIEW_REQUESTED:
            return {loading : true}
        case actions.ADD_REVIEW_SUCCEEDED:
            return {loading : false, successSave : true, successSaveMessage : action.payload}
        case actions.ADD_REVIEW_FAILED:
            return {loading : false, error : action.payload}
        default:
            return state;
    }
}

export { AddReviewReducer };