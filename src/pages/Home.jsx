import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <> 
            코드를 추가해주세요
            <h1>Main Page</h1>
            <Link to="/menu">메뉴 페이지로 고고</Link>
        </>
    );
};

export default Home;

