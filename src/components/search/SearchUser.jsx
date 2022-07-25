import React from "react";
import { useState } from "react";
import { useAxios } from "../../hooks/useAxios";
import styled, { keyframes } from "styled-components";
import { useLocation } from "react-router-dom";
import { MainContentsWrap } from "../../styles/GlobalStyle";
import SearchUserItem from "./SearchUserItem";
import TopNav from "../ui/TopNav";
import BackButton from "../ui/BackButton";

const fadeOut = keyframes`
  0%{
    opacity : 0;
    
  }
  100%{
    opacity : 1;
  }
  `;

const SearchDivWrap = styled.ul`
    max-width: 390px;
    width: 100%;
`;
const ListWrap = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    animation: ${fadeOut} 0.5s linear both;
`;
const SearchInput = styled.input`
    width: calc(100% - 38px);
    height: 32px;
    padding: 4px 16px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    color: #000;
    border: none;
    background-color: #f2f2f2;
    border-radius: 32px;
    outline: none;
    ::-webkit-input-placeholder {
        color: #b5b0b0;
    }
`;

const SearchUseHook = () => {
    const [keyword, setKeyword] = useState("");
    const { pathname } = useLocation();
    const searchUserConfig = {
        url: `/user/searchuser/`,
        method: "GET",
        params: {
            keyword: keyword === "" ? false : keyword,
        },
    };
    const { isPending, response, callRefetch } = useAxios(searchUserConfig);

    const onChange = (e) => {
        setKeyword(e.target.value);
        callRefetch();
        console.log(response);
    };

    return (
        <>
            <TopNav
                leftChild={<BackButton />}
                centerChild=
                {<SearchInput placeholder="계정검색" onChange={onChange}>
                </SearchInput>}
            />
            <MainContentsWrap>
                {isPending ? (
                    <SearchDivWrap>
                        {response?.data.map((v, i) => {
                            return (
                                <ListWrap key={i}>
                                    <SearchUserItem
                                        profileImg={v.image}
                                        userName={v.username}
                                        userId={v.accountname}
                                    />
                                </ListWrap>
                            );
                        })}
                    </SearchDivWrap>
                ) : (
                    <div> loading ....</div>
                )}
            </MainContentsWrap>
        </>
    );
};

export default SearchUseHook;
