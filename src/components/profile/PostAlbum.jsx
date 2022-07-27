import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AlbumPostWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 390px;
`;
const PostList = styled.ul`
    display: grid;
    grid-template-columns: 114px 114px 114px;
    gap: 8px;
`;
const Postitem = styled.li`
    max-height: 114px;
    min-height: 114px;
`;
const PostImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.4s;
    border-radius: 5px;
`;
const PostLink = styled(Link)`
    width: 100%;
    height: 100%;
`;

const Post = ({ datas }) => {
    const [imgNum, setImgNum] = useState("0");

    useEffect(() => {
        console.log(datas);
    }, [datas]);

    return (
        <AlbumPostWrap>
            <PostList>
                {datas
                    ?.filter((i) => i.image.length !== 0)
                    .map((v, i) => {
                        const PostImgSrc = v.image.split(",");
                        console.log(v);
                        console.log(v.id);
                        console.log(PostImgSrc);
                        return (
                            <Postitem key={i}>
                                <PostLink to={`/postdetail/:${v.id}`}>
                                    <PostImg src={PostImgSrc[imgNum]} />
                                </PostLink>
                            </Postitem>
                        );
                    })}
            </PostList>
        </AlbumPostWrap>
    );
};

export default Post;
