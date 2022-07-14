import React from "react";
import { useEffect, useState } from "react";
import { useAxios } from "../../hooks/useAxios";
import styled from "styled-components";
import TopUtilBar from "../ui/TopUtilBar";
import { useLocation } from "react-router-dom";
import {MainWrap} from "../../styles/GlobalStyle"
import { getDefaultNormalizer } from "@testing-library/react";
import SearchUserItem from "./SearchUserItem";
// 1.  검색한 키워드에 해당하는 유저 정보를 받아온다.
//     화면에는 username , accountname , profileimage를 표시해줘야한다
// 2.  ProfileImage는 유저정보가 나오면서 해당유저의 accountname 을 이용해서 profile 사진을 받고 같이 출력해준다

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
    const { error, isPending, response, callRefetch} =
        useAxios(searchUserConfig);

    const onChange = (e) => {
        setKeyword(e.target.value);
        callRefetch();
        console.log(response);
    };

    return (
        <>
            <TopUtilBar onChange={onChange} pathname={pathname} />
            <MainWrap>
                <SearchDivWrap>
                    {response?.data.map((v, i) => {
                        return (
                            <SearchResultDiv>
                                <SearchImgProfile
                                    src={
                                        v.image ? v.image : "/images/초기프로필.png"
                                    }
                                    alt={v.username + "의 프로필"}
                                ></SearchImgProfile>
                                <strong>{v.username}</strong>
                                <strong>{v.accountname}</strong>
                            </SearchResultDiv>
                            // 컴포넌트화 하면 좋을 것 같은 부분
                        );
                    })}
                </SearchDivWrap>
            </MainWrap>
        </>
    );
};

export default SearchUseHook;