import * as actions from "../Constants/SignUp";
import axios from "axios";
import Cookie from "js-cookie";
const Register = ({ firstname, lastname, email, password }) => async (dispatch) => {
    dispatch({
        type: actions.REGISTER_REQUESTED,
    });
    try {
        const { data } = await axios.post("https://localhost:5001/api/User/CreateAccount", { firstname, lastname, email, password });
        Cookie.set('user', JSON.stringify(data), {expires : 0.5});
        dispatch({
            type: actions.REGISTER_SUCCEEDED, payload: data
        })
    }
    catch (error) {
        dispatch({
            type: actions.REGISTER_FAILED, payload: error.message
        })
    }
}
export { Register };