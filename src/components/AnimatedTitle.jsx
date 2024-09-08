// src/components/AnimatedTitle.js
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedTitle = ({ children, className }) => {
  return (
    <motion.h2
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: 0.1, duration: 0.7 }}
      variants={{
        hidden: { opacity: 0, x: -200 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      {children}
    </motion.h2>
  );
};

export default AnimatedTitle;
