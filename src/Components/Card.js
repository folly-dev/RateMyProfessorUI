import React from 'react'
import { Container, TopSection, ReviewP, Ratings, ReviewCover, Reviewer, BottomSection, ParagraphDiv, PictureDiv, Breaker, Picture, ProfName, ProfProfession, ProfInfo} from "../Components/ReviewCard/ReviewCardElements";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Rating from "@material-ui/lab/Rating"

const Card = ({review}) => {
    return (
        <Container key = {review.id}>
            <TopSection>
                <PictureDiv>
                    <Picture src="https://i.pravatar.cc/125" alt=""></Picture>
                </PictureDiv>
                <ProfInfo>
                    <ProfName>{review.fname} {review.lname}</ProfName>
                    <ProfProfession>{review.major} student at {review.university}</ProfProfession>
                    <Ratings>
                        <Rating name="read-only" value={review.rating} readOnly />
                    </Ratings>
                </ProfInfo>
            </TopSection>
            <Breaker></Breaker>
            <BottomSection>
                <ReviewCover>
                    <ReviewP>
                        <ParagraphDiv>
                            <ImQuotesLeft style={{ paddingRight: "5px"}} />
                            <div style={{ lineHeight: "1.1" }}>
                                <div style={{ paddingLeft: "15px" }}>
                                    <i>{review.review}</i>
                                </div>
                            </div>
                            <ImQuotesRight style={{ paddingLeft: "5px" }} />
                        </ParagraphDiv>
                        <Reviewer>
                            <h3>"{review.fname}"</h3>
                        </Reviewer>
                    </ReviewP>
                </ReviewCover>
            </BottomSection>
        </Container>
        
    )
}

export default Card
