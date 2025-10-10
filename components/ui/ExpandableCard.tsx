"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/lib/hooks/use-outside-click";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { CardBackground } from "./CardBackground";

export function ExpandableCard(props: any) {
  const [active, setActive] = useState<(typeof props)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <CardBackground className="rounded-[22px] p-4 sm:p-10">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-[20%] right-2 lg:hidden items-center justify-center bg-transparent text-slate-400 hover:text-slate-200 rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <IoMdClose
                  size="20px"
                  className="transition-colors duration-200"
                />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[600px] min-h-[50vh] md:h-fit md:max-h-[95%] flex flex-col sm:rounded-3xl overflow-hidden"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <Image
                    width={0}
                    height={0}
                    src={active.src}
                    alt={active.title}
                    sizes="70vw"
                    className="w-full h-auto p-4 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  />
                </motion.div>

                <div className="flex justify-between items-center p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                    >
                      {active.description}
                    </motion.p>
                    {active.location && (
                      <motion.p layoutId={`location-${active.location}-${id}`}>
                        {active.location} - {active.duration}
                      </motion.p>
                    )}
                  </div>
                  {active.ctaLink && (
                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.ctaLink}
                      target="_blank"
                      className="px-4 py-2 text-xs rounded-full font-medium text-center bg-stone-950  hover:text-violet-400"
                    >
                      {active.ctaText}
                    </motion.a>
                  )}
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-xs md:text-sm h-36 md:h-55 pb-4 flex flex-col items-start gap-2 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:0.5px] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {active.content}

                    {active.subcontent &&
                      active.subcontent.map((detail: string) => {
                        return (
                          <li className="font-light" key={detail}>
                            {detail}
                          </li>
                        );
                      })}
                  </motion.div>
                </div>
              </motion.div>
            </CardBackground>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl gap-4">
        <motion.div
          layoutId={`card-${props.title}-${id}`}
          key={`props-${props.title}-${id}`}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setActive(props)}
          className="p-4 border border-violet-200 w-full flex flex-col md:flex-row items-center hover:shadow-md hover:shadow-neutral-400 hover:text-violet-300 rounded-xl cursor-pointer"
        >
          <div className="flex w-full flex-col justify-center items-center gap-2">
            <motion.h3
              layoutId={`title-${props.title}-${id}`}
              className="font-medium text-center"
            >
              {props.title}
            </motion.h3>
            {props.subtitle ? (
              <motion.h5
                layoutId={`description-${props.description}-${id}`}
                className="text-center md:text-sm"
              >
                {props.duration}
              </motion.h5>
            ) : (
              <></>
            )}
          </div>
        </motion.div>
      </ul>
    </>
  );
}
