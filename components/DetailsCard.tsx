"use client";

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import closeIcon from "@/public/close.svg";
import { IoMdClose } from "react-icons/io";
import { Fragment } from "react";

const DetailsCard = (props: any) => {
  return (
    <Transition show={props.open} as={Fragment}>
      <Dialog onClose={props.closeDialog} className="relative z-10">
        <div className="fixed top-[52.75%] left-[58.25%] -translate-x-1/2 -translate-y-1/2 w-[53.15rem] h-[35rem] bg-white/10 backdrop-blur-sm rounded-2xl" />
        <div className="fixed inset-32 flex w-screen items-center justify-center p-4">
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
            <DialogPanel className="max-w-lg min-h-40 relative space-y-4 border bg-mudgreen p-10">
              <div className="relative flex justify-between">
                <DialogTitle className="font-bold text-slate-200 text-lg -top-6 absolute">
                  {props.title}
                </DialogTitle>
                <button
                  onClick={props.closeDialog}
                  className="absolute -top-6 -right-6 z-10 w-fit p-1 bg-transparent text-slate-200 hover:text-slate-400"
                >
                  <IoMdClose
                    size="20px"
                    className="transition-colors duration-200"
                  />
                </button>

                <Image
                  src={props.logo}
                  alt={props.title}
                  width={0}
                  height={0}
                  sizes="90vw"
                  className="w-auto h-auto"
                />
              </div>
              <Description className="text-sm font-light bg-mudgreen">
                {props.description}
              </Description>
            </DialogPanel>
          </Transition>
        </div>
      </Dialog>
    </Transition>
  );
};

export { DetailsCard };
