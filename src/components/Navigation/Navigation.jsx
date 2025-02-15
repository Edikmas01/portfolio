import { motion } from 'framer-motion';
import "./Navigation.css";

export const Navigation = ({ title, initial, animate, transition }) => {
  return (
    <motion.nav
      className="navigation"
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="about">
            <i>{title}</i>
          </a>
        </li>
      </ul>
    </motion.nav>
  );
};
