import styled from "styled-components";
const Container = styled.div`
    padding-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 0;
`
const SeachBarContainer = styled.div`
    display: flex;
    width: 35%;
    flex-direction: row;
    border: 2px solid;
    padding-left: 13px;
    padding-top: 3px;
    padding-bottom: 3px;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`
const SearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;

`
const Result = styled.p`
    font-size: large;
`

const SearchResult = styled.ul`
    width: 33.5%;
    display: grid;
    background-color: white;
    margin-top: 0;
    margin-bottom: 0;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    &:hover{
        transition: all 0.2s ease-in-out;
        background:  whitesmoke;
    }
`
const InputField = styled.input`
    width: 77%;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: larger;
    padding-left: 10px;
    padding-right: 10px;
    border: 0;
    outline: none;
    
`
const SearchButton = styled.button`
    padding-right: 30px;
    margin-left: 3px;
    border: 0;
`

export {InputField, SeachBarContainer, SearchButton, Container, SearchResult, SearchWrapper, Result}