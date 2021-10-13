import React, {useState} from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroBtnWrapper, HeroH1, HeroP, ArrowForward, ArrowRight} from "./HeroSectionElement"
import Video from "../../Videos/video.mp4"
import {Button} from "../ButtonElement"
const HeroSection = () => {
    const [ hover, setHover ] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Rate Your Professor Made Easy!</HeroH1>
                <HeroP>Sign up for an account to Rate Your Favorite Professor.</HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" primary="true" dark = "true" onMouseEnter = {onHover} onMouseLeave={onHover}>
                        Get started {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
