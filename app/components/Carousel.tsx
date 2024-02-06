import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./Carousel.css";

const Carousel = ({ carouselData, rootUrl }) => {
  const [imageRatio, setImageRatio] = useState(1);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 1200px)").matches) {
        setImageRatio(1);
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        setImageRatio(2);
      } else {
        setImageRatio(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Slider {...settings}>
      {carouselData.map((item) => (
        <div key={item._id}>
          {imageRatio === 1 && (
            <img src={`${rootUrl}/${item.ratio1}`} alt={`Image ${item._id}`} />
          )}
          {imageRatio === 2 && (
            <img src={`${rootUrl}/${item.ratio2}`} alt={`Image ${item._id}`} />
          )}
          {imageRatio === 3 && (
            <img src={`${rootUrl}/${item.ratio3}`} alt={`Image ${item._id}`} />
          )}
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
