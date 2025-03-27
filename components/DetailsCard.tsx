"use client";

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { Fragment } from "react";
import { IoIosLink } from "react-icons/io";

const DetailsCard = (props: any) => {
  return (
    <Transition show={props.open} as={Fragment}>
      <Dialog onClose={props.closeDialog} className="relative z-10">
        <div className="fixed inset-y-0 left-[7%] -top-[7%] flex w-screen items-center justify-center p-2">
          <Transition
            as={Fragment}
            show={props.open}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            <DialogPanel className="max-w-xl min-h-40 relative space-y-4 border p-8 rounded-2xl">
              <div className="absolute -z-10 left-0 top-0 h-[20rem] w-[40rem] rounded-full blur-[10rem] bg-[#676394]"></div>
              <div className="absolute -z-10 left-2/3 top-10 h-[20rem] w-[28rem] rounded-full blur-[10rem] bg-[#676394]"></div>

              <div className="relative flex justify-between">
                <DialogTitle className="font-bold text-slate-200 text-lg -top-6 absolute mb-6">
                  {props.title}
                </DialogTitle>
                <button
                  onClick={props.closeDialog}
                  className="absolute -top-10 -right-6 z-10 w-fit p-1 bg-transparent text-slate-200 hover:text-slate-400"
                >
                  <IoMdClose
                    size="20px"
                    className="transition-colors duration-200"
                  />
                </button>
              </div>

              <div className="grid grid-cols-2 items-end gap-2">
                <Image
                  src={props.logo}
                  alt={props.title}
                  width={0}
                  height={0}
                  sizes="70vw"
                  className="w-auto h-auto mt-2"
                />
                {props.web && (
                  <div className="flex flex-row">
                    <a
                      href={props.web}
                      target="_blank"
                      className="flex flex-row items-center rounded-full text-xs gap-1"
                    >
                      Visit the website <IoIosLink />
                    </a>
                  </div>
                )}
              </div>
              <Description className="text-sm font-light">
                {props.description}
              </Description>

              <Description>
                {props.intro && (
                  <span className="font-semibold">{props.intro}</span>
                )}

                {props.details &&
                  props.details.map((detail: string) => {
                    return <li className="font-light">{detail}</li>;
                  })}
              </Description>
            </DialogPanel>
          </Transition>
        </div>
      </Dialog>
    </Transition>
  );
};

export { DetailsCard };
