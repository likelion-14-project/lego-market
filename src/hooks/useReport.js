import { useState } from "react";

export const useReport = () => {
    //const [isUpdate, setIsUpdate] = useState(false);
    const report = async (addUrl) => {
        try {
            const token = localStorage.getItem("token");
            const serverUrl = "https://mandarin.api.weniv.co.kr";
            const url = serverUrl + addUrl;

            const res = await fetch(url, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            });
            const json = await res.json();
            console.log(json);
            //setIsUpdate(!isUpdate);
        } catch (error) {
            console.log(error);
        }
    };
    return { report };
};
