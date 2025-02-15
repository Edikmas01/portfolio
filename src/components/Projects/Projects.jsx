import "./Projects.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Projects = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch("/projects/projects.json")
      .then((response) => response.json())
      .then((data) => setProject(data))
      .catch((error) => console.error("Ошибка загрузки JSON:", error));
  }, []);

  const textAnimation = {
    hidden: {
      // x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      // x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2},
    }),
  };
  const imageAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { duration: custom * 0.5 },
    }),
  };

  return (
    <motion.section className="projects">
      <h1>Project</h1>
      {project.map((project) => (
        <motion.div
          key={project.id}
          className="project"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="projects__photo" viewport={{ amount: 0.5 }}>
            {project.image.map((img, index) => (
              <motion.img
                key={index}
                src={img.src}
                alt={img.alt}
                variants={imageAnimation}
                custom={index + 1}
              />
            ))}
          </motion.div>

          <motion.div className="project__description">
            <motion.h2 custom={1} variants={textAnimation}>
              {project.name}
            </motion.h2>
            <motion.p custom={2} variants={textAnimation}>
              {project.description}
            </motion.p>
            <motion.h2 custom={3} variants={textAnimation}>
              technologies
            </motion.h2>
            <motion.p custom={4} variants={textAnimation}>
              {project.technologies}
            </motion.p>
            <motion.p custom={5} variants={textAnimation}>
              {project.techDescription}
            </motion.p>
            <motion.a
              custom={6}
              variants={textAnimation}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </motion.a>
            <motion.a
              custom={6}
              variants={textAnimation}
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
            </motion.a>
          </motion.div>
        </motion.div>
      ))}
    </motion.section>
  );
};
