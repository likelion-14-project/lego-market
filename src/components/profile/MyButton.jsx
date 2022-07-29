import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledUl, ProfileModifyButton, ProductRegisterButton } from "./MyButton.style";



function MyButton() {
    const navigate = useNavigate();

    return (
        <StyledUl>
            <li>
                <ProfileModifyButton
                    content="프로필 수정"
                    disabled={false}
                    onClick={() => navigate("/profileModify")}
                />
            </li>
            <li>
                <ProductRegisterButton
                    content="상품 등록"
                    disabled={false}
                    onClick={() => navigate("/product")}
                />
            </li>
        </StyledUl>
    );
}

export default MyButton;
