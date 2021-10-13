import * as actions from "../Constants/ProfessorsList"
function Profs(state = { professors: []}, action) {
    switch (action.type) {
        case actions.PROFESSORS_REQUESTED:
           return {loading : true}
        case actions.PROFESSORS_SUCCEEDED:
            return {loading : false, professors : action.payload}
        case actions.PROFESSORS_FAILED:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}
export {Profs}