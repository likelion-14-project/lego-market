import React, { useEffect, useState } from "react";
import { AlbumPostWrap, PostList, PostItem, PostImg, PostLink } from "./PostAlbum.style";

const ProfilePostAlbum = ({ datas }) => {
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
                        return (
                            <PostItem key={i}>
                                <PostLink to={`/postdetail/${v?.id}`}>
                                    <PostImg
                                        src={PostImgSrc[imgNum]}
                                        alt={v.image.split(/^(https?)\/\//)}
                                    />
                                </PostLink>
                            </PostItem>
                        );
                    })}
            </PostList>
        </AlbumPostWrap>
    );
};

export default ProfilePostAlbum;
