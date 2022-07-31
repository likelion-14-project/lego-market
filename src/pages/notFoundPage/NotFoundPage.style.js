import styled from "styled-components";
import Button from "../../components/ui/button/Button";

export const Wrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

export const Span = styled.span`
    display: block;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #767676;
    margin-top: 32px;
    margin-bottom: 20px;
`;

export const StyledButton = styled(Button)`
    width: 120px;
    padding: 13px 0;
    background-color: #ea4335;
`;
