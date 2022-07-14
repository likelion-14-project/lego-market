import React from 'react'
import styled from "styled-components";

const SearchDivWrap = styled.ul`
    max-width: 390px;
    width : 100%;
`;
const SearchResultDiv = styled.li`
margin-bottom: 16px;
    position :relative;
    display : flex;
    align-items : center;
`;
const SearchImgProfile = styled.img`
    float: left;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border : 0.5px solid #f2f2f2;
`;

const SearchUserName = styled.strong`
    
`
const SearchUserId = styled.strong`
    
`

function SearchUserItem() {
  return (
    <SearchResultDiv>

</SearchResultDiv>
  )
}

export default SearchUserItem