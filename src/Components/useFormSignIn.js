import { useState } from "react";
import { useDispatch } from "react-redux";
import { Login } from "../Actions/SignIn";
const useForm = (validate, props) => {
    const [values, setValues] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({})
    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }
    const dispatch = useDispatch();
    const handleSubmit = () => {
        const error = validate(values);
        setErrors(validate(values));
        if (JSON.stringify(error) === "{}") {
            props.OpenSignInModal(false);
            dispatch(Login(values))
            window.location.reload();
        }
    }
    
    return {handleChange, handleSubmit,  values, errors}
}
export default useForm;