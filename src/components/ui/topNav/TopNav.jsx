import React from "react";
import { Wrapper, Left, Center, Right } from "./TopNav.style";

function TopNav(props) {
    const { leftChild, centerChild, rightChild } = props;

    return (
        <Wrapper>
            <Left>{leftChild}</Left>
            <Center>{centerChild}</Center>
            <Right>{rightChild}</Right>
        </Wrapper>
    );
}

export default TopNav;
