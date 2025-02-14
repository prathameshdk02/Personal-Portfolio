import React, { useState } from "react";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { XS_BREAKPOINT } from "../../../config/layoutConfig";

const CardFlowCard = ({ element, offsetIndex, offset }) => {
  return (
    <motion.div
      className={`absolute top-1/2 left-1/2 w-full max-w-[456px] ${
        offsetIndex != 0 ? "cardflow-forblur" : "cardflow-shadow"
      }`}
      initial={{
        x: `calc(${offsetIndex}*${offset}% - 50%)`,
        y: "-50%",
        scale: 0,
      }}
      whileInView={{
        x: `calc(${offsetIndex}*${offset}% - 50%)`,
        zIndex: offsetIndex == 0 ? 10 : Math.abs(offsetIndex) == 1 ? 8 : 0,
        y: "-50%",
        scale: offsetIndex == 0 ? 1 : 0.9,
      }}
      animate={{
        x: `calc(${offsetIndex}*${offset}% - 50%)`,
        zIndex: offsetIndex == 0 ? 10 : Math.abs(offsetIndex) == 1 ? 8 : 0,
        y: "-50%",
        scale: offsetIndex == 0 ? 1 : 0.9,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      {element}
    </motion.div>
  );
};

const CardFlow = ({ cards, offset, innerWidth }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const cardFlowCardMap = cards.map((card, index) => (
    <CardFlowCard
      key={card.key}
      element={card}
      offset={(offset ?? innerWidth < XS_BREAKPOINT) ? 100 : 60}
      offsetIndex={index - currentIndex}
    ></CardFlowCard>
  ));

  return (
    <div className="flex items-center relative -mx-2">
      <button
        onClick={(event) => {
          event.stopPropagation();
          setCurrentIndex((prev) => (prev == 0 ? 0 : prev - 1));
        }}
        onDoubleClick={(event) => {
          event.stopPropagation();
        }}
        className="cardflow-button absolute top-1/2 -left-4 z-10"
      >
        <FontAwesomeIcon
          icon={faAngleLeft}
          className={`size-7 text-2xl ${
            currentIndex == 0 ? "text-secondaryhead" : ""
          } pointer-events-none`}
        ></FontAwesomeIcon>
      </button>

      <div className="flex-1 overflow-hidden">
        <div className="relative min-h-[700px] md:min-h-[600px] z-0">
          {cardFlowCardMap}
        </div>
      </div>

      <button
        onClick={(event) => {
          event.stopPropagation();
          setCurrentIndex((prev) =>
            prev == cards.length - 1 ? cards.length - 1 : prev + 1,
          );
        }}
        onDoubleClick={(event) => {
          event.stopPropagation();
        }}
        className="cardflow-button absolute top-1/2 -right-4 z-10"
      >
        <FontAwesomeIcon
          icon={faAngleRight}
          className={`size-7 text-2xl ${
            currentIndex == cards.length - 1 ? "text-secondaryhead" : ""
          } pointer-events-none`}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default CardFlow;
