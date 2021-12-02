import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./components/style";

function InfinityScroll() {
  const BASEURL = process.env.REACT_APP_BASE_URL;
  const [accessToken, setAccessToken] = useState(""); // Data type: string, 엑세스 토큰
  const [size, setSize] = useState(1); // Data type: inteager, 몇 개씩 받아올건지
  const [page, setPage] = useState(1); // Data type: inteager, 몇 번째 페이지인지지
  let scrollHeight = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight
  );
  let scrollTop = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollTop
  );
  let clientHeight = document.documentElement.clientHeight;

  const Check = () => {
    console.log("안녕");
    console.log(scrollHeight);
    console.log(scrollTop);
    console.log(clientHeight);
    axios
      .get(`${BASEURL}/taxi-pot?size=${size}&page=${page}`, {
        Authorization: accessToken,
        size: size,
        page: page,
      })
      .then((res) => {
        console.log(res); // object
        setAccessToken(accessToken);
        setSize(size);
        setPage(page);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (scrollTop + clientHeight === scrollHeight) {
    this.setState({
      setPage: this.state.page,
      page: this.state.page + 1,
    });
  }

  useEffect(() => {
  }, [page]);
  Check();
  return (
    <S.infdiv>
      <S.infinitydiv page={page}>안녕하세요</S.infinitydiv>
    </S.infdiv>
  );
}

export default InfinityScroll;
