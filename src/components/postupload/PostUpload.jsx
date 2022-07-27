import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAuthContext } from "../../hooks/useAuthContext";
import TopAdd from "../ui/TopAdd";

const Main = styled.main`
    width: 100%;
    height: 100vh;
    background-color: #fff;
    box-sizing: border-box;
    display: flex;
    min-width: 390px;
    margin-top: 48px;
    padding: 20px 0 20px 16px;
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
    margin-bottom: 16px;
    font-size: 14px;
    padding: 0;
    resize: none;
    outline: none;
    border: none;
`;

const UploadImgSection = styled.section`
    display: block;
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

const ImgItem = styled.li`
    position: relative;
    border-radius: 10px;
    width: 304px;
    height: 228px;
    overflow: hidden;
    border: 0.5px solid #767676;
`;

const PostUploadImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const RemoveBtn = styled.button`
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

function PostUpload({prevData}) {
    const [postContent, setPostContent] = useState("");
    const [postImg, setPostImg] = useState([]);
    const MAX_IMG_UPLOAD = 3;
    const [disabled, setDisabled] = useState(true);
    const { user } = useAuthContext();
    const url = "https://mandarin.api.weniv.co.kr";

    //이미지 업로드
    async function imageUpload(file) {
        const formData = new FormData();
        formData.append("image", file);
        const res = await fetch(url + "/image/uploadfile", {
            method: "POST",
            body: formData,
        });
        console.log(res);
        const json = await res.json();
        console.log(json);
        return url + "/" + json.filename;
    }

    async function handleGetImageUrl(e) {
        console.log(e.target.files);

        if (postImg.length < MAX_IMG_UPLOAD) {
            const file = e.target.files[0];
            const imgSrc = await imageUpload(file);
            const copyPostImg = [...postImg];
            copyPostImg.push(imgSrc);
            setPostImg(copyPostImg);
            setDisabled(false);
        } else {
            alert("이미지는 최대 3개까지 업로드할 수 있습니다.");
        }
    }

    async function uploadPost() {
        const token = localStorage.getItem("token");

        const reqData = {
            post: {
                content: postContent,
                image: postImg.join(","),
            },
        };

        const res = await fetch(url + "/post", {
            method: "post",

            headers: {
                Authorization: `Bearer ${token}`,
                "Content-type": "application/json",
            },
            body: JSON.stringify(reqData),
        });

        const json = await res.json();
        console.log(json);
        return json;
    }
    const onRemoveImg = (deleteUrl) => {
        if (postImg.length === 1 && postContent.length === 0) {
            setDisabled(true);
        }
        setPostImg(postImg.filter((photo) => photo != deleteUrl));
    };

    useEffect(()=>{
        if(prevData){
            setPostContent(prevData.post.content);
            setPostImg([prevData.post.image]);
        }
    },[setPostContent, setPostImg, prevData])

    return (
        <>
            <TopAdd content="업로드" onClick={uploadPost} disabled={disabled} />
            <Main>
                <h2 className="visually_hidden">게시글 작성</h2>
                {user ? (
                    <UserProfile src={user.image} />
                ) : (
                    <UserProfile
                        src={
                            process.env.PUBLIC_URL +
                            "/images/LegoDefaultImage.png"
                        }
                    />
                )}
                <Article>
                    <Form autocomplete="off">
                        <PostTextarea
                            type="text"
                            placeholder="게시글 입력하기"
                            maxLength="200"
                            onChange={(e) => {
                                setPostContent(e.target.value);
                                e.target.value.length > 0
                                    ? setDisabled(false)
                                    : setDisabled(true);
                            }}
                        >{prevData?.post.content}</PostTextarea>
                        <UploadImgIcon
                            htmlFor="uploadImg"
                            onChange={handleGetImageUrl}
                        />
                        <UploadImgInput
                            type="file"
                            accept="image/*"
                            id="uploadImg"
                            onChange={handleGetImageUrl}
                        />
                    </Form>
                    <UploadImgSection>
                        <h4 className="visually_hidden">업로드된 사진</h4>
                        <UploadImgList>
                            {postImg.map((imgArr, i) => {
                                return (
                                    <ImgItem key={i}>
                                        <PostUploadImg src={imgArr} />
                                        <RemoveBtn
                                            type="button"
                                            onClick={() => {
                                                return onRemoveImg(imgArr);
                                            }}
                                        >
                                            <span className="visually_hidden">
                                                이미지삭제버튼
                                            </span>
                                        </RemoveBtn>
                                    </ImgItem>
                                );
                            })}
                        </UploadImgList>
                    </UploadImgSection>
                </Article>
            </Main>
        </>
    );
}

export default PostUpload;
