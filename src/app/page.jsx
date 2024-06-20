"use client";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

export default function Home() {
  const router = useRouter();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth");
    }
  }, []);
  return (
    <img
      src="/assets/almight.jpg"
      alt="almight"
      className="w-full aspect-video"
    />
  );
}
