import { CircularProgress } from '@material-ui/core';
import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router';
import { DeleteReviewOnProfileAction, ReviewOnProfileAction } from '../../Actions/ReviewOnProfileAction';
import { ProgressIndicator } from '../ReviewCard/ReviewCardElements';
import { MainContainer,FirstContainer, NoReviews, Thead, Button, Tbody, Td, Tr, Th1, Th2, Table, TitleSection,SecondContainer, PictureContainer, PictureUrl, UpdateButton, UploadButton,  InputFields, Inputs, Title, Breaker, UserInfoContainer, UserProfilePic, UserInfo, Picture } from './ProfileElements' 



const Profile = (props) => {
    const userLogin = useSelector((state) => state.SignIn);
    const Response = useSelector((state) => state.ReviewOnProfile);
    const { loading, error, reviewsOnProfile } = Response;
    const DeletedResponse = useSelector((state) => state.DeleteReviewOnProfile);
    const { deletedReview } = DeletedResponse;
    const user = JSON.parse(userLogin.user);
    
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) {
                props.history.push("/")
        } else {
            
            dispatch(ReviewOnProfileAction(user.id));
            }
    }, [deletedReview]);

    const deleteReviewHandler = ( reviewId) => {
        dispatch(DeleteReviewOnProfileAction(reviewId));
    }

    return user ? (
        <MainContainer>
            <FirstContainer>

                <TitleSection>
                    <Title>WELCOME { user.fname}</Title>
                    <Breaker />
                </TitleSection>
                <UserInfoContainer>
                    <UserInfo>
                    
                        <InputFields>
                            <Inputs id = "email address" name = "email" placeholder = "Email" type = "Text"/>
                        </InputFields>
                        {/* <SpanError><SpanErrorMessage>This is an error</SpanErrorMessage></SpanError> */}
                        <InputFields>
                            <Inputs id = "Old Password" name = "OldPassword" placeholder = "Old Password" type = "Password"/>
                        </InputFields>
                        {/* <SpanError><SpanErrorMessage>This is an error</SpanErrorMessage></SpanError> */}
                        <InputFields>
                            <Inputs id = "NewPassword" name = "NewPassword" placeholder = "New Password" type = "New Password"/>
                        </InputFields>
                        <InputFields>
                            <Inputs id = "Confirm Password" name = "ConfirmPassword" placeholder = "Confirm Password" type = "Password"/>
                        </InputFields>
                        <PictureContainer>
                            <PictureUrl />
                            <UploadButton>UPLOAD</UploadButton>
                        </PictureContainer>
                        <UpdateButton>UPDATE</UpdateButton>
                    </UserInfo>
                    <UserProfilePic>
                        <Picture />
                    </UserProfilePic>
                </UserInfoContainer>
            </FirstContainer>
            {loading ? (<ProgressIndicator><CircularProgress value = {100}/></ProgressIndicator>) : error ? (<div>{error}</div>) : (
                <SecondContainer>
                    {reviewsOnProfile.length > 0 ? (
                        <Table>
                            <Thead>
                            <Tr>
                                <Th1>Name</Th1>
                                <Th1>Course</Th1>
                                <Th1>Quality</Th1>
                                <Th1>Difficulty</Th1>
                                <Th2>Review</Th2>
                            </Tr>
                            </Thead>
                            <Tbody>
                                {reviewsOnProfile.map((data) => {
                                    return (
                                        <Tr>
                                            <Td>{data.firstName} { data.lastName}</Td>
                                            <Td>{ data.course}</Td>
                                            <Td>{ data.quality}</Td>
                                            <Td>{ data.difficulty}</Td>
                                            <Td>{ data.review}</Td>
                                            <Button
                                            onClick={() => deleteReviewHandler(data.id)}
                                            >
                                            Delete
                                            </Button>
                                        </Tr>
                                )
                            })}
                                
                            </Tbody>
                        </Table>
                    ) : (<NoReviews>NO REVIEWS...</NoReviews>)}
                    
                    
                </SecondContainer>
            )}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </MainContainer>
    ): <Redirect to = "/"></Redirect>
}

export default Profile
