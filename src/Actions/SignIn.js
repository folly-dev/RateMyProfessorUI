import * as actions from "../Constants/SignIn";
import axios from "axios";
import Cookie from "js-cookie";
const Login = ({ email, password }) => async (dispatch) => {
    dispatch({
        type: actions.SIGNIN_REQUESTED,
    });
    try {
        const { data } = await axios.post("https://localhost:5001/api/User/login", { email, password });
        Cookie.set("user", JSON.stringify(data), {expires : 0.5});
        dispatch({
            type: actions.SIGNIN_SUCCEEDED, payload: data
        });
    }
    catch (error) {
        dispatch({
            type: actions.SIGNIN_FAILED, payload: error.message
        });
    }
}

const LogoutUser = () => (dispatch) => {
    Cookie.remove("user");
    dispatch({
        type: actions.LOGOUT
    });
}
export { Login, LogoutUser };