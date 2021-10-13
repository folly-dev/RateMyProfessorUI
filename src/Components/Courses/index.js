import { CircularProgress, FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CourseList } from '../../Actions/CourseAction';
import { ProgressIndicator } from '../ReviewCard/ReviewCardElements';
const useStyless = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(3),
        minWidth: 180,
        marginTop: 20,
        marginLeft: 100
    }  
}))
const Courses = (props) => {
    const [course, setCourse] = useState(0);
    const courses = useSelector(state => state.ListCourse);
    const { loading, error, Courses } = courses;
    const handleChange = (e) => {
        setCourse(e.target.value);
       
    }
    props.course(course);
    const Dispatch = useDispatch();
    useEffect(() => {
        Dispatch(CourseList(props.id));
    }, [])

    const classes = useStyless();
    return loading ? (<ProgressIndicator><CircularProgress value={ 100}/> </ProgressIndicator>) : error ? (<div>{error}</div>) : (
        
            <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="Courses">Courses</InputLabel>
                    <Select labelId="Course" id="course" name="course" value={course} label="Courses" onChange={handleChange}  >
                            <MenuItem value={0} ><em>All Courses</em></MenuItem>
                    {Courses.map((c) => {
                        return (<MenuItem value={c.courseId}>{c.courseName} ({c.count})</MenuItem>)
                    })}
                    </Select>
                </FormControl>
        
    )
}

export default Courses
