import React from "react";
import styled from "styled-components";

const Image = styled.img`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 1px solid #dbdbdb;
`;
const defaultImgSrc = process.env.PUBLIC_URL + "/images/LegoDefaultImage.png";

function ProfileImage(props) {
    const { imgSrc, className } = props;

    return <Image className={className} src={imgSrc} />;
}

ProfileImage.defaultProps = {
    imgSrc: defaultImgSrc,
};

export default ProfileImage;
