import React from "react";
import { useEffect, useState } from "react";
import { useAxios } from "../../hooks/useAxios"
import styled from "styled-components";
// 1.  검색한 키워드에 해당하는 유저 정보를 받아온다.
//     화면에는 username , accountname , profileimage를 표시해줘야한다
// 2.  ProfileImage는 유저정보가 나오면서 해당유저의 accountname 을 이용해서 profile 사진을 받고 같이 출력해준다

const SearchDivWrap = styled.div`
    width: 390px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;
const SearchResultDiv = styled.div`
    width: 358px;
    margin: 10px auto;
`;
const SearchImgProfile = styled.img`
    float: left;
    width: 50px;
    height: 50px;
`;

const SearchUseHook = () => {
    const [keyword, setKeyword] = useState("");
    const searchUserConfig = {
        url: `/user/searchuser/`,
        method: "GET",
        params: {
            keyword: keyword,
        },
    };
    const { error, isPending, response, callRefetch } =
        useAxios(searchUserConfig);

    const onChange = (e) => {
        setKeyword(e.target.value);
        callRefetch();
        console.log(response);
    };
    useEffect(() => {});
    return (
        <>
            <input type="text" onChange={onChange} />
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
                            <p>{v.username}</p>
                            <strong>{v.accountname}</strong>
                        </SearchResultDiv>
                    );
                })}
            </SearchDivWrap>
        </>
    );
};

export default SearchUseHook;
