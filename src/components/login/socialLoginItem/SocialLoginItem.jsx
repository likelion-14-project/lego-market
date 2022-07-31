import React from "react";
import { SocialLoginItemList, SocialLoginAnchor } from "./SocialLoginItem.style";

const SocialLoginItem = ({ position, socialName }) => {
    return (
        <SocialLoginItemList position={position} socialName={socialName}>
            <SocialLoginAnchor>{socialName}계정으로 로그인</SocialLoginAnchor>
        </SocialLoginItemList>
    );
};

export default SocialLoginItem;
