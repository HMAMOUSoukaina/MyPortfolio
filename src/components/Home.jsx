import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import photo from "../images/photo.jpeg";
import NavBar from "./NavBar";
import { motion, useScroll } from "framer-motion";

function Home() {
  //for TypeWriting
  const [text] = useTypewriter({
    words: ["Software Engineer", "Full Stack Developer", "Design Enthusiast"],
    loop: true,
    delaySpeed: 1500,
  });

  //pour la barre de progression
  const { scrollYProgress } = useScroll();

  return (
    <section
      id="home"
      className="px-4 md:px-16 flex flex-col md:flex-row items-center gap-8 h-screen w-screen font-mono max-md:pt-28"
    >
      {/* La barre de progression */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          height: "3px", //vous pouvez le modifier
          backgroundColor: "white",
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          transformOrigin: "0 0",
        }}
      ></motion.div>
      <NavBar />

      <div className="flex flex-col md:w-2/3 text-center md:text-left">
        <motion.p
          className="text-[#5C99B6] text-xl mt-1 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          Hi, I'm Soukaina HMAMOU
        </motion.p>

        <h1
          className="text-4xl md:text-5xl text-[#C5C2E1] font-bold pt-4 pb-5"
          style={{ maxWidth: "600px" }}
        >
          {text}
          <Cursor />
        </h1>

        <div className="w-full md:w-[84%] mt-3">
          <p className="text-white leading-relaxed max-md:px-10">
            I’m passionate about solving problems and tackling new challenges. I
            enjoy working with teams to create effective solutions and make a
            real difference. Always eager to learn and improve, I bring
            dedication and enthusiasm to every project.
          </p>
        </div>
      </div>

      <div className="md:w-1/3 flex justify-center md:justify-end pr-0 md:pr-14 pt-8 max-md:pt-0">
        <img
          src={photo}
          alt="Soukaina HMAMOU"
          className="rounded-full object-cover shadow-lg max-w-[270px] md:max-w-full"
        />
      </div>
    </section>
  );
}

export default Home;
