import React from "react";
import { useEffect, useState } from "react";
import { useAxios } from "../../hooks/useAxios";
import styled, { keyframes } from "styled-components";
import TopUtilBar from "../ui/TopUtilBar";
import { useLocation } from "react-router-dom";
import { MainWrap } from "../../styles/GlobalStyle";
import SearchUserItem from "./SearchUserItem";
// 1.  검색한 키워드에 해당하는 유저 정보를 받아온다.
//     화면에는 username , accountname , profileimage를 표시해줘야한다
// 2.  ProfileImage는 유저정보가 나오면서 해당유저의 accountname 을 이용해서 profile 사진을 받고 같이 출력해준다
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
    const { error, isPending, response, callRefetch } =
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
                {isPending ? (
                    <SearchDivWrap>
                        {response?.data.map((v, i) => {
                            return (
                                <ListWrap>
                                    <SearchUserItem
                                        key={i}
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
            </MainWrap>
        </>
    );
};

export default SearchUseHook;
