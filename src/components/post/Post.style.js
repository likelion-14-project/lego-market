import styled from "styled-components";

export const FeedArticle = styled.article`
    position: relative;
    max-width: 358px;
    width: 100%;
    margin: 0px auto 20px;
`;
export const AuthorSection = styled.section`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    cursor: pointer;
`;
export const PostSection = styled.section`
    padding-left: 54px;
`;
export const PostTxt = styled.p`
font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 16px;
    word-break: break-all;
`;
export const PostImgDiv = styled.div`
    position: relative;
    margin-bottom: 16px;
    max-height: 228px;
    border-radius: 10px;
    overflow: hidden;
`;
export const PostImgList = styled.ul`
    display: flex;
`;
export const PostImg = styled.img`
    min-width: 304px;
    width: 100%;
    height: 100%;
    max-height: 228px;
    min-height: 228px;
    overflow: hidden;
    object-fit: cover;
`;

export const PostDate = styled.strong`
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #767676;
`;

export const SliderButtonWrap = styled.ul`
    position: absolute;
    display: flex;
    gap: 20px;
    left: 50%;
    bottom: 16px;
    transform: translateX(-50%);
`;
export const SliderButton = styled.button`
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    bottom: 0;
    background-color: #fff;
`;
export const ModalButtonWrap = styled.div`
    position: absolute;
    top: 4px;
    right: 0;
`;