import "./Profile.css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import inhalion from "../../assets/inhalion.png";
import { AllImageCount } from "../../apis/gallery";

// 프로필 컨테이너 (왼쪽 + 오른쪽 배치)
const ProfileContainer = styled.div`
  display: flex;
  padding: 20px;
  margin: 10px;
  max-width: 1080px;
  justify-content: center;
  align-items: center;
  text-align: left;
`;

// 메인 프로필 사진 스타일링 (왼쪽 배치)
const ProfileImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  margin-right: 20px;
`;

// 메인 프로필 인포메이션 (오른쪽 배치)
const ProfileInfoContainer = styled.div`
  float: right;
`;

// 메인 프로필 인포메이션 컴포넌트
const ProfileInfo = (props) => {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.message}</p>
      <strong>게시물 {props.count}개</strong>
    </>
  );
};

const Profile = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const articleCount = async () => {
      const res = await AllImageCount();
      setCount(res.data);
    };

    articleCount();
  }, []);

  return (
    <>
      <ProfileContainer className="container">
        <ProfileImg src={inhalion} />
        <ProfileInfoContainer>
          <ProfileInfo
            name="likelion_12th_frontend"
            message="멋쟁이 사자처럼 12기 여러분 화이팅!! 어른사자로 폭풍성장중..🦁"
            count={count}
          />
        </ProfileInfoContainer>
      </ProfileContainer>
    </>
  );
};

export default Profile;
