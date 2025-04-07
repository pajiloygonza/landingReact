import React from "react";
import "../index.css";
import { motion } from "framer-motion";


const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <footer
        className="footer"
        style={{ textAlign: "center", padding: "1rem", background: "#f1f1f1" }}
      >
        <p>
          &copy; {new Date().getFullYear()} My App. All rights reserved. by Vlad
        </p>
      </footer>
    </motion.div>
  );
};

export default Footer;
