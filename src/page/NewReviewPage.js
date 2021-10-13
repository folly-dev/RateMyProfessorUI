import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReviewList } from '../Actions/ReviewListAction';
import { BiDislike, BiLike } from "react-icons/bi";
import { ProfContainer, LineBreaker, ProfInfoCard, NumberOfRatingField,  AdditionalInfoContainer, RatingBox, Name, SimilarProfessorContainer,Professor, SimilarProfessorDesc, SimilarProfessor, labelCount, LikeButtonContainer, ProfReviewContainer, Review, ReviewDate, MostHelpulRatingDesc, ButtonWrapper, AdditionInfo,MostHelpulRating, RetakePercentContainer, RetakeLabel, RetakePercent, LevelOfDifficulty, LevelOfDifficultyContainer, LevelOfDifficultyLabel, ProfName, BoolenValue, OverallRating, NumberOfRatings, DepartmentDescription, RatingValue, OverBase } from './ReviewPageElement';
import { CircularProgress, Modal } from '@material-ui/core';
import Reviews from "../Components/Reviews"
import ReviewModal from '../Components/ReviewModal';
import Courses from '../Components/Courses';
import { ProgressIndicator } from '../Components/ReviewCard/ReviewCardElements';

const NewReviewPage = (props) => {

    const [openModal, setOpenModal] = useState(false);
    const [course, setCourse] = useState(0);
    const ReviewModalHandler = () => {
        setOpenModal(true);
    }
    const [like, setLike] = useState(0);
    const handleLike = () => {
        const count = like + 1
        setLike(count);
    }
    const [dislike, setDislike] = useState(0);
    const handleDislike = () => {
        const count = dislike + 1;
        setDislike(count)
    } 
    const ReviewsList = useSelector((state) => state.ProfessorReviews);
    const review = useSelector((state) => state.AddReview);
    const { successSave } = review;
    const { loading, error, reviews } = ReviewsList;
    const Dispatch = useDispatch();
    const id = props.match.params.id;
    useEffect(() => {
        Dispatch(ReviewList(id));
    }, [Dispatch, id, successSave]);
    return loading ? (<ProgressIndicator><CircularProgress value = {100} /></ProgressIndicator >) : error ? (<div>{error}</div>) : (
        <>
            {reviews.map((review) => {
                return (
                    <>
                    <ProfContainer>
                    <ProfInfoCard>
                        <OverallRating>
                            <RatingValue>{review.averageRating}</RatingValue>
                            <OverBase>/5</OverBase>
                        </OverallRating>
                        <NumberOfRatings>Overall Quality Based on {review.reviewsCount} {review.reviewsCount > 1 ? "ratings" : "rating"} </NumberOfRatings>
                        <ProfName>{review.suffix} {review.firstName} {review.lastName}</ProfName>
                        <DepartmentDescription>{review.profession} <b> in {review.department} department at {review.university}</b></DepartmentDescription>
                        <BoolenValue>
                            <RetakePercentContainer>
                                <RetakePercent>{review.retakePercentage}%</RetakePercent>
                                <RetakeLabel>Would take again</RetakeLabel>
                            </RetakePercentContainer>
                            <LevelOfDifficultyContainer>
                                <LevelOfDifficulty>{review.averageDifficulty}</LevelOfDifficulty>
                                <LevelOfDifficultyLabel>Level Of Difficulty</LevelOfDifficultyLabel>
                            </LevelOfDifficultyContainer>
                        </BoolenValue>
                        <ButtonWrapper onClick={ReviewModalHandler}>
                            Rate {review.suffix} {review.firstName}
                        </ButtonWrapper>
                        <Modal open={openModal}>
                            <ReviewModal Cancel={bool => setOpenModal(bool)} OpenReviewModal = {bool => setOpenModal(bool)} {...props} OpenSign={props.SetThisState} profId = {id} />
                        </Modal>
                    </ProfInfoCard>`
                    <AdditionalInfoContainer>
                        <AdditionInfo>
                            <MostHelpulRating>
                                <MostHelpulRatingDesc key={review.id}>😎 MOST HELPFUL RATING: {review.bestReview.course }</MostHelpulRatingDesc>
                            </MostHelpulRating>
                            <ReviewDate>September 17th, 2021</ReviewDate>
                            <ProfReviewContainer>
                                <Review>{review.bestReview.review}</Review>
                            </ProfReviewContainer>
                            <LikeButtonContainer>
                                <BiLike onClick={handleLike} style={{ fontSize: "30px", cursor: "pointer" }}></BiLike>
                                <labelCount style={{ fontSize: "20px" }}>{like}</labelCount>
                                <BiDislike onClick={handleDislike} style={{ fontSize: "30px", marginLeft: "10px", cursor: "pointer" }}></BiDislike>
                                <labelCount style={{ fontSize: "20px" }} >{dislike}</labelCount>
                            </LikeButtonContainer>
                        </AdditionInfo>
                        <SimilarProfessorContainer>
                            <SimilarProfessorDesc>Check out Similar Professors in the Business Department</SimilarProfessorDesc>
                            <SimilarProfessor>
                                <Professor>
                                    <RatingBox>4.90</RatingBox>
                                    <Name>Prabesh Shrestha</Name>
                                </Professor>
                            </SimilarProfessor>
                        </SimilarProfessorContainer>
                    </AdditionalInfoContainer>
                </ProfContainer>
                <NumberOfRatingField>{review.reviewsCount} Student Reviews</NumberOfRatingField>
                </>
                )
            })}        
                <LineBreaker></LineBreaker>
                <Courses {...props} id={id} course={(course) => setCourse(course)} />
                <Reviews {...props} id={id} course={course} setOpenModalForNoReview={bool => setOpenModal(bool)} reviews={reviews[0]}/>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                 <br />
        </>
                
                
        )
    
        
}
export default NewReviewPage;
