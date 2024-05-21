import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const { userId } = useParams();
  const [users, setUsers] = useState({
    avatar: "",
    email: "",
    first_name: "",
    id: "",
    last_name: "",
  });

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${userId}`)
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <>
      <h1>User Information</h1>
      <img src={users.avatar} />
      <h3>
        User name is {users.first_name} {users.last_name}
      </h3>
      {users.email}
    </>
  );
};

export default User;
