import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NavDiv, NavImg, NavStrong } from "./NavFooterItem.style";

const NavFooterItem = ({ link, content, activeIcon, inActiveIcon }) => {
    const { pathname } = useLocation();

    return (
        <NavLink to={link}>
            <NavDiv>
                <NavImg src={link === pathname ? activeIcon : inActiveIcon} alt={content}></NavImg>
                <NavStrong>{content}</NavStrong>
            </NavDiv>
        </NavLink>
    );
};

export default NavFooterItem;
