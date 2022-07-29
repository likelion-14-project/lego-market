import { useState } from "react";

export const useDelete = () => {
    const [isUpdate, setIsUpdate] = useState(false);
    const remove = async (addUrl) => {
        try {
            const token = localStorage.getItem("token");
            const serverUrl = "https://mandarin.api.weniv.co.kr";
            const url = serverUrl + addUrl;

            const res = await fetch(url, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            });
            const json = await res.json();
            console.log(json);
            setIsUpdate(!isUpdate);
        } catch (error) {
            console.log(error);
        }
    };
    return { remove, isUpdate, setIsUpdate };
};
