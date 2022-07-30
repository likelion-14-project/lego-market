import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../ui/button/Button";

export const Wrapper = styled.div`
    padding: 30px 34px;
`;

export const H1 = styled.h1`
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    margin-bottom: ${(props) => props.marginBottom}px;
`;

export const StyledLink = styled(Link)`
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-decoration: none;
    color: #767676;
    display: block;
    margin-top: 20px;
    text-align: center;
`;

export const StyledButton = styled(Button)`
    padding: 13px 0px;
    margin-top: 30px;
`;
