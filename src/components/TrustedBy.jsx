import React from "react";
import { company_logos } from "../assets/assets";
import { motion, stagger } from "motion/react";

const TrustedBy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="dark:text-white/80 flex flex-col items-center pt-14 sm:pt-18 px-4 sm:px-12 lg:px-24 xl:px-40 gap-6 text-gray-700"
    >
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="font-semibold text-2xl sm:text-3xl pb-2"
      >
        Our Major Clients and Affiliation
      </motion.h3>
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-8 text-center "
      >
        {company_logos.map((logo, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-center hover:scale-105 transition-all duration-300"
          >
            <motion.img
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              src={logo.logo}
              alt=""
              key={index}
              className="max-h-8 sm:max-h-14 dark:drop-shadow-2xl rounded-full"
            />
            <p className="text-sm">{logo.name}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TrustedBy;
