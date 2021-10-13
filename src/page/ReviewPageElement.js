import styled from "styled-components";

export const ProfContainer = styled.div`
    max-width: 70%;
    max-height: 20%;
    padding: 100px;
    display: flex;
    flex-direction: row;

`
export const ProfInfoCard = styled.div`
    padding-left:10px ;
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 500px;

`
export const NoReviewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 70%;
    height: 350px;
    margin-top: 20px;
    margin-left: 100px;
    background: #f7f7f5;
    padding-right: 30px;
    border: 1px solid #d7e0da;
    border-radius: 5px;


`
export const NoReviewsText = styled.h1`
    font-size: xx-large;
`
export const AdditionalInfoContainer = styled.div`
    width: 600px;
    height: 600px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    
    
`
export const OverallRating = styled.div`
    margin: 5px;
    width: 200px;
    height: auto;
    display: flex;
    flex-direction: row;
    
`
export const RatingValue = styled.h1`
    font-size: 100px;
    font-weight: 900 ;
    margin: 0;
    padding-right: 5px;

`
export const OverBase = styled.h2`

`
export const ProfName = styled.h1`
    margin-top: 10px;
    font-size: 50px;
    font-weight: 800;
    margin-bottom: 0;
`
export const NumberOfRatings = styled.p`
    font-weight: 900 ;
    font-size: 15px;
    margin-top:0 ;
`
export const BoolenValue = styled.div`
    width: 300px;
    height: 100px;
    display: flex;
    flex-direction: row;
    
`
export const RetakePercentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    border-right: 1px solid black;
    text-align: center;
`
export const LevelOfDifficultyContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    text-align: center;
`
export const RetakePercent = styled.h2`
    
    margin-bottom: 0;
    font-size: 35px ;
    font-weight: 900;

`
export const RetakeLabel = styled.label`
    margin-top: 0;
    
`
export const LevelOfDifficulty = styled.h2`
    margin-bottom: 0;
    font-size: 35px ;
    font-weight: 900;
`
export const LevelOfDifficultyLabel = styled.label`
    margin-top: 0;
`


export const DepartmentDescription = styled.p`
    font-size: 15px;
    margin-top: 0;
    font-size: 15px;
`

export const ButtonWrapper = styled.div`
    margin-top: 30px;
    border-radius: 50px;
    background: lightgreen;
    white-space: nowrap;
    padding: 15px 25px;
    margin-right: 2px;
    color: #010606;
    font-size:20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    width: 250px;
`
export const AdditionInfo = styled.div`
 width: 100%;
 height: 350px;
 display: flex;
 flex-direction: column;
 background: #f7f7f5;
 border: 1px solid #d7e0da;
 border-radius: 5px;
`
export const SimilarProfessorContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    width: 100%;
    height: 200px;
    
`
export const SimilarProfessorDesc = styled.p`
    font-size: 20px;
    font-weight: 900;
    margin-top: 0;
`
export const SimilarProfessor = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100px;
    justify-content: center;
    align-items: center;
    background-color: #cce0f0;
    border: 1px solid #d7e0da;
    border-radius: 5px;
`
export const Professor = styled.div`
    display: flex;
    flex-direction: row;
    width: 150px;
    height: 50px;
    cursor: pointer;

`
export const LineBreaker = styled.div`
    width: 70% ;
    margin-left: 100px;
    margin-bottom: 10px;
    height: 1px;
    background-color: #E6E6E6;
    background-image: linear-gradient(left , white 2%, #E6E6E6 50%, white 98%);
`
export const CourseInputBox = styled.select`
    margin-left: 100px;
    max-width: 500px;
    width: 10%;
    height: 50px;
    font-weight: 700;
    font-size: 1.0rem;
    padding-left: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
`
export const ReviewCardContainer = styled.div`
    max-width: 70%;
    height: 350px;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-left: 100px;
    background: #f7f7f5;
    padding-right: 30px;
    border: 1px solid #d7e0da;
    border-radius: 5px;
`
export const ReviewTextContainer = styled.div`
    margin-left: 70px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
`
export const ReviewHeader = styled.div`
    display: flex;
    flex-direction: row;
`
export const CourseValue = styled.h2`
    margin-top: 30px;
    margin-right: 20px;

`
export const EmojiValue = styled.div`
    width: 180px;
    height: 30px;
    border: 2px solid;
    margin-top: 30px;
    justify-content: center;
    text-align: center;
    margin-right: 400px;
`
export const DateValue = styled.h4`
    right: auto;
    margin-top: 30px;
    font-size: 18px;
`
export const ReviewSubHeader = styled.div`
    display: flex;
    flex-direction: row;
`

export const ForCredit = styled.h3`
    margin-top: 0 ;
    margin-right: 20px;
    font-weight: 200;
    font-size: 20px;
`
export const DifficultyQuality = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 40px;
    width: 80px;
    height: 300px;
    justify-content: center;
    align-items: center;
`
export const LikeDislikeButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
`
export const Quality = styled.div`
    justify-content: center;
    text-align: center;
    height: 50px;
    width: 100%;
    margin-bottom: 20px;
    font-size: 35px;
    font-weight: 900;
    background: #bbff8a;
    padding-top: 10px;
`
export const Difficulty = styled.div`
    justify-content: center;
    text-align: center;
    height: 50px;
    width: 100%;
    font-size: 35px;
    font-weight: 900;
    margin-bottom: 90px;
    background: #e0e3de;
    padding-top: 10px;

`
export const Course = styled.option`
    font-weight: bold;
    font-size: 15px;
`
export const NumberOfRatingField = styled.h2`
    font-size: 25px;
    font-weight: 700;
    margin-left: 100px;

`
export const RatingBox = styled.div`
    font-size: 30px;
    font-weight: 900;
    width: 70px;
    height: 35px;
    margin-right: 0;
    text-align: center;
    justify-content: center;
    align-items: center;
    background: lightcoral;
    padding: 4px;

`
export const Name = styled.div`
    font-size: 15px;
    margin-left: 10px;
    line-height: 1;
    margin-top: 6px;
`
export const ReviewText = styled.div`
    width: 100%;
    height: 150px;
    font-size: 20px;
    line-height: 1.5;
    margin-top: 10px;
    
`
export const Review = styled.p`
    margin-top: 0;
    margin-left: 30px;
    font-size: 20px;
    line-height: 1.5;
`
export const MostHelpulRating = styled.div`
    margin-top: 30px;
    margin-left: 30px;
    background: lightcoral;
    width: 340px;
    height: 40px;
    text-align: center;
    justify-content: center;
    font-weight: bold;
`
export const labelCount = styled.label`
    padding-right: 5px;
`
export const LikeButtonContainer = styled.div`
    margin-left: 30px;
    display: flex;
    height: 20px;
    width: 400px;
    flex-direction: row;
    margin-top: 10px;
`
export const ProfReviewContainer = styled.div`
    width: 95%;
    height: 150px;

`
export const ReviewDate = styled.h4`
    margin-left: 30px;
`
export const MostHelpulRatingDesc = styled.div`
    margin: 0;
    padding-top: 4px;
`
/* export const SimilarProfessor = styled.div`
    display: flex;
    flex-direction: row;
    border: 2px solid red;
` */