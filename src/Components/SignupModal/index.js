
import { Checkbox } from '@material-ui/core';
import React, {useState} from 'react'
import validate from "../validationSignUp"
import {useSelector} from "react-redux"
import useForm from "../useFormSignUp"
import { Content, SignInLabel, SignInLink, ButtonContainer, ButtonSubmit, SpanError, SignInContainer, Privacy, Details, Label, ShowPasswordContainer, SpanErrorMessage, Form, Title, FormContainer, CloseButton, Input,  Logo, InputField } from "./SignupElement"
const SignUp = (props) => {
    const {handleChange, values, handleSubmit, errors} = useForm(validate, props)
    const ModalToggler = () => {
        props.SignInModalCaller(true);
        props.SignUpCaller(false);
    }
    
    const [visible, setVisible] = useState("password")
    const handleVisibility = () => {
        if (visible === "password") {
            setVisible("Text");
        } else {
          setVisible("password")
      }
    }
    const signUp = useSelector((state) => state.SignUp)
    const { loading, error } = signUp;

    return (
        <Content>
            <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <ButtonContainer>
                        <CloseButton onClick = {() => props.IsOpen(false)}></CloseButton>
                    </ButtonContainer>
                    <Logo></Logo>
                    {loading && <div>LOADING</div>}
                    {error && <div>{ error}</div>}
                    <Title>Create Account</Title>
                    <InputField>
                        <Input id = 'firstname' name = 'firstname' value = {values.firstname} placeholder="First Name" type="Text" onChange={handleChange}/>
                    </InputField>
                    {errors.firstname && <SpanError><SpanErrorMessage>{ errors.firstname}</SpanErrorMessage></SpanError>}
                    <InputField>
                        <Input placeholder="Last Name" id = 'lastname' value = {values.lastname} name = 'lastname'type="Text" onChange={handleChange} />
                    </InputField>
                    {errors.lastname && <SpanError><SpanErrorMessage>{ errors.lastname}</SpanErrorMessage></SpanError>}
                    <InputField>
                        <Input placeholder="Email Address" id = 'email' value = {values.email} name = 'email' type="Text" onChange = {handleChange} />
                    </InputField>
                    {errors.email && <SpanError><SpanErrorMessage>{ errors.email}</SpanErrorMessage></SpanError>}
                    <InputField>
                        <Input placeholder="Password" id='password' value={values.password} name = 'password' type={visible} onChange = {handleChange} />
                    </InputField>
                    {errors.password && <SpanError><SpanErrorMessage>{ errors.password}</SpanErrorMessage></SpanError>}
                    <ShowPasswordContainer>
                        <Checkbox onClick={handleVisibility }/>
                        <Label>Show Password</Label>
                    </ShowPasswordContainer>
                    <Details>
                        <Privacy>By creating an account, I agree to the Disney
                            <b> Term of Use </b>
                            and acknowledge that I have read the Disney
                            <b> Privacy Policy </b> and California Privacy Notice
                        </Privacy>
                    </Details>
                    <ButtonSubmit type="submit">Sign Up</ButtonSubmit>
                    <SignInContainer>
                        <SignInLabel onClick={ModalToggler}>Already have an Account? <SignInLink href = "#">Sign In</SignInLink></SignInLabel>
                    </SignInContainer>
                </Form>
                
            </FormContainer>
        </Content>
    )
}

export default SignUp
