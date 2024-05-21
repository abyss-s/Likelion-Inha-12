import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users?page=1&per_page=9`)
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const navigate = useNavigate();

  const handleClick = (userId) => {
    navigate(`/user/${userId}`);
  };

  return (
    <>
      <h1>Main Page</h1>
      <Wrapper>
        <>
          {users.map((user) => (
            <Card
              key={user.id}
              img={user.avatar}
              name={`${user.first_name} ${user.last_name}`}
              id={user.id}
              onClick={() => handleClick(user.id)}
            />
          ))}
          ;
        </>
      </Wrapper>
      <Link to="/menu">메뉴 페이지로 고고</Link>
    </>
  );
};

export default Home;
