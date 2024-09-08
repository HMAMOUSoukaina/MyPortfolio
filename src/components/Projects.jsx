import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";

// Importer les données de projet
import projects from "../data/ProjectsData";
import AnimatedTitle from "./AnimatedTitle";

// Importer les icônes
import { FaCode } from "react-icons/fa";
import { MdOutlineAdsClick } from "react-icons/md";

function Projects() {
  // Configurations pour le slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="projects" className="px-16 font-mono max-md:mt-20">
      <AnimatedTitle className=" mb-8 md:text-4xl text-3xl text-[#C5C2E1] font-bold">
        Projects
      </AnimatedTitle>
      <motion.div
        className="w-full lg:w-[70%] m-auto rounded-slider bg-white/90 shadow-[#C5C2E1] shadow-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <Slider {...settings}>
          {projects.map((project, key) => (
            <div
              key={key}
              className={`!flex h-[600px] md:h-[430px] rounded-slider ${
                project.name === "BookShop"
                  ? "!flex-row"
                  : "!flex-col md:!flex-row"
              }`}
            >
              <div className="flex w-full md:w-1/2 rounded-slider overflow-hidden">
                <img
                  src={project.img}
                  alt={project.name}
                  style={{ maxHeight: "430px" }}
                />
              </div>

              <div className="flex flex-col p-4 w-full md:w-1/2 gap-3 md:gap-4 overflow-hidden">
                <div className="flex flex-col justify-center">
                  <p className="text-2xl text-[#5C99B6]">{project.name}</p>
                </div>
                <div className="flex flex-col mt-2">
                  <p className="text-md text-[#35396C]">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-row mt-2 space-x-2">
                  {project.stack.map((st, key) => (
                    <div
                      key={key}
                      className="flex items-center justify-center w-12 h-12 p-1 bg-white rounded-full border border-gray-300"
                    >
                      <img
                        src={st}
                        alt="stack technique"
                        className="max-w-full max-h-full"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-row gap-3">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.codeRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-[#5C99B6] text-white px-4 py-2 rounded hover:bg-[#35396C] transition-colors duration-300"
                    >
                      Source Code
                      <FaCode className="ml-3 mt-1" />
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-[#35396C] text-white px-4 py-2 rounded hover:bg-[#5C99B6] transition-colors duration-300"
                    >
                      Demo
                      <MdOutlineAdsClick className="ml-3 mt-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}

export default Projects;
