import { motion } from 'framer-motion';

export default function Page2() {
  return (
    <div className="page" style={{ backgroundColor: 'lightgreen' }}>
      <h1>Page 2</h1>
      <motion.div
        className="box"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 2, 1] }}
        transition={{ duration: 2 }}
      >
        Scroll back to switch to Page 1
      </motion.div>
    </div>
  );
}