import React from "react";
import { skills } from "../data/SkillsData";
import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";

//  SkillCard Component
const SkillCard = ({ img, name }) => (
  <div className="flex flex-col items-center">
    <img
      src={img}
      alt={name}
      className="w-32 h-20 p-3 rounded-tl-lg rounded-br-lg shadow-xl shadow-[#C5C2E1] transition-transform duration-300 hover:scale-110"
    />
    <h1 className="mt-2 text-[#35396C]">{name}</h1>
  </div>
);

//  SkillSection Component
const SkillSection = ({ title, skills, transitionDelay }) => (
  <motion.div 
      className="flex flex-col items-center bg-white/80 shadow-[#C5C2E1] shadow-xl rounded-md p-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: transitionDelay, duration: 0.7 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
  >
    <h1 className="text-xl mb-4 text-[#5C99B6]">
      <span>&lt;</span>
      {title}
      <span> /&gt;</span>
    </h1>
    <div className="grid grid-cols-2 gap-4">
      {skills.map((skill) => (
        <SkillCard key={skill.name} img={skill.img} name={skill.name} />
      ))}
    </div>
  </motion.div>
);

function Skills() {
  return (
    <section id="skills" className="px-16 font-mono max-md:mt-20">

      <AnimatedTitle className="md:text-4xl text-3xl mb-14 mt-24 text-[#C5C2E1] font-bold pt-2">
        Skills
      </AnimatedTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <SkillSection title="Front-End Development" skills={skills.frontEnd} transitionDelay={0.2} />
        <SkillSection title="Back-End Development" skills={skills.backEnd} transitionDelay={0.4}  />
        <SkillSection title="Tools & Practices" skills={skills.tools} transitionDelay={0.6}  />
      </div>
    </section>
  );
}

export default Skills;
