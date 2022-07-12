import React, { useState } from "react";
import EmailJoin from "../components/join/EmailJoin";
import ProfileSetting from "../components/join/ProfileSetting";

function JoinPage() {

    const [nextPage, setNextPage] = useState(false);
    const [account, setAccount] = useState({
        email : '',
        password : ''
    })

    return (
        <>
            {nextPage ? <ProfileSetting account={account}/> : <EmailJoin setNextPage={setNextPage} setAccount={setAccount}/>}
        </>
    );
}

export default JoinPage;
