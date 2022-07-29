import { Link } from "react-router-dom";
import styled from "styled-components";

export const AlbumPostWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 390px;
`;
export const PostList = styled.ul`
    display: grid;
    grid-template-columns: 114px 114px 114px;
    gap: 8px;
`;
export const PostItem = styled.li`
    max-height: 114px;
    min-height: 114px;
`;
export const PostImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.4s;
    border-radius: 5px;
    `;
export const PostLink = styled(Link)`
    width: 100%;
    height: 100%;
`;
