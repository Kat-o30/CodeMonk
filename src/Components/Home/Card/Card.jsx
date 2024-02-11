import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ onClick }) => {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <h3>Click me</h3>
    </motion.div>
  );
};

export default Card;
