const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function validateInfo(values) {
    let errors = {}
    if (!values.email.trim()) {
        errors.email = "Please enter your email"
    }
    else if (!regularExpression.test(values.email.trim())) {
        errors.email = "Email address is invalid"
    }

    if (!values.password.trim()) {
        errors.password = "Please enter your password"
    } else if (values.password.length < 8) {
        errors.password = "Password needs to be at least 8 characters"
    }
    return errors;
}