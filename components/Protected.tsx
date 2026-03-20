"use client";

import { useEffect } from "react";

export default function Protected({ children }: any) {
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      window.location.href = "/login";
    }
  }, []);

  return children;
}