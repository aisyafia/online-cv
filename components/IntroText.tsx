"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { TextGenerateEffect } from "./ui/GenerateText";

export function IntroText() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-6xl"
      >
        I'm Fia, a Frontend Developer
      </motion.h1>
      <TextGenerateEffect
        className="mb-2 text-center text-xl md:text-lg font-semibold"
        words="Curious, creative, adaptive — I strive to craft user-centric, scalable, and impactful digital solutions"
        duration={0.8}
      />
    </LampContainer>
  );
}
