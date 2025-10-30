import Title from "./Title";
import { teamData } from "../assets/assets";
import { motion } from "motion/react";

const Teams = () => {
  return (
    <motion.div
      initial="initial"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white"
    >
      <Title
        title="Meet The Team"
        description="A passionate team of Maritime recruitment dedicated to your success"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full max-w-5xl ">
        {teamData.map((data, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            key={index}
            className="p-4 flex  flex-col items-center justify-center sm:flex-row gap-6 cursor-pointer hover:scale-105 transition-all duration-300 bg-gray-50 rounded-2xl shadow-md dark:bg-primary/10 "
          >
            <img src={data.image} className="rounded-full h-12" />
            <div className="flex-1">
              <h2>{data.name}</h2>
              <p className="text-[12px] text-gray-600">{data.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Teams;
