import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./components/style";

const header = () => {
  const [data, setData] = useState("");
  console.log(data);
  useEffect(() => {
    axios({
      method: "post",
      url: "http://3.36.161.36/",
    })
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <S.login>
      <S.title>로그인</S.title>
      <S.idInput type="id" name="id" placeholder="ID 입력" />
      <S.pwdInput type="password" name="password" placeholder="password 입력" />
      <S.btn>로그인</S.btn>
    </S.login>
  );
};

export default header;
