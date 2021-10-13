import * as actions from "../Constants/Prof"

function professors(state = { profs: []}, action) {
    switch (action.type) {
        case actions.PROFESSOR_LIST_REQUESTED:
            return { loading: true}
        case actions.PROFESSOR_LIST_SUCCEEDED:
            return { loading: false, profs: action.payload}
        case actions.PROFESSOR_LIST_FAILED:
            return { loading: false, error: action.payload}
        default:
            return state;
    }
}

export { professors };