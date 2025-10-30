import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col sm:flex-row items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl-px-24 text-center w-full overflow-hidden text-gray-700 dark:text-white"
    >
      <div className="flex flex-col gap-4 items-center flex-1 font-bold">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-bold xl:leading-[95px] max-w-5xl"
        >
          Maritime{" "}
          <span className="bg-gradient-to-r from-[#5044e5] to-[#4d8cea] bg-clip-text text-transparent font-bold">
            Recruitment
          </span>{" "}
          Experts
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className="text-sm sm:text-lg font-medium text-gray-900 dark:text-white/75 max-w-4/5 sm:max-w=lg pb-3"
        >
          Connecting you with top maritime talent local and overseas.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative"
      >
        <img
          src={assets.hero_img}
          alt=""
          className="w-full max-w-sm rounded-md cursor-pointer hover:scale-105 transition-all duration-300"
        />
        <img
          src={assets.bgImage1}
          alt=""
          className="dark:hidden absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
