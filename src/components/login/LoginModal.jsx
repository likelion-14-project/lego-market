import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginArticle = styled.article`
    position : absolute;
    width : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    height: 462px;
    background-color: #fff;
    border-radius: 20px 20px 0px 0px;
    top: ${(props) => (props.loginState === false ? "140%" : "64%")};
    transition: all 600ms cubic-bezier(0.86, 0, 0.7, 1);
    .login-sns {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
    }
    .login-sns li::before {
        content: "";
        display: block;
        float: left;
        width: 24px;
        height: 24px;
        background-image: url(${process.env.PUBLIC_URL + `/icons/sprite-sns-2x.png`});
        background-repeat: no-repeat;
        background-size: 96px 34px;
        margin-left: 14px;
        margin-top: 10px;
    }
    .login-sns .login-kakao::before {
        background-position: -67px -5px;
    }
    .login-sns .login-google::before {
        background-position: -34px -5px;
    }
    .login-sns .login-facebook::before {
        background-position: -5px -5px;
    }
    .login-sns .login-kakao {
        border: 1px solid #f2c94c;
    }
    .login-sns .login-google {
        border: 1px solid #767676;
    }
    .login-sns .login-facebook {
        border: 1px solid #2d9cdb;
    }
    ul.login-sns li {
        width: 100%;
        color: black;
        background-color: white;
        border-radius: 44px;
    }
    ul.login-sns li a {
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        display: block;
        padding: 13px 38px;
        text-align: center;
    }
    li:nth-child(2n) {
        /* first child 는 왜 안되는걸까 */
        margin: 13px 0px;
    }

    .cont-signup {
        margin-top: 20px;
    }
    .cont-signup a {
        font-weight: 400;
        line-height: 15px;
        font-size: 12px;
    }
    .cont-signup a:last-child::before {
        content: "|";
        vertical-align: top;
        margin: 0 10px;
        display: inline-block;
    }
`;
function LoginModal({ loginState }) {
    return (
        <>
            <LoginArticle loginState={loginState}>
                <h2 className="visually_hidden">소셜로그인 및 회원가입</h2>
                <ul className="login-sns wrapper-account">
                    <li className="login-kakao">
                        <a href="#">카카오톡 계정으로 로그인 </a>
                    </li>
                    <li className="login-google">
                        <a href="#">구글 계정으로 로그인</a>
                    </li>
                    <li className="login-facebook">
                        <a href="#">페이스북 계정으로 로그인</a>
                    </li>
                </ul>
                <section className="cont-signup wrapper-account">
                    <h2 className="visually_hidden">로그인 및 회원가입</h2>
                    <Link to="/loginpage">
                        <strong> 이메일로 로그인</strong>
                    </Link>
                    <Link to="/joinpage">
                        <strong>회원가입</strong>
                    </Link>
                </section>
            </LoginArticle>
        </>
    );
}

export default LoginModal;
