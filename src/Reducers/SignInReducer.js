import * as actions from "../Constants/SignIn";

function SignInReducer(state = {}, action) {
    switch (action.type) {
        case actions.SIGNIN_REQUESTED:
            return { loading: true}
        case actions.SIGNIN_SUCCEEDED:
            return {loading : false, user : action.payload}
        case actions.SIGNIN_FAILED:
            return { loading: false, error: action.payload }
        case actions.LOGOUT:
            return {}
        default:
            return state;
    }
}
export { SignInReducer };