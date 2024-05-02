'use client'

import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function Home() {

  const Editor = dynamic(() => import("@/components/editor"), { ssr: false });

  return (
    <main>
      <Editor/>
    </main>
  );
}
