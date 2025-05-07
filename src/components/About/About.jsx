import "./About.css";
import { Navigation } from "../Navigation/Navigation";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { IconRan } from "../IconRan/IconRan";

export const About = () => {
  const { t } = useTranslation();



  const imgAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };
    
  const descriptionAnimation = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.5},
    },
  };
  const titltAnimation = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.3},
    },
  };

  return (
    <motion.section
      id="about"
      className="about-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
    >
      <div className="about">
        <motion.div className="about__left" variants={imgAnimation}>
          <img
            src="/img/WIN_20230801_11_38_25_Pro.jpg"
            alt="Eduard"
            className="img__about"
          />
        </motion.div>

        <div className="about__right">
          <motion.h1 className="about__title" variants={titltAnimation}>
            <i>{t("about.title")}</i>
          </motion.h1>
          <motion.p
            className="about__description"
            variants={descriptionAnimation}
          >
            {t("about.description_one")}
          </motion.p>
          <motion.p
            className="about__description"
            variants={descriptionAnimation}
          >
            {t("about.description_two")}
          </motion.p>

          {/* <motion.ul className="about__list" variants={listAnimation}>
            <li className="about__item">
              <img src="/icon/icons8-js.gif" alt="JavaScript" />
            </li>
            <li className="about__item">
              <img src="/icon/icons8-react-80.png" alt="React" />
            </li>
            <li className="about__item">
              
            </li>
            <li className="about__item">
              <img src="/icon/icons8-css-64.png" alt="CSS" />
            </li>
          </motion.ul> */}
          <IconRan/>
        </div>
      </div>
      <Navigation
        links={[{ title: t("about.nav_title"), href: "#projects" }]}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
    </motion.section>
  );
};
