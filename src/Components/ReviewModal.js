import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, InputLabel, makeStyles, MenuItem, Radio, RadioGroup, Select, Slider, TextField, Typography } from '@material-ui/core'
import { Box } from '@material-ui/core';
import validate from './validationReview';
import { FormContainer, Form, FormHeaderContainer, ButtonContainer, AttendanceContainer, CheckBoxContainer, RatingContainer, FormController } from './ReviewModalElement'
import useReviewForm from './useFormReview';
import { useSelector } from 'react-redux';
const useStyless = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(3),
        minWidth: 180,
        marginTop: 20
    }
}));
const useStyle = makeStyles({
    field: {
        marginTop: 30,
        marginLeft: 140,
        width: 600,
        display: "block",
        lineHeight: 1.2
    },
});
const ReviewModal = (props) => {
    const classes = useStyless()
    const classe = useStyle()
    const Authenticated = useSelector((state) => state.SignIn);
    const courses = useSelector((state) => state.ListCourse);
    const { Courses } = courses;
    const user = JSON.parse(Authenticated.user);
    let userId;
    if (user) {
        userId = user.id;
    }
    const { handleChange, values, handleSubmit, handleDifficulty, handleQuality, errors } = useReviewForm(validate, props, userId);
    const NavigateAndOpenModal = () => {
        props.history.push("/");
        props.OpenSign();
    }
    const marks = [
        {
            value: 0,
            label: "Awfull"
        },
        {
            value: 1,
            label: "Very Bad"
        },
        {
            value: 2,
            label: "Bad"
        },
        {
            value: 3,
            label: "Fair"
        },
        {
            value: 4,
            label: "Good"
        },
        {
            value: 5,
            label: "Awesome"
        }
    ]
    const Difficultymarks = [
        {
            value: 0,
            label: "straightforward"
        },
        {
            value: 1,
            label: "super easy"
        },
        {
            value: 2,
            label: "easy"
        },
        {
            value: 3,
            label: "Fair"
        },
        {
            value: 4,
            label: "hard"
        },
        {
            value: 5,
            label: "very hard"
        }
    ]
    function valueText(value) {
        return value;
    }
    const ReviewList = useSelector(state => state.ProfessorReviews);
    const { reviews } = ReviewList;

    return (
            <FormContainer>
                <Form onSubmit = {handleSubmit}>
                     <FormHeaderContainer>
                        <AttendanceContainer>
                                <FormLabel component="legend">FOR CREDIT</FormLabel>
                                <RadioGroup value = {values.forCredit} aria-label="Credit" defaultValue="no" name="forCredit" row onChange = {handleChange}>
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No"/>
                                </RadioGroup>
                        </AttendanceContainer>
                        <AttendanceContainer>
                                <FormLabel component="legend">ATTENDANCE</FormLabel>
                                <RadioGroup value = {values.attendance} name = "attendance" aria-label="attendance" defaultValue="no"  row onChange = {handleChange}>
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No"/>
                                </RadioGroup>
                        </AttendanceContainer>
                        <AttendanceContainer>
                                    <FormLabel component="legend">WOULD RETAKE</FormLabel>
                                    <RadioGroup value = {values.retake} name = "retake" aria-label="wouldRedate" defaultValue="no" row  onChange= {handleChange}>
                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="no" control={<Radio />} label="No"/>
                                    </RadioGroup>
                        </AttendanceContainer>
                        
                        <AttendanceContainer>
                                    <FormLabel component="legend">TEXTBOOK</FormLabel>
                                    <RadioGroup value = {values.textbook} name = "textbook"aria-label="textbook" defaultValue="no" row onChange = {handleChange}>
                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="no" control={<Radio />} label="No"/>
                                    </RadioGroup>
                            
                        </AttendanceContainer>
                        </FormHeaderContainer>
                    <CheckBoxContainer>
                        <FormController >
                            <FormControl variant = "outlined" className={classes.formControl} error = {errors.course}>
                                <InputLabel id="Courses">Courses</InputLabel>
                                    <Select    labelId = "Course" id = "course" name = "courseId" value = {values.courseId} label = "Courses" onChange = {handleChange}>
                                        <MenuItem disabled value={0} ><em>Courses</em></MenuItem>
                                        {Courses.map((c) => {
                                        return (<MenuItem value={c.courseId}>{c.courseName}</MenuItem>)
                                    })}
                                    </Select>
                                    {errors.course ? <FormHelperText error = {errors.course}>{errors.course}</FormHelperText> : <FormHelperText >Select a course</FormHelperText>}
                            </FormControl>
                            <FormControl  variant = "outlined" className={classes.formControl} error = {errors.grade}>
                                <InputLabel  id="Grade">Grades</InputLabel>
                            <Select labelId="Grading" id="simple grade" name="gradeId" value={values.gradeId} label="Grades" onChange={handleChange}>
                                
                                <MenuItem disabled value = {0}><em>Grades</em></MenuItem>
                                {reviews[0].grade.map((g) => {
                                    return (<MenuItem value={g.id}>{g.letterGrade}</MenuItem>)
                                        })}
                                    </Select>
                                    {errors.grade ? <FormHelperText error = {errors.grade}>{errors.grade}</FormHelperText> : <FormHelperText>Select your grade</FormHelperText>}
                            </FormControl>
    
                            </FormController>
                    </CheckBoxContainer>
                    <RatingContainer>
                        <Box sx={{ width: 500, height: 20 }}>
                            <Typography gutterBottom>How good was the content?</Typography>
                            <Slider
                                aria-label="Always visible"
                                getAriaValueText={valueText}
                                step={1}
                                marks={marks}
                                valueLabelDisplay="auto"
                                min={0}
                                max={5}
                                value = {values.quality}
                                onChange = {handleQuality}
                            />
                        </Box>
                    </RatingContainer>
                    <RatingContainer style = {{marginTop: "70px"}}>
                        
                        <Box sx={{ width: 500 }}>
                            <Typography gutterBottom>How difficult was the course?</Typography>
                            <Slider
                                aria-label="Always visible"
                                getAriaValueText={valueText}
                                step={1}
                                marks={Difficultymarks}
                                valueLabelDisplay="auto"
                                value = {values.difficulty}
                                min={0}
                                max={5}
                                onChange = {handleDifficulty}
                            />
                        </Box>
                    </RatingContainer>
                    <TextField error = {errors.review} color={ errors.review ? "secondary" : "primary"}InputProps={{ inputProps: { min: 50, max: 150 } }} name="review" value = {values.review} onChange={handleChange} className={classe.field} fullWidth  variant="outlined" id="outlined-multiline-static" label="Review" multiline rows={3} placeholder="Please write your review here" />
                    <ButtonContainer>
                        {!user ? <Button onClick = {NavigateAndOpenModal}>Submit</Button> : <Button type = "submit">Submit</Button> }
                        <Button onClick = {() => props.Cancel(false)}>Cancel</Button>
                    </ButtonContainer>
                </Form>
            </FormContainer>
    )
}
export default ReviewModal;
