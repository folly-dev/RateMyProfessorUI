import * as actions from "../Constants/AllREviews";

function GetAll(state = { Revs: [] }, action) {
    switch (action.type) {
        case actions.ALL_REVIEWS_REQUESTED:
            return {loading : true}
            
        case actions.ALL_REVIEWS_SUCCEEDED:
            return { loading: false, Revs: action.payload }
        case actions.ALL_REVIEWS_FAILED:
            return {loading: false, error : action.payload}
    
        default:
            return state
    }
}

export {GetAll}