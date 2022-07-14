import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const NavDiv = styled.div`
    width: 84px;
    height: 59px;
    padding: 11.5px 0 6px;
    margin: 0 auto;
`;
const NavImg = styled.img`
    width: 24px;
    height: 24px;
    margin: 0 auto;
    display: block;
`;
const NavStrong = styled.strong`
    display: block;
    text-align: center;
    font-size: 10px;
    line-height: 14px;
    font-weight: 400;
    margin-top: 4px;
    color: #767676;
    cursor: pointer;
`;
const NavFooterItem = ({ link, content, activeIcon, inActiveIcon }) => {
    const { pathname } = useLocation();

    return (
        <NavLink to={link}>
            <NavDiv>
                <NavImg
                    src={link === pathname ? activeIcon : inActiveIcon}
                    alt={content}
                ></NavImg>
                <NavStrong>{content}</NavStrong>
            </NavDiv>
        </NavLink>
    );
};

export default NavFooterItem;
