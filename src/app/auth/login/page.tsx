"use client";

import { Login } from "@/components/auth/login/Login";
import { Suspense } from "react";

export default function Page() {
  return (
    <main className="h-screen">
      <Suspense fallback={<div>Loading Lion Canvas...</div>}>
        <Login />
      </Suspense>
    </main>
  );
}
