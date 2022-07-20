import React, { useEffect } from "react";
import Profile from "../components/profile/Profile";
import { Link, useParams } from "react-router-dom";
import { useInfo } from "../hooks/useInfo";

function ProfilePage() {
    const { accountname } = useParams();

    return (
        <>
            <Profile accountname={accountname} />
        </>
    );
}

export default ProfilePage;
