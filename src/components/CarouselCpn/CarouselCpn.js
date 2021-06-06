import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";
import "./Carousel.css";

function CarouselCpn(props) {
  const history = useHistory();
  const items = [
    {
      id: 1,
      altText: "Slide 1",
      caption: "Slide 1",
      src: "https://c.wallhere.com/photos/8d/de/light_art_beautiful_vintage_photography_nikon_shoes_flickr-882261.jpg!d",
    },
    {
      id: 2,
      altText: "Slide 2",
      caption: "Slide 2",
      src: "https://bloganchoi.com/wp-content/uploads/2019/01/air-jordan-4-retro-bg-motorsport.jpg",
    },
    {
      id: 3,
      altText: "Slide 3",
      caption: "Slide 3",
      src: "https://fandy.vn/wp-content/uploads/2019/11/giay_balenciaga_triples_trainer_mint_green_02.jpg",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <div className="wrapCorasel">
          <img className="imageCarosel" src={item.src} alt="loading" />
          <div className="button1">
            <h1>Khám phá ngay</h1>
            <div>
              <button
                onClick={() => {
                  history.push("/products");
                }}
                className="bt1"
              >
                Sản phẩm
              </button>
              <button
                onClick={() => {
                  history.push("/intro");
                }}
                className="bt2"
              >
                Giới thiệu
              </button>
            </div>
          </div>
          <div className="bao"></div>
        </div>
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`.custom-tag {
              max-width: 100%;
              height: 80vh;
              background: black;
            }`}
      </style>
      <Carousel
        fade
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={5000}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText=" "
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText=" "
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}

export default CarouselCpn;
