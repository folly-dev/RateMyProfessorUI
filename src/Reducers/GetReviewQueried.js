import * as actions from "../Constants/QueriedReviews";

function GetQueried(state = { QueriedRevs: [] }, action) {
    switch (action.type) {
        case actions.QUERY_REQUESTED:
            return {loading : true}
        case actions.QUERY_SUCCEEDED:
            return { loading: false, Revs: action.payload }
        case actions.QUERY_FAILED:
            return {loading: false, error : action.payload}
        default:
            return state
    }
}

export {GetQueried}