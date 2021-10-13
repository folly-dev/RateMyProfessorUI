import * as actions from "../Constants/ReviewsList"

function Reviews(state = { reviews: [] }, action) {
    switch (action.type) {
        case actions.REVIEWS_LIST_REQUESTED:
            return {loading: true}  
        case actions.REVIEWS_LIST_SUCCEEDED:
            return {loading: false, reviews : action.payload}
        case actions.REVIEWS_LIST_FAILED:
            return {loading:false, error: action.payload}
        default:
            return state;
    }
}

export {Reviews}