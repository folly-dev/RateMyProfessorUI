import React, {useState} from 'react'
import validate from "../validateSignIn"
import { Checkbox } from '@material-ui/core';
import useForm from '../useFormSignIn';
import { Content, SignInLabel, SignInLink, Label, SpanError, ButtonContainer, SignInContainer, Privacy, Details,  SpanErrorMessage, Form, Title, FormContainer, CloseButton, Input, Logo, InputField, ButtonSubmit } from "../SignupModal/SignupElement";
import { Help, HelpLabel, HelpLink } from "./SignInElement"
import { useSelector } from 'react-redux';
const SignIn = (props) => {
    const {handleChange, handleSubmit, values, errors} = useForm(validate, props)
    const ModalToggler = () => {
        props.SignInModalCaller(false);
        props.SignUpCaller(true);
    }
    const [visible, setVisible] = useState("password")
    const Login = useSelector((state) => state.SignIn);
    const { loading, error} = Login;
    const handleVisibility = () => {
        if (visible === "password") {
              setVisible("Text");
        } else {
            setVisible("password")
        }
    }
    return (
        <Content>
            <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <ButtonContainer>
                        <CloseButton onClick = {() => props.IsOpen(false)}></CloseButton>
                    </ButtonContainer>
                    <Logo></Logo>
                    {loading && <div>LOADING!!!</div>}
                    {error && <div>{ error}</div>}
                    <Title>Sign In</Title>
                    <InputField>
                        <Input id = "email" placeholder="Email Address" name = "email" value = {values.email} type="Text" onChange = {handleChange}/>
                    </InputField>
                    {errors.email && <SpanError><SpanErrorMessage>{ errors.email}</SpanErrorMessage></SpanError>}
                    <InputField>
                        <Input id="password" placeholder="Password" name = "password" value = {values.password} type={visible} onChange = {handleChange} />
                    </InputField>
                    {errors.password && <SpanError><SpanErrorMessage>{errors.password}</SpanErrorMessage></SpanError>}
                    <Checkbox onClick={handleVisibility} />
                    <Label>Show Password</Label>
                    <ButtonSubmit type="submit" >Sign In</ButtonSubmit>
                    <Details>
                        <Privacy>Facebook sign in is no longer available. For help signing in, please use the link above
                        </Privacy>
                    </Details>
                    <Help>
                        <HelpLabel><HelpLink>Need help sign in?</HelpLink></HelpLabel>
                    </Help>
                    <SignInContainer>
                        <SignInLabel onClick={ModalToggler}>Don't have an account?<SignInLink href = "#"> Sign up</SignInLink></SignInLabel>
                    </SignInContainer>
                </Form>
            </FormContainer>
        </Content>
    )
}

export default SignIn
