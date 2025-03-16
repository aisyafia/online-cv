"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const DialogContext = createContext<{
  isDialogOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
} | null>(null);

export function DialogProvider({ children }: { children: ReactNode }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <DialogContext.Provider
      value={{
        isDialogOpen,
        openDialog: () => setIsDialogOpen(true),
        closeDialog: () => setIsDialogOpen(false),
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}

export function useDialog() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
}
