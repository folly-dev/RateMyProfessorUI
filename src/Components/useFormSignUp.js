import { useState } from "react";
import { useDispatch } from "react-redux";
import {Register} from "../Actions/SignUp"
const useForm = (validate, props) => {
    const [values, setValues] = useState({
        firstname: '',
        lastname: "",
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({})
    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }
    console.log(errors)
    console.log(values)
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        const error = validate(values)
        setErrors(validate(values));
        if (JSON.stringify(error) === "{}") {
            props.SubmitCloseSignUp(false)
            dispatch(Register(values));
            window.location.reload();
        }
    }
    
    return {handleChange, values, handleSubmit, errors}
}
export default useForm;