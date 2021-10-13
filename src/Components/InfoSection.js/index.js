import React, {useState} from 'react'
import { Button } from '../ButtonElement'
import img from "../Images/img-1.png"
import Modal from '@material-ui/core/Modal';
import SignUp from '../SignupModal'

import { Column1, Img, Imgwrap, InfoContainer, InfoRow, TextWrapper, Topline, InfoWrapper, Column2,  Heading, Subtitle, BtnWrap } from './InfoElement'
import SignIn from '../SignIn';
const InfoSection = ({ lightBg, id, imgStart, primary, dark, topline, lightText, description, headline, darkText, alt, opening } ) => {
    const [open, setOpen] = useState(opening);
    const [signInModal, setSignInModal] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    };
    const handleSignInOpen = () => {
      setSignInModal(true);
    }

    return (
        <>
            <InfoContainer lightBg = {lightBg} id = {id}>
                <InfoWrapper>
                    <InfoRow imgStart = {imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Topline>{topline}</Topline>
                                <Heading lightText={lightText}>{ headline}</Heading>
                                <Subtitle darkText={darkText}>{ description}</Subtitle>
                                <BtnWrap>
                                    <Button to="Home"  onClick={handleOpen}>Create Account</Button>
                                    <div style = {{paddingLeft : "15px"}}>
                                        <Button to="Home"
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            exact="true"
                                            offset={-80}
                                            primary={primary ? 1 : 0}
                                            dark={dark ? 1 : 0}
                                            onClick = {handleSignInOpen}
                                        >Sign In</Button>
                                    </div>
                                    <Modal open={ open}>
                                      <SignUp  IsOpen={bool => setOpen(bool)} SubmitCloseSignUp = {bool => setOpen(bool)} CloseSignModal = {(bool) => setOpen(bool)} SignInModalCaller={ (bool) => setSignInModal(bool)} SignUpCaller = {(bool) => setOpen(bool)} />
                                    </Modal>
                                    <Modal open={ signInModal}>
                                        <SignIn IsOpen = {bool => setSignInModal(bool)} SignInModalCaller={ (bool) => setSignInModal(bool)} SignUpCaller = {(bool) => setOpen(bool)} OpenSignInModal= {(bool) => setSignInModal(bool)} />
                                    </Modal>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <Imgwrap>
                                <Img src={img} alt={alt} />
                            </Imgwrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>

        </>
    )
}

export default InfoSection;
