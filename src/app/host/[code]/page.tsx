import type { Metadata } from "next";
import { Suspense } from "react";
import HostRoomClient from "./HostRoomClient";

export const metadata: Metadata = { title: "Phòng thi đấu · Chiến Sĩ Giao Liên" };

export default function HostRoomPage() {
  return (
    <Suspense fallback={<main className="desk h-dvh" />}>
      <HostRoomClient />
    </Suspense>
  );
}
