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
        <div className="fixed inset-y-0 left-[7%] -top-[7%] flex w-screen items-center justify-center p-4">
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
            <DialogPanel className="max-w-lg min-h-40 relative space-y-4 border p-10 rounded-2xl">
              <div className="absolute -z-10 left-0 top-0 h-[20rem] w-[40rem] rounded-full blur-[10rem] bg-[#676394]"></div>
              <div className="absolute -z-10 left-2/3 top-10 h-[20rem] w-[28rem] rounded-full blur-[10rem] bg-[#676394]"></div>

              <div className="relative flex justify-between">
                <DialogTitle className="font-bold text-slate-200 text-lg -top-6 absolute mb-6">
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
                  sizes="50vw"
                  className="w-auto h-auto mt-4"
                />
              </div>
              <Description className="text-sm font-light">
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
