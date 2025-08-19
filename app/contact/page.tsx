import React from "react";
import ContactForm from "@/components/ContactForm";
import { Motion } from "@/components/Motion";

const contactPage = () => {
  return (
    <main className="scroll-mt-16 max-w-[50rem] mt-10">
      <Motion
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col items-center"
      >
        <ContactForm />
      </Motion>
    </main>
  );
};

export default contactPage;
