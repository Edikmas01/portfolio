import { Navigation } from "../Navigation/Navigation";
import "./Hero.css";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="hero">
      <motion.h1
        className="hero__title"
       
      >
        <span>Hello,</span> I am <br />
        Eduard!
      </motion.h1>
      <motion.p
        className="hero__description"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        I am a beginner frontend developer who wants to <br />
        develop and learn new things
      </motion.p>

      <Navigation
        title="Hire me"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
    </div>
  );
};
