import styled from "styled-components";
import ImageSelect from "../../ui/imageSelect/ImageSelect";
import Button from "../../ui/button/Button";

export const Wrapper = styled.div`
    padding: 30px 34px;
`;

export const H1 = styled.h1`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 12px;
    text-align: center;
`;

export const P = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #767676;
    text-align: center;
    margin-bottom: 30px;
`;

export const ImageWrapper = styled.div`
    width: 110px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 30px;
`;

export const StyledImageSelect = styled(ImageSelect)`
    position: absolute;
    bottom: 0;
    right: 0;
`;

export const StyledButton = styled(Button)`
    padding: 13px 0px;
    margin-top: 30px;
`;
