import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Footer = ({ theme }) => {
  const date = new Date().getFullYear();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-2 px-4 sm:px-12 lg:px-24 xl:px-40 pt-10 pb-8 text-gray-800 dark:text-white dark:bg-primary/10 bg-slate-50"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            alt="company logo"
            className="w-32 sm:w-40 pb-4"
          />
          <p className="font-light max-w-md text-sm ">
            333A Regina Building Escolta St. Binondo Metro Manila
          </p>
          <p className="font-light max-w-md text-sm ">
            Email:mgpmaritimeco@gmail.com
          </p>
          <p className="font-light max-w-md text-sm ">
            Mobile: 0977-874 0911 | 0995-1597492
          </p>
          <div className="pt-4 text-sm">
            <ul className="flex gap-6">
              <li className=" dark:hover:underline">
                <a href="#hero">Home</a>
              </li>
              <li className=" dark:hover:underline">
                <a href="#services">Services</a>
              </li>
              <li className=" dark:hover:underline">
                <a href="#about-us">About Us</a>
              </li>
              <li className=" dark:hover:underline">
                <a href="#contact-us">Contact Us</a>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-xl"
        >
          <h2>Our Partners</h2>
          <ul className="text-sm grid grid-cols-2 p-4 list-disc">
            <li>JNCE Medical Clinic</li>
            <li>Philippine Red Cross</li>
            <li>Altitude Maritime</li>
            <li>Training and Assessment Center</li>
            <li>Exact Training Center</li>
            <li>Our Lady of Fatima Univeristy - valenzuela</li>
            <li>Philippine Merchant Marine School</li>
            <li>Celtech College</li>
            <li>John B. Lacson School</li>
            <li>Westbay College</li>
          </ul>
        </motion.div>
      </div>

      <hr className="bg-gray-200 w-full my-4" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center justify-between w-full gap-4"
      >
        <p className="text-sm font-light">
          Copyright {date} © designed by: pusha31501 - All Right Reserved.
        </p>
        <div className="flex gap-4">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.instagram_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
