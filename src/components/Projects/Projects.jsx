import "./Projects.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { EffectCards } from "swiper/modules";
import "swiper/css/effect-cards";

// import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";


export const Projects = () => {
  const [project, setProject] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetch("/projects/projects.json")
      .then((response) => response.json())
      .then((data) => setProject(data))
      .catch((error) => console.error("Ошибка загрузки JSON:", error));
  }, []);

  const name = t(`projects.${project.id}.name`);
  const description = t(`projects.${project.id}.description`);
  const techDescription = t(`projects.${project.id}.techDescription`);
  console.log(name, description, techDescription, "jg ");
  
  const textAnimation = {
    hidden: {
      // x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      // x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  // const imageAnimation = {
  //   hidden: {
  //     y: 100,
  //     opacity: 0,
  //   },
  //   visible: (custom) => ({
  //     y: 0,
  //     opacity: 1,
  //     transition: { duration: custom * 0.5 },
  //   }),
  // };

  return (
    <motion.section className="projects" id="projects">
      <h1>{t("projects.title")}</h1>
      {project.map((project) => (
        <motion.div
          key={project.id}
          className="project"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="projects__photo">
            {/* <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              navigation={true}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="projectSwiper"
            >
              {project.image.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img.src} alt={img.alt} />
                </SwiperSlide>
              ))}
            </Swiper> */}
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="projectSwiper"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false, // <--- отключить тени
              }}
            >
              {project.image.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img.src} alt={img.alt} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <motion.div className="project__description">
            <motion.h2 custom={1} variants={textAnimation}>
              {t(`projects.${project.id}.name`)}
            </motion.h2>
            <motion.p custom={2} variants={textAnimation}>
              {t(`projects.${project.id}.description`)}
            </motion.p>
            <motion.h2 custom={3} variants={textAnimation}>
              {t("projects.title_technologies")}
            </motion.h2>
            <motion.p custom={4} variants={textAnimation}>
              {project.technologies}
            </motion.p>
            <motion.p custom={5} variants={textAnimation}>
              {t(`projects.${project.id}.techDescription`)}
            </motion.p>
            <motion.a
              custom={6}
              variants={textAnimation}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("projects.view_gitHub")}
            </motion.a>
            <motion.a
              custom={6}
              variants={textAnimation}
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("projects.view_demo")}
            </motion.a>
          </motion.div>
        </motion.div>
      ))}
    </motion.section>
  );
};
