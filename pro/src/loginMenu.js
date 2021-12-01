import React, { useState } from "react";
import axios from "axios";
import * as S from "./components/style";

function LoginMenu() {
  const [inputId, setInputId] = useState(""); // 동적 사용을 위해 useState 사용
  const [inputPw, setInputPw] = useState("");
  const BASEURL = process.env.REACT_APP_BASE_URL;

  console.log(BASEURL);

  const clickId = (e) => {
    // id input 클릭했을때 실행
    setInputId(e.target.value); // input 값 변경
  };

  const clickPw = (e) => {
    setInputPw(e.target.value); // input 값 변경
  };

  const clickLogin = () => {
    console.log(inputId); // input 값 확인용
    console.log(inputPw); // input 값 확인용
    axios
      .post(`${BASEURL}/login/admin`, {
        id: inputId,
        password: inputPw,
      })
      .then((res) => {
        alert("로그인 성공!");
        console.log(res); 
      })
      .catch((err) => {
        console.log(err);
        alert("Id와 Password를 확인해주세요!");
      });
  };

  return (
    <S.login>
      <S.title>로그인</S.title>
      <S.idInput
        type="id"
        name="id"
        placeholder="Id 입력"
        value={inputId}
        onChange={clickId}
      />
      <S.pwdInput
        type="password"
        name="password"
        placeholder="Password 입력"
        value={inputPw}
        onChange={clickPw}
      />
      <S.btn type="submit" onClick={clickLogin}>
        로그인
      </S.btn>
    </S.login>
  );
}

export default LoginMenu;
