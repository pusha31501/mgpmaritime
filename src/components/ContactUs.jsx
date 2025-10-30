import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const ContactUs = () => {
  const [result, setResult] = React.useState("submit");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "18af253e-db51-4783-990e-7bb2e8fd0ce9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission!");
        setTimeout(() => {
          setResult("submit");
        }, 1000);
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-20 sm:py-30  text-gray-800 dark:text-white"
    >
      <Title
        title="Reach out to us"
        description="From strategy to execution, we craft Maritime solutions that move your future forward."
      />
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
        onSubmit={onSubmit}
      >
        <div>
          <p htmlFor="name" className="mb-2 text-sm font-medium">
            Your name
          </p>
          <div className="flex max-w-full p-1 gap-2 border border-gray-300 rounded-md">
            <img src={assets.person_icon} alt="" className="pl-2" />
            <input
              required
              name="name"
              type="text"
              id="name"
              placeholder="Enter your name"
              className="p-3 outline-none w-full"
            />
          </div>
        </div>

        <div>
          <p htmlFor="email" className="mb-2 text-sm font-medium">
            Your name
          </p>
          <div className="flex max-w-full p-1 gap-2 border border-gray-300 rounded-md">
            <img src={assets.email_icon} alt="" className="pl-2" />
            <input
              required
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-3 outline-none w-full"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <p htmlFor="message" className="mb-2 text-sm font-medium">
            Message
          </p>
          <textarea
            placeholder="Enter your Message"
            className="w-full border border-gray-300 rounded-md p-3 text-sm outline-none"
            rows={8}
            required
            name="message"
          ></textarea>
        </div>
        <button className="flex gap-2 justify-center bg-primary text-white max-w-full rounded-sm sm:w-max py-2 px-8 font-medium sm:rounded-full cursor-pointer hover:scale-103 transition-all duration-300">
          {result}
          <img src={assets.arrow_icon} alt="" className="w-4" />
        </button>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;
