import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import TopNav from "../ui/TopNav";

const Main = styled.main`
    width: 100%;
    height: 100vh;
    background-color: #fff;
    box-sizing: border-box;
    display: flex;
    padding: 20px 0 20px 16px;
    min-width: 390px;
`;

const UserProfile = styled.img`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    margin-right: 12px;
    border: 0.5px solid #dbdbdb;
`;

const Article = styled.article`
    position: relative;
    min-width: 300px;
    width: 100%;
    padding-right: 16px;
    /* overflow-y: scroll; */
    overflow-y: hidden;
`;

const Form = styled.form`
    width: 100%;
    padding-top: 16px;
`;

const PostTextarea = styled.textarea`
    width: 100%;
    height: 100vh;
    margin-bottom: 16px;
    font-size: 14px;
    padding: 0;
    resize: none;
    outline: none;
    border: none;
`;

const UploadImgSection = styled.section`
    display: none;
`;

const UploadImgInput = styled.input`
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
    padding: 0;
`;

const UploadImgIcon = styled.label`
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
const UploadImgList = styled.ul`
    display: flex;
    gap: 8px;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
`;

function PostUpload() {
    const [postContent, setPostContent] = useState("");
    const [postImg, setPostImg] = useState("");
    const {
        register,
        handleSubmit,
        formState: { isValid },
    } = useForm({
        mode: "onChange",
    });

    async function uploadPost() {
        localStorage.setItem(
            "token",
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzk5OWIyODJmZGNjNzEyZjQzN2ExZiIsImV4cCI6MTY2MzIxODE2MCwiaWF0IjoxNjU4MDM0MTYwfQ.J27H1LYzMHbJz8-2XTZ9ZwqD8tfMK-AXD1usRExZeAQ"
        );

        const token = localStorage.getItem("token");

        const reqData = {
            post: {
                content: "content",
                image: "image", //"imageurl1, imageurl2" 형식으로
            },
        };

        const res = await fetch("https://mandarin.api.weniv.co.kr/post", {
            method: "post",

            headers: {
                Authorization: `Bearer ${token}`,
                "Content-type": "application/json",
            },
            body: JSON.stringify(reqData),
        });

        const json = await res.json();
        console.log(json);
    }
    return (
        <>
            <TopNav></TopNav>
            <Main>
                <h2 className="visually_hidden">게시글 작성</h2>
                <UserProfile
                    src={process.env.PUBLIC_URL + "/images/초기프로필.png"}
                />
                <Article>
                    <Form autocomplete="off">
                        <PostTextarea
                            type="text"
                            placeholder="게시글 입력하기"
                            maxLength="200"
                        ></PostTextarea>
                        <h4 className="visually_hidden">
                            게시글 이미지 업로드
                        </h4>
                        <UploadImgIcon htmlFor="uploadImg"></UploadImgIcon>
                        <UploadImgInput
                            type="file"
                            accept="image/*"
                            id="uploadImg"
                        />
                        <UploadImgSection>
                            <UploadImgList></UploadImgList>
                        </UploadImgSection>
                    </Form>
                </Article>
            </Main>
        </>
    );
}

export default PostUpload;
