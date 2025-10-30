import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion, stagger } from "motion/react";

const Services = () => {
  const servicesData = [
    {
      title: "Recruitment",
      Description:
        "Connecting skilled maritime professionals with top employers",
      icon: assets.ads_icon,
    },
    {
      title: "Consultation",
      Description: "Providing expert advice on maritime staffing needs ",
      icon: assets.marketing_icon,
    },
    {
      title: "Training",
      Description: "We help you enhance and experience maritime life",
      icon: assets.content_icon,
    },
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt:4 sm:pt-10 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />
      <Title
        title="Services Offered"
        description="Expert maritime recruitment Solutions"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {servicesData.map((service, index) => (
          <ServiceCard service={service} index={index} key={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
