import React, {useState } from 'react'
import { useSelector } from 'react-redux';
import { SeachBarContainer, Container, InputField, SearchButton, SearchResult, SearchWrapper, Result } from "./SeachBarElements"
const Search = (props) => {
    const Profs = useSelector((state) => state.Profs)
    const { professors } = Profs;
    const [search, setSearch] = useState("");
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const Filter = (rows) => {
        return rows.filter(
          (row) =>
            row.firstName.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
            row.lastName.toLowerCase().indexOf(search.toLowerCase()) > -1
        );
    };

    const selectProf = (id) => {
        props.history.push(`/professor/${id}`);
    };
    return (
        <>
            <Container>
                <SeachBarContainer>
                    <InputField placeholder = "Enter professor name" type = "text" onChange = {handleSearch}></InputField>
                    <SearchButton></SearchButton>
                </SeachBarContainer>
                
            </Container>
            {(professors && search) &&  <SearchWrapper>
                    {Filter(professors).map((prof) => (
                        <SearchResult key={prof.id} onClick={() => selectProf(prof.id)}>
                            <Result>{prof.firstName} {prof.lastName}</Result>
                        </SearchResult>
                    ))}
            </SearchWrapper>}
            
            
        </>
    )
}

export default Search
