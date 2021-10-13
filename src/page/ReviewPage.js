import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReviewList } from '../Actions/ReviewListAction';
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Rating from "@material-ui/lab/Rating"

import { Container, TopSection, ReviewP, AddReviewButtonContainer, ReviewButton, Ratings, CardContainer, ReviewCover, Reviewer, BottomSection, ParagraphDiv, PictureDiv, Breaker, Picture, ProfName, ProfProfession, ProfInfo, ProfCourse, ProfDepartment, AddReviewButton } from "../Components/ReviewCard/ReviewCardElements";
const ReviewPage = (props) => {
    const ReviewsList = useSelector((state) => state.Reviews);
    const { loading, error, reviews } = ReviewsList;
    console.log(props);
    const Dispatch = useDispatch();
    useEffect(() => {
        Dispatch(ReviewList(props.match.params.id));
    },[])

    return (
        <>
            <AddReviewButtonContainer>
                <AddReviewButton>
                    <ReviewButton>ADD REVIEW</ReviewButton>
                </AddReviewButton>
            </AddReviewButtonContainer>
            {loading ? (<div>LOADING</div>) : error ? (<div>{error}</div>) :
                <CardContainer key = {reviews.id}>
                    {reviews.review.map((review) => {
                        return (
                            <Container key = {review.id}>
                                <TopSection>
                                    <PictureDiv>
                                        <Picture src="https://i.pravatar.cc/125" alt=""></Picture>
                                    </PictureDiv>
                                    <ProfInfo>
                                        <ProfName>{reviews.suffixValue} {reviews.firstName} { reviews.lastName}</ProfName>
                                        <ProfProfession>{reviews.profession} at { reviews.university}</ProfProfession>
                                        <ProfDepartment>{ reviews.department} Department</ProfDepartment>
                                        <ProfCourse>{ review.course}</ProfCourse>
                                        <Ratings>
                                            <Rating name="read-only" value={ review.rating} readOnly/>
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
                                                        <i>{review.reviewText}</i>
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
                    } )}
                </CardContainer>
            }
        </>
    )
}

export default ReviewPage
