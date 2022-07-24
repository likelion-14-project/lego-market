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
// datas 값을 받아와서 처리하는게 아니라 accountname 값을 받아서 post 에서 데이터요청을 해서 처리하는게 맞는지 ?
const Post = ({ datas }) => {
    const [imgNum, setImgNum] = useState("0");
    // 이미지가 여러개일 경우 추가하려고 작성(미완성)
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
