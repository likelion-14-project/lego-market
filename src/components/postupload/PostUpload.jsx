import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import TopAdd from "../ui/TopAdd";
import {
    Main,
    UserProfile,
    Article,
    Form,
    PostTextarea,
    UploadImgIcon,
    UploadImgInput,
    UploadImgSection,
    UploadImgList,
    ImgItem,
    PostUploadImg,
    RemoveBtn,
} from "./PostUpload.style";

function PostUpload({ prevData }) {
    const [postContent, setPostContent] = useState("");
    const [postImg, setPostImg] = useState([]);
    const MAX_IMG_UPLOAD = 3;
    const [disabled, setDisabled] = useState(true);
    const { user } = useAuthContext();
    const navigate = useNavigate();
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
    function upLoadButtonClicked() {
        navigate("/myprofile", { replace: true });
    }

    useEffect(() => {
        if (prevData) {
            setPostContent(prevData.post.content);
            setPostImg([prevData.post.image]);
        }
    }, [setPostContent, setPostImg, prevData]);

    return (
        <>
            <TopAdd
                content="업로드"
                onClick={uploadPost}
                disabled={disabled}
                upLoadButtonClicked={upLoadButtonClicked}
            />
            <Main>
                <h2 className="visually_hidden">게시글 작성</h2>
                {user ? (
                    <UserProfile src={user.image} />
                ) : (
                    <UserProfile src={process.env.PUBLIC_URL + "/images/LegoDefaultImage.png"} />
                )}
                <Article>
                    <Form autocomplete="off">
                        <PostTextarea
                            type="text"
                            placeholder="게시글 입력하기"
                            maxLength="200"
                            onChange={(e) => {
                                setPostContent(e.target.value);
                                e.target.value.length > 0 ? setDisabled(false) : setDisabled(true);
                            }}
                        >
                            {prevData?.post.content}
                        </PostTextarea>
                        <UploadImgIcon htmlFor="uploadImg" onChange={handleGetImageUrl} />
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
                                            <span className="visually_hidden">이미지삭제버튼</span>
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
