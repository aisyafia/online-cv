"use client";

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Image from "next/image";
import closeIcon from "@/public/close.svg";

const DetailsCard = (props: any) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.closeDialog}
      className="relative z-10"
    >
      <div className="fixed inset-32 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg relative space-y-4 border bg-mudgreen p-12">
          <button
            onClick={props.closeDialog}
            className="absolute top-2 right-2 z-10 w-fit p-2 bg-transparent text-stone-400 rounded-full"
          >
            <Image
              src={closeIcon}
              alt="close"
              width={20}
              height={20}
              className="object-contain"
            />
          </button>
          <DialogTitle className="font-bold"></DialogTitle>
          <Description className="text-base font-light bg-mudgreen">
            {props.description}
          </Description>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export { DetailsCard };
