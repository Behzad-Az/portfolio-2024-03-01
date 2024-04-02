import React from "react";

import { profile } from "@/lib/data";

export default function Footer() {
  const { firstName, lastName, copyRightYear } = profile;
  return (
    <footer className="mt-20 mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 text-xs block">
        &copy; {copyRightYear} {firstName} {lastName}'s Personal Website. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website: </span>built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
