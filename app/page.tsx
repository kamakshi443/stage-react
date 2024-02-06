"use client";

import React, { useState, useEffect } from "react";
import Carousel from "./components/Carousel";
import Row from "./components/Row";

const Home = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [rootUrl, setRootUrl] = useState("");
  const [rootUrlHorizontal, setRootUrlHorizontal] = useState("");
  const [rootUrlVertical, setRootUrlVertical] = useState("");

  useEffect(() => {
    fetch("https://dev-api.stage.in/v23/assignment/carousel-data")
      .then((response) => response.json())
      .then((data) => {
        setCarouselData(data?.data?.carousel);
        setRootUrl(data?.data?.rootUrl);
      });
  }, []);

  useEffect(() => {
    fetch("https://dev-api.stage.in/v23/assignment/row-data")
      .then((response) => response.json())
      .then((data) => {
        setRowData(data?.data?.rowData);
        setRootUrlHorizontal(data?.data?.rootUrlHorizontal);
        setRootUrlVertical(data?.data?.rootUrlVertical);
      });
  }, []);

  return (
    <div>
      <Carousel carouselData={carouselData} rootUrl={rootUrl} />
      <h1 style={{ marginLeft: "10px", marginTop: "10px" }}>
        Top 20 in Haryana shows
      </h1>
      <Row
        rowData={rowData}
        rootUrlHorizontal={rootUrlHorizontal}
        rootUrlVertical={rootUrlVertical}
      />
      <h1 style={{ marginLeft: "10px", marginTop: "10px" }}>Top VIP shows</h1>
      <Row
        rowData={rowData}
        rootUrlHorizontal={rootUrlHorizontal}
        rootUrlVertical={rootUrlVertical}
      />
    </div>
  );
};

export default Home;
