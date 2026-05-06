"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface BookingContextValue {
  openDialog: () => void;
  closeDialog: () => void;
  isOpen: boolean;
}

const BookingContext = createContext<BookingContextValue>({
  openDialog: () => {},
  closeDialog: () => {},
  isOpen: false,
});

export function BookingDialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        openDialog: () => setIsOpen(true),
        closeDialog: () => setIsOpen(false),
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
