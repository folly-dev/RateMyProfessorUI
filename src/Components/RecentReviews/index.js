import React from "react"
import {CardContainer, Card, ProfileImage, LeftArrow, RightArrow, ProfileMain, ProfileName, Label, Title, ProfileProfession, ProfileReview} from "./RecentReviews"
import "./RecentReviews.css";
const RecentReviews = () => {
    /* const [current, setCurrent] = useState(0);
    const length = 9;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 2 : current + 2)
    }

    const previousSlide = () => {
        setCurrent(current === 0  ? length -1 : current - 1)
    } */
  
    
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 3 }
      ];
    return (
        <>
            <Label>
                <Title>Recent Reviews</Title>
            </Label>
            <Card breakPoints = {breakPoints}>
            {/* <LeftArrow onClick={previousSlide} />
                <RightArrow onClick={nextSlide} /> */}
                <CardContainer>
                    <div>
                        <ProfileImage src = "https://i.pravatar.cc/125" alt = ""></ProfileImage>
                    </div>
                    <ProfileMain>
                        <ProfileName>David Dawn</ProfileName>
                        <ProfileProfession>Computer Science student at SCSU</ProfileProfession>
                        <ProfileReview>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</ProfileReview>
                    </ProfileMain>
                    </CardContainer>
                <CardContainer>
                <div>
                    <ProfileImage src = "https://i.pravatar.cc/125" alt = ""></ProfileImage>
                </div>
                <ProfileMain>
                    <ProfileName>David Dawn</ProfileName>
                    <ProfileProfession>Computer Science student at SCSU</ProfileProfession>
                    <ProfileReview>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</ProfileReview>
                </ProfileMain>
                </CardContainer>
                <CardContainer>
                <div>
                    <ProfileImage src = "https://i.pravatar.cc/125" alt = ""></ProfileImage>
                </div>
                <ProfileMain>
                    <ProfileName>David Dawn</ProfileName>
                    <ProfileProfession>Computer Science student at SCSU</ProfileProfession>
                    <ProfileReview>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</ProfileReview>
                </ProfileMain>
                </CardContainer>
                <CardContainer>
                <div>
                    <ProfileImage src = "https://i.pravatar.cc/125" alt = ""></ProfileImage>
                </div>
                <ProfileMain>
                    <ProfileName>David Dawn</ProfileName>
                    <ProfileProfession>Computer Science student at SCSU</ProfileProfession>
                    <ProfileReview>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</ProfileReview>
                </ProfileMain>
                </CardContainer>
                <CardContainer>
                <div>
                    <ProfileImage src = "https://i.pravatar.cc/125" alt = ""></ProfileImage>
                </div>
                <ProfileMain>
                    <ProfileName>David Dawn</ProfileName>
                    <ProfileProfession>Computer Science student at SCSU</ProfileProfession>
                    <ProfileReview>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</ProfileReview>
                </ProfileMain>
                </CardContainer>
                <CardContainer>
                <div>
                    <ProfileImage src = "https://i.pravatar.cc/125" alt = ""></ProfileImage>
                </div>
                <ProfileMain>
                    <ProfileName>David Dawn</ProfileName>
                    <ProfileProfession>Computer Science student at SCSU</ProfileProfession>
                    <ProfileReview>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</ProfileReview>
                </ProfileMain>
                </CardContainer>
                <CardContainer>
                <div>
                    <ProfileImage src = "https://i.pravatar.cc/125" alt = ""></ProfileImage>
                </div>
                <ProfileMain>
                    <ProfileName>David Dawn</ProfileName>
                    <ProfileProfession>Computer Science student at SCSU</ProfileProfession>
                    <ProfileReview>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</ProfileReview>
                </ProfileMain>
                </CardContainer>
                <CardContainer>
                <div>
                    <ProfileImage src = "https://i.pravatar.cc/125" alt = ""></ProfileImage>
                </div>
                <ProfileMain>
                    <ProfileName>David Dawn</ProfileName>
                    <ProfileProfession>Computer Science student at SCSU</ProfileProfession>
                    <ProfileReview>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</ProfileReview>
                </ProfileMain>
                </CardContainer>
                <CardContainer>
                <div>
                    <ProfileImage src = "https://i.pravatar.cc/125" alt = ""></ProfileImage>
                </div>
                <ProfileMain>
                    <ProfileName>David Dawn</ProfileName>
                    <ProfileProfession>Computer Science student at SCSU</ProfileProfession>
                    <ProfileReview>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</ProfileReview>
                </ProfileMain>
                </CardContainer>
            </Card>
            
        </>
      );
    

}

export default RecentReviews
