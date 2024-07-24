// use client
import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ReloadView({ locale }: any) {
  const router = useRouter();
  const { query } = router;
  useEffect(() => {
    if (!query[0]?.includes(locale)) {
      window.location.href = "/" + locale;
    }
  }, []);
  return <div></div>;
}
