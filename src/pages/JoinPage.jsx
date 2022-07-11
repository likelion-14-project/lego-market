import React, { useState } from "react";
import EmailJoin from "../components/join/EmailJoin";

function JoinPage() {

    const [nextPage, setNextPage] = useState(false);

    return (
        <>
            <EmailJoin setNextPage={setNextPage} />
        </>
    );
}

export default JoinPage;
