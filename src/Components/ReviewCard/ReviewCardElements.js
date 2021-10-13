import styled from "styled-components";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Carousel from "react-elastic-carousel";
export const Container = styled.div`
        max-width: 400px;
        margin: 20px;
        height: 400px;
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: flex-end;
        background-color: whitesmoke;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`
export const ProgressIndicator = styled.div`
    display: flex;
    justify-content: center;
`
export const Reviewer = styled.div`
    top: 110px;
    right: 80px;
    position: absolute;
    
`
export const CourseWrapper = styled.div`
    margin-right: 2px;
    margin-bottom: 0;
    
`
export const CourseContainer = styled.div`
    display: flex;
    margin-top: 0;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    
    max-width: 150px;
    
`
export const ButtonOnCard = styled.button`

    top: 165px;
    max-width: 80px ;
    position: absolute;
    margin-left: 150px;
    border-radius: 50px;
    background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
    white-space: nowrap;
    color: ${({ dark }) => (dark ? "#010606" : "#fff")};
    font-size: "30px" ;
    outline: none;
    border: none;
    cursor: pointer;
    padding:10px;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};;
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
  margin-top: 27px;
`
export const TopSection = styled.div`
    max-width: 200;
    margin: 1px;
    height: 170px;
    display: grid;
    grid-template-columns: 32% auto;
`
export const BottomSection = styled.div`
    max-width: 200;
    margin: 1px;
    height: 230px;
    position: relative;
`
export const Picture = styled.img`
    
    margin-top: 10px;
    margin-bottom: 5px;
    margin-right: 5px;
    border-radius: 50%;
    border: 3px solid black;
    
`
export const PictureDiv = styled.div`
    height: 110px;
    width: 150px;
    margin-left: 20px;
`
export const ProfInfo = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-right: 5px;
    list-style: none;
    line-height: 1.2rem;

`
export const ProfName = styled.li`
    font-size: 1.2rem;
    margin-bottom: 3px;
    font-weight: 900;

`

export const Breaker = styled.span`
    display: block;
    border: none;
    color: white;
    height: 3px;
    margin-right: 5px;
    margin-left: 5px;
    background: whitesmoke;
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
`
export const ProfProfession = styled.li`
    font-size: 0.875rem;
    letter-spacing: 1px;
    margin-bottom: 3px;
    font-weight: 700;

`
export const ProfDepartment = styled.li`
    font-size: 0.8rem;
    letter-spacing: 1px;
    margin-bottom: 5px;
    font-weight: 600;

`
export const ProfCourse = styled.i`
    font-size: 0.75rem;
    letter-spacing: 1px;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 0;
`
export const Ratings = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-height: 100px;
`
export const Stars = styled.p`
    font-size: 0.9rem;
    margin-right: 10px;
    
`
export const ParagraphDiv = styled.div`
   
`

export const ReviewsCount = styled.h3`
    font-size: 1rem;
    margin-top: 3px;
    padding-left: 8px;
`
export const ReviewCover = styled.div`
    margin: 10px;
    line-height: 1.1;
    display: block;
`

export const ReviewP = styled.p`
    display: inline-block;
    margin: 10px;
`

export const quotationLeft = styled(ImQuotesLeft)`
    padding-left: 2px;
`

export const quotationRight = styled(ImQuotesRight)`
    padding-right: 2px;
`
export const Card = styled(Carousel)`
  max-width: 1400px;
  margin-bottom: 2em;
  margin-left:9vh;
  margin-top:  9vh;
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
export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const AddReviewButtonContainer = styled.div`
`

export const AddReviewButton = styled.div`

`

export const ReviewButton = styled.button`

`