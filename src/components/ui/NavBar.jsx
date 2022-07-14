import React from "react";
import styled from "styled-components";
import NavFooterItem from "./NavFooterItem";

const NavBarWrap = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    min-width : 390px;
    width : 100%;
    height : 61px;
    padding : 0 6px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid black;
    z-index: 10;
`;
function NavBar() {
    return (
        <NavBarWrap>
            <NavFooterItem
                link="/home"
                content="홈"
                activeIcon={
                    process.env.PUBLIC_URL + "/icons/icon-home-fill.png"
                }
                inActiveIcon={
                    process.env.PUBLIC_URL + "/icons/icon-home.png"
                }
            />
            <NavFooterItem
                link="/chat"
                content="채팅"
                activeIcon={
                    process.env.PUBLIC_URL +
                    "/icons/icon-message-circle-fill.png"
                }
                inActiveIcon={
                    process.env.PUBLIC_URL +
                    "/icons/icon-message-circle.png"
                }
            />
            <NavFooterItem
                link="/editpost"
                content="게시글 작성"
                activeIcon={
                    process.env.PUBLIC_URL + "/icons/icon-edit.png"
                }
                inActiveIcon={
                    process.env.PUBLIC_URL + "/icons/icon-edit.png"
                }
            />
            <NavFooterItem
                link="/myprofile"
                content="프로필"
                activeIcon={
                    process.env.PUBLIC_URL + "/icons/icon-user-fill.png"
                }
                inActiveIcon={
                    process.env.PUBLIC_URL + "/icons/icon-user.png"
                }
            />
        </NavBarWrap>
    );
}

export default NavBar;
