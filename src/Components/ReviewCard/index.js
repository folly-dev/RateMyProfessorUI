import React from 'react'
import { Container, TopSection,Label, ButtonOnCard, Title, ProgressIndicator, ReviewP, Card, ReviewCover, Reviewer, BottomSection, ParagraphDiv, PictureDiv, Breaker, Picture, ProfName, ReviewsCount, ProfProfession, Ratings, ProfInfo, ProfCourse, ProfDepartment } from "./ReviewCardElements";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { CircularProgress } from '@material-ui/core';
import Rating from "@material-ui/lab/Rating"
import { Link } from "react-router-dom";

const ReviewCard = (props) => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 3 }
    ];
    
    return (
        <>
            <Label id = "RecentReviews">
                <Title>Recent Reviews</Title>
            </Label>
            {props.loading ? (<ProgressIndicator><CircularProgress color="success" value={100} /></ProgressIndicator>) : props.error ? (<div>{ props.error}</div>) : (
                <Card breakPoints={breakPoints}>
                    {props.professors.map((prof) => (
                        <Container key={prof.id}>
                            <TopSection>
                                <PictureDiv>
                                    <Picture src="https://i.pravatar.cc/125" alt=""></Picture>
                                </PictureDiv>
                                <ProfInfo>
                                    <ProfName>{prof.suffix} {prof.firstName} {prof.lastName}</ProfName>
                                    <ProfProfession>{prof.profession} at {prof.university}</ProfProfession>
                                    <ProfDepartment>{prof.department} Department</ProfDepartment>
                                    <Ratings>
                                        <Rating name="read-only" value={ prof.averageRating} readOnly/>
                                        <ReviewsCount>{prof.reviewsCount} Reviews</ReviewsCount>
                                    </Ratings>
                                </ProfInfo>
                            </TopSection>
                            <Breaker></Breaker>
                            <BottomSection>
                                <ReviewCover>
                                    <ReviewP>
                                        <ParagraphDiv>
                                            <ImQuotesLeft style={{ paddingRight: "5px" }} />
                                            <div style={{ lineHeight: "1.1" }}>
                                                <div style={{ paddingLeft: "15px" }}>
                                                    <i>{prof.review.reviewText}</i>
                                                </div>
                                            </div>
                                            <ImQuotesRight style={{ paddingLeft: "5px" }} />
                                        </ParagraphDiv>
                                        <Reviewer>
                                            <h3>"{prof.review.fname}"</h3>
                                        </Reviewer>
                                        <Link to={`/professor/${prof.id}`}>
                                            <ButtonOnCard>
                                                See More
                                            </ButtonOnCard>
                                        </Link>
                                    </ReviewP>
                                </ReviewCover>
                            </BottomSection>
                        </Container>
                    ) )}
                </Card>
            )}
        </>
    )
}

export default ReviewCard
