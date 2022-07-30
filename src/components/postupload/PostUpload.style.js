import styled from "styled-components";
import Button from "../ui/button/Button";

export const Main = styled.main`
    width: 100%;
    height: 100vh;
    background-color: #fff;
    box-sizing: border-box;
    display: flex;
    min-width: 390px;
    padding: 20px 0 20px 16px;
`;

export const UploadBtn = styled(Button)`
    width: 90px;
    padding: 7px 26px 7px 25px;
`;

export const UserProfile = styled.img`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    margin-right: 12px;
    border: 0.5px solid #dbdbdb;
`;
export const Article = styled.article`
    position: relative;
    min-width: 300px;
    width: 100%;
    padding-right: 16px;
`;

export const Form = styled.form`
    width: 100%;
    padding-top: 16px;
`;
export const PostTextarea = styled.textarea`
    width: 100%;
    margin-bottom: 16px;
    font-size: 14px;
    padding: 0;
    resize: none;
    outline: none;
    border: none;
`;

export const UploadImgSection = styled.section`
    display: block;
`;

export const UploadImgInput = styled.input`
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
    padding: 0;
`;
export const UploadImgIcon = styled.label`
    position: fixed;
    bottom: 16px;
    right: 16px;
    width: 50px;
    height: 50px;
    background-image: url(${process.env.PUBLIC_URL + `/images/img-button.png`});
    background-position: center;
    background-size: cover;
    cursor: pointer;
    z-index: 100;
`;
export const UploadImgList = styled.ul`
    display: flex;
    gap: 8px;
    width: 100%;
`;

export const ImgItem = styled.li`
    position: relative;
    border-radius: 10px;
    width: 304px;
    height: 228px;
    overflow: hidden;
    border: 0.5px solid #767676;
`;
export const PostUploadImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
export const RemoveBtn = styled.button`
    position: absolute;
    top: 6px;
    right: 6px;
    height: 22px;
    width: 22px;
    background-image: url(${process.env.PUBLIC_URL + `/icons/icon-delete.png`});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    cursor: pointer;
    padding: 0;
    background-color: inherit;
`;
