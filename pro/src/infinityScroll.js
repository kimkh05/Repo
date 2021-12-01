import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./components/style";

function InfinityScroll() {
  const BASEURL = process.env.REACT_APP_BASE_URL;
  const [token, setToken] = useState(""); // Data type: string
  const [divSize, setSize] = useState(1); // Data type: inteager
  const [divPage, setPage] = useState(1); // Data type: inteager

  useEffect(() => {
    axios
      .get(`${BASEURL}/taxi-pot?size=${divSize}&page=${divPage}`, {
        Authorization: token,
        size: divSize,
        page: divPage,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <S.list>
      <S.bigdiv>
        <S.infinitydiv>무한으로 늘어나는 div들</S.infinitydiv>
      </S.bigdiv>
    </S.list>
  );
}

export default InfinityScroll;
