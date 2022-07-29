import styled from "styled-components";
import ImageSelect from "../ui/ImageSelect";
import Button from "../ui/Button";

export const Wrapper = styled.div`
    padding: 30px 34px;
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

export const SaveButton = styled(Button)`
    padding: 7px 0px;
    width: 90px;
`;
