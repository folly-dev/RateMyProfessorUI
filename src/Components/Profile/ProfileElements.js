import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: 610px;
    
`;
export const FirstContainer = styled.div`
    width: 70%;
    height: 60%;
    padding: 0;
    margin-left: 150px;
    margin-top: 90px;
`;
export const TitleSection = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1``;
export const Breaker = styled.div`
    width: 100%;
    margin-bottom: 20px;
    height: 1px;
    background-color: #E6E6E6;
    background-image: linear-gradient(left , white 2%, #E6E6E6 50%, white 98%);
`
export const SecondContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0;
`
export const Table = styled.table`
    border-collapse: collapse;
    font-size: 0.9em;
    font-family: sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    margin-left: 70px;
    width: 85%;
    margin-top: 200px;
    
`

export const Thead = styled.thead`
    background-color: #009879;
    color: #ffffff;
    text-align: left;
    
`
export const Td = styled.td`
 padding: 9px 40px;
 

`
export const Th1 = styled.th`
    padding: 15px 12px;
`
export const Th2 = styled.th`
    padding: 12px 40px;
`
export const Tr = styled.tr`
    
`
export const UserInfoContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`
export const NoReviews = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
    font-size: 3rem;
    font-weight: 900;
`
export const Button = styled.button`
    padding: 1.5rem;
  border: 0.1rem #808080 solid;
  cursor: pointer;
  border-radius: 0.5rem;
`
export const InputFields = styled.div`
    width: 65%;
    height: 50px;
    margin-top: 10px;
    margin-left: 20px ;
    display: flex;
    flex-direction: row;
    background-color: #e0e3de;
    border-radius: 5px;
`
export const PictureContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    padding: 0;
    margin-top: 10px;
    margin-left: 20px ;
    
`

export const PictureUrl = styled.div`
    width: 65%;
    height: 50px;
    background-color: #e0e3de;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`
export const UploadButton = styled.div`
 width: 20%;
 height: 50px;
 margin-left: 5px;
 background-color: #bbff8a;
 display: flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;
 border-radius: 3px;

`
export const Tbody = styled.tbody`
    &:hover{
    transition: all 0.2s ease-in-out;
    background-color: lightgrey;
 }
`
export const UpdateButton = styled.div`
    width: 20%;
    height: 50px;
    margin-top: 10px;
    margin-left: 20px;
    background-color: #bbff8a;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 3px;
`
export const Inputs = styled.input`
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    width: 100%;
    padding-left: 1rem;
    font-weight: 100;
    font-size: 1.0rem;

    ::placeholder{
        color: #aaa;
        font-weight:500
    }
`

export const UserInfo = styled.div`
    width: 60%;
    height: 100%;
    border: 1px solid;
    
`;
export const UserProfilePic = styled.div`
    width: 40%;
    height: 100%;
    border: 1px solid;

`
export const Picture  = styled.img``