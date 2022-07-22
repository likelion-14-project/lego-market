import React from "react";
import Follow from "../components/follow/Follow";
import { useParams } from "react-router-dom";

function FollowPage() {
    const { accountname, type } = useParams();
    return (
        <>
            <Follow accountname={accountname} type={type} />
        </>
    );
}

export default FollowPage;
