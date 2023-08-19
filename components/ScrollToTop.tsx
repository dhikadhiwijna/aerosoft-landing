"use client";

import {
  faArrowAltCircleUp,
  faArrowCircleUp,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Variants,
  motion,
  useAnimationControls,
  useScroll,
} from "framer-motion";
import { useEffect } from "react";

const ScrollToTopContainerVariants: Variants = {
  hide: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

export default function ScrollToTopButton() {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  const scrollToTop = () => {
    window.scrollTo({ top: 20, behavior: "smooth" });
  };

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.25) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    });
  });

  return (
    <motion.button
      className="fixed bottom-0 right-0 z-50 animate-bounce p-10"
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon
        icon={faArrowCircleUp}
        className="rounded-full bg-white-be text-orange-be"
        size="2xl"
      />
    </motion.button>
  );
}
