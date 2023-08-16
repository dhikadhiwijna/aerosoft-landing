"use client";

import { Carousel } from "react-responsive-carousel";
import { dataProject, dataComment } from "@/data/project.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import React from "react";

export default function ResponsiveCarousel() {
  return (
    <div className="w-full">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        dynamicHeight={false}
        swipeable={false}
        emulateTouch={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button onClick={onClickHandler}>
              <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                size="2xl"
                className="absolute right-[50px] top-[82%] text-white-be md:right-[300px]"
                style={{
                  zIndex: 2,
                  transform: "translateY(-50%)",
                }}
              />
            </button>
          )
        }
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button onClick={onClickHandler}>
              <FontAwesomeIcon
                icon={faArrowAltCircleLeft}
                size="2xl"
                className="absolute right-[100px]  top-[82%] text-white-be md:right-[360px]"
                style={{
                  zIndex: 2,
                  transform: "translateY(-50%)",
                }}
              />
            </button>
          )
        }
      >
        {dataComment.map((item, index) => (
          <div key={index} className="m-auto max-w-4xl">
            <div>
              <h3 className="text-4xl text-white-be md:text-6xl">
                {item.comment_description}
              </h3>
            </div>
            <div className="my-8 ml-6 flex items-center">
              <div className="w-16">
                <Image
                  src={item.comment_image}
                  alt={item.comment_name}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <div className="ml-4 flex flex-col items-start">
                <h3 className="text-lg">{item.comment_name}</h3>
                <h3 className="text-md font-extralight">
                  {item.comment_position}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
