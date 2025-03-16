"use client";

import { useDialog } from "./DialogProvider";

const ChildrenWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isDialogOpen } = useDialog();

  return (
    <div className="relative w-full h-full">
      {isDialogOpen && (
        <div className="absolute inset-0 bg-black/10 backdrop-blur-md rounded-2xl z-10 transition-all duration-300" />
      )}
      <div className="relative container w-[53rem] h-[30rem] p-2 overflow-y-auto z-0">
        {children}
      </div>
    </div>
  );
};

export default ChildrenWrapper;
