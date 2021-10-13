import { CircularProgress } from '@material-ui/core';
import React, {useEffect} from 'react'
import { BiDislike, BiLike } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllReviews } from '../../Actions/GetAllReviewsAction';
import {  ReviewText, ReviewTextContainer,LikeDislikeButtonContainer,NoReviewsContainer, NoReviewsText, ReviewSubHeader, ReviewHeader, CourseValue, EmojiValue, DateValue, ForCredit, ReviewCardContainer, DifficultyQuality, Difficulty, Quality, ButtonWrapper, } from '../../page/ReviewPageElement';
import { ProgressIndicator } from '../ReviewCard/ReviewCardElements';

const Reviews = (props) => {
    
    const ReviewModalHandler = () => {
        props.setOpenModalForNoReview(true);
    }
    const course = props.course
    const AllReviews = useSelector((state) => state.AllReviews);
    const { loading, error, Revs } = AllReviews;
    const Dispatch = useDispatch();
    useEffect(() => {
        Dispatch(GetAllReviews(course, props.id));
    }, [course])
    let prof;
    if (props.reviews) {
        prof = `${props.reviews.suffix} ${props.reviews.firstName}`
    }
    return loading ? (<ProgressIndicator><CircularProgress value={100}/></ProgressIndicator>) : error ? (<div>{ error}</div>) : (
        <>
            {Revs.length === 0 ?
                            (<NoReviewsContainer>
                                <NoReviewsText>NO REVIEWS. Please click button below to add one</NoReviewsText>
                    <ButtonWrapper onClick={ReviewModalHandler}>Rate {prof}
                                </ButtonWrapper>
                            </NoReviewsContainer>) : (Revs.map((r) => {
                                        return (
                                            <ReviewCardContainer>
                                            <DifficultyQuality>
                                                <h4 style={{ margin: "0", fontSize: "15px" }}>QUALITY</h4>
                                                {r.quality < 4 ? <Quality style={{ background: "#fa709c" }}>{r.quality}.0</Quality> : <Quality>{r.quality}.0</Quality>}

                                                            
                                                <h4 style={{ marginTop: "0", marginBottom: "0", fontSize: "15px" }}>DIFFICULTY</h4>
                                                {r.difficulty >= 4 ? <Difficulty style={{ background: "#cc2929" }}>{r.difficulty}.0</Difficulty> : <Difficulty>{r.difficulty}.0</Difficulty>}
                                                        
                                            </DifficultyQuality>
                                            <ReviewTextContainer>
                                                <ReviewHeader>
                                                    <CourseValue>{r.course}</CourseValue>
                                                    {r.quality > 3 ? <EmojiValue style={{ background: "#bbff8a" }}>😎 AWESOME</EmojiValue> : <EmojiValue style={{ backgroundColor: "#fa709c" }}>😟 Bad</EmojiValue>}
                                                    {/* <EmojiValue>{  r.quality > 3 ? "" : ""}</EmojiValue> */}
                                                    <DateValue>September 17th, 2021</DateValue>
                                                </ReviewHeader>
                                                <ReviewSubHeader>
                                                    <ForCredit>For Credit: <b>{r.forCredit}</b></ForCredit>
                                                    <ForCredit>Attendance: <b>{r.attendance = "yes" ? "Mandatory" : "Optional"}</b></ForCredit>
                                                    <ForCredit>Would Take Again: <b>{r.retake}</b></ForCredit>
                                                    <ForCredit>Grade: <b>{r.grade}</b></ForCredit>
                                                    <ForCredit>Textbook: <b>{r.textbook}</b></ForCredit>
                                                                            
                                                </ReviewSubHeader>
                                                            
                                                <ReviewText>{r.reviewText}</ReviewText>
                                                            
                                                <LikeDislikeButtonContainer>
                                                    <BiLike style={{ fontSize: "30px", cursor: "pointer" }}></BiLike>
                                                    <labelCount style={{ fontSize: "20px" }}>0</labelCount>
                                                    <BiDislike style={{ fontSize: "30px", marginLeft: "10px", cursor: "pointer" }}></BiDislike>
                                                    <labelCount style={{ fontSize: "20px" }} >0</labelCount>
                                                </LikeDislikeButtonContainer>
                                            </ReviewTextContainer>
                                        </ReviewCardContainer>
                                    ) 
                }))}
        </>
    )
}

export default Reviews
