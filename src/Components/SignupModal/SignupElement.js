
import styled from "styled-components";
import { FaUser } from "react-icons/fa"
import {FiLock} from "react-icons/fi"
import {GrClose} from "react-icons/gr"
export const Content = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    
`
export const SigninSignup = styled.div``
export const FormContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: transparent;
    
`
export const Privacy = styled.label`
    color: #aaa;
    font-weight: 100;
    font-size: 0.8rem;
`

export const Details = styled.div`
    margin-top: 20px;
    max-width: 400px;
    width: 60%;
    margin-bottom: 15px;
`
export const SignInContainer = styled.div`
    max-width: 400px;
    width: 50%;
    margin-top: 40px;
    margin-bottom: 10px;
`
export const SignInLabel = styled.span`
    color: #aaa;
    font-size: 0.8rem;
`
export const SignInLink = styled.a`
    text-decoration: none;
    color: white;
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 60px;
    background-color: #2b2d36;
    margin-top: 100px;
    max-width: 28%;
    margin-left: 600px;
    @media screen and (min-width:1000px){
        
        margin-right: 200px;
    }
   
`
export const Select = styled.select`
    max-width: 400px;
    width: 70%;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    margin: 10px 0;
    padding: 0.6rem;
    font-weight: 100;
    font-size: 1.0rem;
    color: white;

`
export const SelectOption = styled.option`
    color: ${(props) => (props.selected ? "lightgrey" : "black")};
    font-weight: 100;
    font-size: 1.0rem;
    


`
export const SelectULabel = styled.label`
    margin-bottom: 1rem;
`
export const ButtonSubmit = styled.button`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
    color: ${({ dark }) => (dark ? "#010606" : "#fff")};
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
    outline: none;
    border: none;
    cursor: pointer;
    margin-top: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};;
    }
`
export const Title = styled.h3`
    font-size: 1.2rem;
    color: white;
    margin-bottom: 10px;
`
export const InputField = styled.div`
    max-width: 400px;
    width: 70%;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.1);
    margin: 10px 0;
    display: flex;
    flex-direction: row;
`
export const UsernameIcon = styled(FaUser)`

    line-height: 55px;
    color: #acacac;
    font-size: 1.1rem;
`
export const PasswordIcon = styled(FiLock)`
    text-align: center;
    line-height: 55px;
    color: #acacac;
    font-size: 1.1rem;
`
export const Input = styled.input`
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    width: 100%;
    padding-left: 1rem;
    font-weight: 100;
    font-size: 1.0rem;
    color: white;
    ::placeholder{
        color: #aaa;
        font-weight:500
    }

`
export const SpanErrorMessage = styled.span`
    font-size: 0.7rem;
    color: rgb(150, 0, 0);
    

`
export const SpanError = styled.div`
    width: 70%;
    max-width: 400px;
    text-align: left;
    margin-top: 0;
    justify-content: left;
`
export const CloseButton = styled(GrClose)`
    
    font-size: 25px;
    cursor: pointer;
`

export const ButtonContainer = styled.div`
    width: 90%;
    text-align: right;
    padding-top: 10px;
`
export const ShowPasswordContainer = styled.div`
    margin-top: 0;
    padding-top: 0;
    width: 75%;
`

export const Label = styled.span`
    line-height: .75rem;
    margin-top: 0;
    padding-top: 0;
    color: #aaa;
    font-size: 0.7rem;
`
export const Logo = styled.div`
    border-radius: 50%;
    min-width: 50px;
    min-height: 50px;
    border: 2px solid red;
    margin-top: 30px;
`
export const Header = styled.div`
    margin: 1px;
    border: 2px solid black;
    padding-bottom: 40px;
    position: relative;
`
export const CreateAccount = styled.div`
    margin: 1px;
    margin-left: 120px;
    
`

export const Section = styled.div`
    margin: 1px;
    border: 2px solid black;
    padding-bottom: 250px;
    display: flex;
    flex-direction: column;

`
export const Footer = styled.div`
    border-top: 0;
    padding-bottom: 1rem;
    padding-top: .8125rem;
`