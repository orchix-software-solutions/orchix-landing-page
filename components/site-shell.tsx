"use client";

import { useState } from "react";
import { BookingDialogProvider } from "@/lib/booking-context";
import UrgencyBar from "@/components/urgency-bar";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BookingDialog from "@/components/booking-dialog";
import ScrollTopButton from "@/components/scroll-top-button";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [barDismissed, setBarDismissed] = useState(false);

  return (
    <BookingDialogProvider>
      {!barDismissed && <UrgencyBar onDismiss={() => setBarDismissed(true)} />}
      <Navbar showAnnouncementBar={!barDismissed} />
      <div className="flex flex-col min-h-screen">
        {children}
        <Footer />
      </div>
      <ScrollTopButton />
      <BookingDialog />
    </BookingDialogProvider>
  );
}
