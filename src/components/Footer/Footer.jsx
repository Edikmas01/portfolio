import "./Footer.css";
import {motion} from "framer-motion";
import { useTranslation } from "react-i18next";


export const Footer = () => {
  const { t } = useTranslation();

 const footerVariants = {
   hidden: { opacity: 0, },
   visible: {
     opacity: 1,
     transition: { duration: 0.5},
   },
 };

 const itemAnimation = {
   hidden: { opacity: 0, x: 100 },
   visible: custom => ({
     opacity: 1, x: 0,
     transition: { duration: custom * 0.5 }
   }),
 };

  const textAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  }
  return (
    <footer className="footer">
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="footer-content"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1 className="footer__title" variants={textAnimation}>
          {t("footer.title")}
        </motion.h1>

        <div className="contact-info">
          <motion.div
            className="contact-item"
            custom={1}
            variants={itemAnimation}
          >
            <div className="icon-title">
              <img src="/public/icon/icons8-email.gif" alt="email" />
              <h3>E-mail</h3>
            </div>
            <p>edikmaslovskiy@gmail.com</p>
          </motion.div>

          <motion.div
            className="contact-item"
            custom={2}
            variants={itemAnimation}
          >
            <div className="icon-title">
              <img src="/public/icon/icons8-git-48.png" alt="GitHub" />
              <h3>GitHub</h3>
            </div>
            <a
              href="https://github.com/Edikmas01/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.git")}
              
            </a>
          </motion.div>

          <motion.div
            custom={3}
            className="contact-item"
            variants={itemAnimation}
          >
            <div className="icon-title">
              <img src="/public/icon/icons8-phone.gif" alt="phone" />
              <h3>{t("footer.phone")}</h3>
            </div>
            <p>1234567890</p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};
