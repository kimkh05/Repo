import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import * as S from "./components/style";

function InfinityScroll() {
  const BASEURL = process.env.REACT_APP_BASE_URL;
  const [accessToken, setAccessToken] = useState(""); // Data type: string, 엑세스 토큰
  const [size, setSize] = useState(1); // Data type: inteager, 몇 개씩 받아올건지
  let [page, setPage] = useState(1); // Data type: inteager, 몇 번째 페이지인지지
  let [check, setCheck] = useState(false);
  let [div, setDiv] = useState([]);

  useEffect(() => {
    setCheck(false);
    axios
      .get(`${BASEURL}/taxi-pot?size=${size}&page=${page}`, {
        Authorization: `Bearer ${accessToken}`,
      })
      .then((res) => {
        console.log(res); // object
        console.log("스크롤 작동");
        //div = [...div, ...div.length];
        setDiv(div.concat(res.data.div));
        setPage(page + 1);
        setTimeout(() => console.log("after"), 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [check]);

  const scrolling = () => {
    if (
      window.scrollY + document.documentElement.clientHeight > 
      document.documentElement.scrollHeight - 10
    ) {
      setCheck(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrolling);
    return () => {
      window.removeEventListener("scroll", scrolling);
    };
  }, []);
  return (
    <>
      <S.infdiv>
        <h1>무한 스크롤 테스트</h1>
        <S.infinitydiv>hello</S.infinitydiv>
        <S.infinitydiv>hello</S.infinitydiv>
        <S.infinitydiv>hello</S.infinitydiv>
        {div.map((res) => (
          <S.infinitydiv>world</S.infinitydiv>
        ))}
      </S.infdiv>
    </>
  );
}

export default InfinityScroll;