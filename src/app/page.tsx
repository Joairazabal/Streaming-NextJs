import Image from "next/image";
import type { Metadata } from "next";

import { Suspense } from "react";
import { CardPostSkeletor } from "@/app/card-post-skeletor";
import { CardPost } from "./card-post";

export const metadata: Metadata = {
  title: "Streaming HTML",
};

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<CardPostSkeletor />}>
        <CardPost />
      </Suspense>
    </main>
  );
}
