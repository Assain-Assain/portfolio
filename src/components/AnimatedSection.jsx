// AnimatedSection.js
import { motion } from "framer-motion";

export default function AnimatedSection({ children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}          // start: invisible + pushed down
      whileInView={{ opacity: 1, y: 0 }}       // when visible: fade in + slide up
      transition={{ duration: 0.9 }}           // smooth animation
      viewport={{ once: true, amount: 0.2 }}   // trigger once, when 20% visible
    >
      {children}
    </motion.section>
  );
}