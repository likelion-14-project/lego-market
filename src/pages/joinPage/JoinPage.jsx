import React, { useState } from "react";
import EmailJoin from "../../components/join/emailJoin/EmailJoin";
import ProfileSetting from "../../components/join/profileSetting/ProfileSetting";

function JoinPage() {
    const [nextPage, setNextPage] = useState(false);
    const [account, setAccount] = useState({
        email: "",
        password: "",
    });

    return (
        <>
            {nextPage ? (
                <ProfileSetting account={account} />
            ) : (
                <EmailJoin setNextPage={setNextPage} setAccount={setAccount} />
            )}
        </>
    );
}

export default JoinPage;
