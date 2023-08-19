"use client";

import { ParallaxBanner } from "react-scroll-parallax";
import bgImage from "@/public/image/aerosooft.webp";
import { StaticImageData } from "next/image";

const Banner = ({
  title,
  image,
  description,
}: {
  title: string;
  image: StaticImageData;
  description?: string;
}) => {
  return (
    <div>
      <ParallaxBanner
        layers={[
          {
            image: image.src,
            speed: -100,
          },
        ]}
        // className="min-h-screen"
        className="min-h-screen"
        suppressHydrationWarning={true}
      >
        <div className=" absolute h-full w-full bg-black-be opacity-75">
          <div className="absolute inset-0 m-auto flex w-1/2 flex-col items-center justify-center text-center">
            <div>
              <h1 className="text-8xl font-bold uppercase text-white">
                {title}
              </h1>
              <p className="mt-5 text-lg font-bold uppercase text-white">
                {description}
              </p>
            </div>
          </div>
        </div>
      </ParallaxBanner>
    </div>
  );
};

export default Banner;
