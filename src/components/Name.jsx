import React,{ useState } from 'react'

const Name = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  
  const handleName = event => {
    setName(event.target.value);
  }
  const handleNickname = event => {
    setNickname(event.target.value);
  }

  return (
    <div className="name">
      <h>Name</h>
      <hr></hr>
      <input name="myName" placeholder="이름을 입력해주세요" onChange={handleName}/>
      <input name="nickName" placeholder="닉네임을 입력해주세요" onChange={handleNickname}/>
      <p>이름: {name}</p>
      <p>닉네임: {nickname}</p>
    </div>
  )
}

export default Name
