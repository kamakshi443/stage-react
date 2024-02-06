import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./Row.css";
const Row = ({ rowData, rootUrlHorizontal, rootUrlVertical }) => {
  const [imageRatio, setImageRatio] = useState(1);
  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 1200px)").matches) {
        setImageRatio(1);
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        setImageRatio(2);
      }
    };

    handleResize();

    const resizeListener = () => {
      handleResize();
    };

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [imageRatio]);

  console.log("image ration", imageRatio);

  return (
    <div className="row">
      {" "}
      <Slider {...settings}>
        {rowData.map((item) => (
          <div key={item._id}>
            {imageRatio === 1 && (
              <img
                src={`${rootUrlHorizontal}/${item.horizontal}`}
                alt={`Image ${item._id}`}
                style={{ margin: "10px" }}
              />
            )}
            {imageRatio === 2 && (
              <img
                src={`${rootUrlVertical}/${item.vertical}`}
                alt={`Image ${item._id}`}
                style={{ margin: "10px" }}
              />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Row;
