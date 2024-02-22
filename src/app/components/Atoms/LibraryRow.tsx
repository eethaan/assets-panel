"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion"; // Import motion from Framer Motion

import useHover from "@/app/hooks/useHover";
import useTwoFingerSwipe from "@/app/hooks/useTwoFingerSwipe";

interface LibraryRowProps {
  img: string;
  title: string;
  handleLibraryBack: () => void
}

const LibraryRow: React.FC<LibraryRowProps> = ({ img, title, handleLibraryBack }) => {

  const controls = useAnimation();

  const ref = useRef(null)
  const isInView = useInView(ref)

  const [hoverDetected, handleHover, handleLeave] = useHover()
  
  useTwoFingerSwipe((direction) => {
    if (hoverDetected && direction == "left") {
      handleLibraryBack()
      console.log("this swiped left")
    }
  });


  useEffect(() => {
    // Animate if element is in view
    if (isInView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: 10 });
    }
  }, [isInView, controls]);

  return (
    <>
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={{opacity: 1, x: 0}}
      transition={{ ease: "linear", stiffness: 200 }}
      className="flex place-content-between p-[8px] px-[8px] hover:bg-[#383838] rounded-md"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="flex items-center">
        <img src={img} alt="no image" />
        <div className="pl-[8px] font-Inter text-xs/[11px]">{title}</div>
      </div>
      <img src="/images/icon.24.navigate.forward.svg" alt="no gas" />
    </motion.div>
    </>
  );
};

export default LibraryRow;
