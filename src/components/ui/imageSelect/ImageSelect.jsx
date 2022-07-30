import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input.attrs({
    type: "file",
    id: "file",
})`
    display: none;
`;

const Img = styled.img`
    cursor: pointer;
`;

function ImageSelect(props) {
    const { width, setImgSrc } = props;

    const handleImage = async (e) => {
        const file = e.target.files[0];
        const url = "https://mandarin.api.weniv.co.kr/image/uploadfile";

        try {
            let formData = new FormData();
            formData.append("image", file);

            const response = await fetch(url, {
                method: "POST",
                body: formData,
            });

            const json = await response.json();
            const filename = json.filename;

            if (filename) {
                setImgSrc("https://mandarin.api.weniv.co.kr/" + filename);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className={props.className}>
            <label htmlFor='file'>
                <Img
                    src={process.env.PUBLIC_URL + "/images/upload-file.png"}
                    alt='프로필설정버튼'
                    width={width}
                />
            </label>
            <Input onChange={handleImage} />
        </div>
    );
}

ImageSelect.defaultProps = {
    setImgSrc: () => {},
};

export default ImageSelect;
