import styled from "styled-components";

export const LoginArticle = styled.article`
    position: fixed;
    bottom: 0;
    width: 100%;
    min-width: 390px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 20px 20px 0px 0px;
    top: ${(props) => (props.splashLoading === false ? "140%" : "64%")};
    transition: all 600ms cubic-bezier(0.86, 0, 0.7, 1);
`;
export const SocialLoginWrap = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 322px;
    padding: 0 34px;
    margin-top: 50px;
`;
