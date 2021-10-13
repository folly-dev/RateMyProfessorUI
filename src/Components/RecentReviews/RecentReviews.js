import styled from "styled-components";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Carousel from "react-elastic-carousel";

export const CardContainer = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  width: 70%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  background: white;
  color: black;
  text-align: center;
  padding: 2em;

  @media screen and (min-width:600px){
      display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    max-height: 400px;
    min-width: 100px;
    margin-top: 50px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;

    padding: 20px;
    width: 100%;
    background-color: whitesmoke;
    z-index: 1;
    }

`
export const RightArrow = styled(FaArrowAltCircleRight)`
    position: absolute;
  top: 1750px;
  right: 23px;
  font-size: 3rem;
  color: black;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`

export const LeftArrow = styled(FaArrowAltCircleLeft)`
position: absolute;
  top:1750px;
  left: 27px;
  font-size: 3rem;
  color: black;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`

export const ProfileImage = styled.img`
  border-radius: 50%;
  border: 5px solid black;
`
export const ProfileName = styled.h2`
font-size: 2rem;
line-height: 0.25;
letter-spacing: 1px;
  :before{
    content : "";
    display: block;
    height: 1px;
    width: 2em;
    background: white;
    margin : 0.7rem auto 0.5em;
    opacity: 0.35;
  }
  @media screen and (min-width:600px){
        margin-left: 0;
    }

`
export const ProfileProfession = styled.h3`
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 0.875rem;
  color : black;
  margin-bottom: 2em;
`

export const ProfileReview = styled.p`
  font-weight: 300rem;
  opacity: 0.8;
  margin-bottom: 0;
  :after{
    margin-bottom: 0;
  }
`
export const ProfileMain = styled.div`
  @media screen and (min-width:600px){
        text-align: left;
        margin-left: 2em;
    }
`
export const Card = styled(Carousel)`
  line-height: 1.6;
  max-width: 1400px;

  margin-bottom: 2em;
  margin-left:9vh;
  /* square buttons */
.rec.rec-arrow {
    border-radius: 0;
    background-color: black;
}
/* round buttons on hover */
.rec.rec-arrow:hover {
    border-radius: 50%;
    
}
.rec.rec-arrow:disabled {
    visibility: hidden;
}
.rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px lightgrey;
}
`
export const Label = styled.div`
  margin-left: 40px;
  margin-top: 20px;
  font-size: 20px;
  position: absolute;
  color: rgb(12, 11, 11);
`
export const Title = styled.h2`
margin-left: 60px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  white-space: normal;
  line-height: 5px;
  flex-basis: 100%;
  align-items: center;
  z-index: 1;
  margin-top: 1px;
`