import React from "react";
import { useState } from "react";
import { useAxios } from "../../hooks/useAxios";
import SearchUserItem from "./SearchUserItem";
import TopNav from "../ui/TopNav";
import BackButton from "../ui/BackButton";
import { SearchInput, SearchDivWrap, ListWrap, MainContentsWrap } from "./SearchUser.style";

const SearchUseHook = () => {
    const [keyword, setKeyword] = useState("");
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
                centerChild={<SearchInput placeholder="계정검색" onChange={onChange}></SearchInput>}
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
