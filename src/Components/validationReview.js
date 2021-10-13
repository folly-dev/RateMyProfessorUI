export default function validateReview(values) {
    let errors = {}
    if (values.course === 0) {
        errors.course = "Please enter a course"
    }
    if (values.grade === 0) {
        errors.grade = "Please enter your grade"
    }

    if (!values.review.trim()) {
        errors.review = "Please enter a review"
    } else if (values.review.length < 50 &&  values.review.length > 150 ) {
        errors.review = "your review must be between 50 and 150 characters long"
    }
    return errors;
}