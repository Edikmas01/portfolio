import { motion } from 'framer-motion';
import "./Navigation.css";

export const Navigation = ({ links = [], initial, animate, transition }) => {
  return (
    <motion.nav
      className="navigation"
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <ul className="nav__list">
        {links.map(({ title, href }, index) => (
          <li className="nav__item" key={index}>
            <a href={href} className="nav__link">
              <i>{title}</i>
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};
