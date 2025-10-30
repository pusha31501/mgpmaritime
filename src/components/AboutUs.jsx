import React from "react";
import Title from "./Title";
import assets from "../assets/assets";

import { motion, stagger } from "motion/react";

const AboutUs = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="about-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title title="About Us" description=" " />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full max-w-5xl ">
        <img
          src={theme === "dark" ? assets.mgp_logo_dark : assets.mgp_logo}
          alt=""
          className=" w-1/2 sm:w-1/3 flex-1"
        />
        <p className="text-center text-md">
          Established in 2023 by people with more than a decade of expertise on
          shipping operation and crewing /recruitment.
          <span className="text-primary font-bold"> MGP Maritime Co. </span>
          specializes in providing experienced and abled manpower/seamen to
          shipping companies.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutUs;
