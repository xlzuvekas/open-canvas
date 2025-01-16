"use client";

import { Signup } from "@/components/auth/signup/Signup";
import { Suspense } from "react";

export default function Page() {
  return (
    <main className="h-screen">
      <Suspense fallback={<div>Loading Lion Canvas...</div>}>
        <Signup />
      </Suspense>
    </main>
  );
}
