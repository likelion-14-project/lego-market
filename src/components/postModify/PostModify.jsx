import React from "react";
import { useLocation } from "react-router-dom";
import PostUpload from "../postupload/PostUpload";

const PostModify = () => {
  const {state} = useLocation();
    return <PostUpload prevData={state}/>
};

export default PostModify;
