import "./About.css";
import { Navigation } from "../Navigation/Navigation";
import { motion } from "framer-motion";

export const About = () => {
  const listAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 2,
      x: 0,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

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
    <motion.div
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
            <i>About me</i>
          </motion.h1>
          <motion.p className="about__description" variants={descriptionAnimation}>
            Привет, меня зовут Eduard, мне 24 года, я начинающий
            frontend-разработчик из Украины. Сейчас живу в Германии. Моё
            увлечение технологиями началось с изучения HTML и CSS, и с тех пор я
            не могу остановиться. В настоящее время я работаю с React и
            JavaScript для создания красивых и функциональных веб-приложений.
          </motion.p>
          <motion.p className="about__description" variants={descriptionAnimation}>
            Я увлекаюсь дизайном и UI/UX, стремлюсь улучшать пользовательский
            опыт. В свободное время мне нравится изучать новые технологии,
            разрабатывать проекты. Моя цель — создавать не только работающие, но
            и красивые, удобные веб-приложения, которые помогают людям. Я открыт
            для новых вызовов и учусь новому.
          </motion.p>

          <motion.ul className="about__list" variants={listAnimation}>
            <li className="about__item">
              <img src="/icon/icons8-js.gif" alt="JavaScript" />
            </li>
            <li className="about__item">
              <img src="/icon/icons8-react-80.png" alt="React" />
            </li>
            <li className="about__item">
              <img src="/icon/icons8-html-5-48.png" alt="HTML" />
            </li>
            <li className="about__item">
              <img src="/icon/icons8-css-64.png" alt="CSS" />
            </li>
          </motion.ul>
        </div>
      </div>
      <Navigation
        title="Prodject"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
    </motion.div>
  );
};
