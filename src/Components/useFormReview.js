import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddReviewAction } from "../Actions/CreateReviewAction";

const useReviewForm = (validate, props, userId) => {
    const [values, setValues] = useState({
        forCredit: 'no',
        attendance: "no",
        retake: "no",
        textbook: "no",
        courseId: 0,
        gradeId: 0,
        review: "",
        userId: userId,
        profId : props.profId
    })
    const [errors, setErrors] = useState({})
    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    const [difficulty, setDifficulty] = useState(3);
    const handleDifficulty = (e, data) => {
        setDifficulty(data);
    }
    const [quality, setQuality] = useState(3);

    const handleQuality= (e, data) => {
        setQuality(data)
    }
    values.quality = quality;
    values.difficulty = difficulty;
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        const error = validate(values)
        setErrors(validate(values));
        if (JSON.stringify(error) === "{}") {
            console.log(values);
            dispatch(AddReviewAction(values));
            props.OpenReviewModal(false);
            /* console.log(values);
            console.log(errors) */
        }
    }
    
    return {handleChange, values, handleSubmit, errors, handleQuality, handleDifficulty}
}
export default useReviewForm;