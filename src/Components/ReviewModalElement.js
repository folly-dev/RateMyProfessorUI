import styled from "styled-components";
import { Slider } from '@material-ui/core'
import { FormControl } from "@material-ui/core";
export const FormContainer = styled.div`
     width: 100%;
    height: 100%;
    border: 2px solid;
`
export const Form = styled.form`
    width: 58%;
    height: 630px;
    display: flex;
    flex-direction: column;
    margin-left: 400px;
    margin-top: 60px;
    border-radius: 10px;
    background-color: lightgray;
`
export const FormHeaderContainer = styled.div`
    width: 90%;
    height: 80px;
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    margin-left: 70px;
`
export const CheckBox = styled.select`
    
    width: 100px;
    height: 50px;
    font-weight: 700;
    font-size: 1.0rem;
    padding-left: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-top: 10px;
    margin-left: 23px;
    outline: none;
`
export const CheckBoxOption = styled.option`
    font-weight: bold;
    font-size: 15px;
    line-height: 1.0;
    
`
export const AttendanceContainer = styled.div`
    width: 150px;
    height: 49px;
    display: flex;
    flex-direction: column ;
    margin-left: 30px;
`
export const Attendance = styled.h2``
export const Label = styled.label``
export const RatingContainer = styled.div`
        padding-top: 10px;
        margin-left: 180px;
`
export const CheckBoxContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
`
export const InputContainer = styled.div`

    width: 100%;
    height: 50px;
    margin-top: 40px;
    justify-content: center;
    margin-left: 100px;
`
export const Input = styled.textarea`
    width: 70%;
    height: 100px;
    outline: none;
    border-radius: 5px;
    font-size: 15px;
    padding: 15px;
    line-height: 1.2rem;
    font-family: 'Courier New', Courier, monospace;
`
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-left: 380px ;

`
export const FormController = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    
`
export const TextFieldContainer = styled.div`
    width: 70%;
    margin-top: 30px;
    margin-left: 130px;
`
