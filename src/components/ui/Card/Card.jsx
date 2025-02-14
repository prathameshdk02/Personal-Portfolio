import React from "react";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = React.forwardRef(
  (
    { className, whileHover, variants, children, transition, cardIcon },
    ref,
  ) => {
    return (
      <motion.article
        ref={ref}
        whileHover={whileHover}
        variants={variants}
        initial="initial"
        whileInView={{ ...variants?.animate, transition }}
        viewport={{ once: true, amount: 0.9 }}
        className={`card relative flex flex-col space-y-2 ${className ? className : ""}`}
      >
        {children}

        {cardIcon && (
          <div className="absolute size-16 border-2 bg-cardbg border-glassyedge right-4 -top-4 flex justify-center items-center rounded-xl !mt-0">
            <FontAwesomeIcon
              className="size-6"
              icon={cardIcon}
            ></FontAwesomeIcon>
          </div>
        )}
      </motion.article>
    );
  },
);

const MotionCard = motion.create(Card);

export default Card;
export { MotionCard };
