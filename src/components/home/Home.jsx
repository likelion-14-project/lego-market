import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Home 페이지 입니다.</div>
      <button onClick={() => navigate('/')}>뒤로가기</button>
    </>
  )
}

export default Home