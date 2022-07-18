import React, { useEffect } from "react";
import styled from "styled-components";
import SearchUserItem from "../search/SearchUserItem";

const FeedArticle = styled.article`
  position : relative;
  max-width : 358px;
  width :100%;
`;
const AuthorSection = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  cursor: pointer;
`

const Feed = ({ postDatas }) => {
    useEffect(() => {
        console.log(postDatas);
    }, [postDatas]);

    return (
        <>
            {postDatas.map((v, i) => {
                return (
                    <FeedArticle>
                        <AuthorSection>
                          <SearchUserItem
                              profileImg={v.author.image}
                              userName={v.author.username}
                              userId={v.author.accountname}
                          />
                        </AuthorSection>
                    </FeedArticle>
                );
            })}
        </>
    );
};

export default Feed;
