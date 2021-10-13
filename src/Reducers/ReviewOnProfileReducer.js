import * as actions from "../Constants/ReviewOnProfile"

function ReviewOnProfileReducer(state = { reviewsOnProfile: [] }, action) {
    switch (action.type) {
        case actions.REVIEWS_ON_PROFILE_REQUESTED:
            return {loading : true}
        case actions.REVIEWS_ON_PROFILE_SUCCEEDED:
            return { loading: false, reviewsOnProfile: action.payload }
        case actions.REVIEWS_ON_PROFILE_FAILED:
            return {loading : false, error: action.payload}
        default:
            return state;
    }
}

function DeleteReviewOnProfileReducer(state = {deletedReview: {} }, action) {
    switch (action.type) {
        case actions.REVIEW_DELETE_REQUESTED:
            return { loading: true };
        case actions.REVIEW_DELETE_SUCCEEDED:
            return {loading : false, successDelete: true,deletedReview : action.payload }
        case actions.REVIEW_DELETE_FAILED:
            return { loading: false, error: action.payload}
        default:
            return state;
    }
}
export {ReviewOnProfileReducer, DeleteReviewOnProfileReducer}