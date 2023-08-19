"use client";

import { ParallaxProvider } from "react-scroll-parallax";

interface ParallaxProps {
  children: React.ReactNode;
}

const ProviderParallax = ({ children }: ParallaxProps) => {
  return <ParallaxProvider>{children}</ParallaxProvider>;
};

export default ProviderParallax;
