import * as actions from "../Constants/SignUp";

function SignUpReducer(state = {}, action) {
    switch (action.type) {
        case actions.REGISTER_REQUESTED:
            return { loading: true};
        case actions.REGISTER_SUCCEEDED:
            return { loading: false, user: action.payload }
        case actions.REGISTER_FAILED:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}
export{SignUpReducer}