"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function ActivitySection() {
  const images = [
    "/img/img1.webp",
    "/img/img2.webp",
    "/img/img3.webp",
    "/img/img4.webp",
    "/img/img5.webp",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Tự động đổi ảnh
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // đổi mỗi 4 giây
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="bg-blue-100 py-20 px-8 text-center">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          style={{
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            maxWidth: "100%",
          }}
          className="mx-auto mb-8"
          width={500}
          height={100}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </section>
  );
}
