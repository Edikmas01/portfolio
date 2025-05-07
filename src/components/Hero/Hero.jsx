import { Language } from "../Language/Language";
import { Navigation } from "../Navigation/Navigation";
import "./Hero.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <Language />
      <div className="hero">
        <motion.h1 className="hero__title">
          <span>{t("hero.hello")}</span> {t("hero.i")} <br /> {t("hero.name")}
        </motion.h1>
        <motion.p
          className="hero__description"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t("hero.subtitle1")} <br />
          {t("hero.subtitle2")}
        </motion.p>

        <Navigation
          links={[{ title: t("hero.nav_title"), href: "#about" }]}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </div>
    </>
  );
};
