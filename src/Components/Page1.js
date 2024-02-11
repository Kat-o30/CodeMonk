import { motion } from 'framer-motion';

export default function Page1() {
  return (
    <div className="page" style={{ backgroundColor: 'lightblue' }}>
      <h1>Page 1</h1>
      <motion.div
        className="box"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 2, 1] }}
        transition={{ duration: 2 }}
      >
        Scroll to switch to Page 2
      </motion.div>
    </div>
  );
}