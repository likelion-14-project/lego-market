import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const HomeHeaderWrap = styled.div`
    display: flex;
    padding: 13px 16px;
    border-bottom: #dbdbdb 1px solid;
    strong {
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
        flex: 1;
    }
`;

function HomeHeader() {
    const navigate = useNavigate();
    return (
        <HomeHeaderWrap>
            <strong>감귤마켓 피드</strong>
            <img
                src={process.env.PUBLIC_URL + "/icons/icon-search.png"}
                alt="피드찾기"
                onClick={()=>navigate("/home/search")}
            ></img>
        </HomeHeaderWrap>
    );
}

export default HomeHeader;
