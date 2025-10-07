"use client";
import { cn } from "@/utils/cn";
import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: Props) {
  return (
    <input
      className={cn(
        "w-full rounded-md border border-[--color-border] bg-[--color-card] px-4 py-2",
        "placeholder:text-[--color-muted] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring]",
        className
      )}
      {...props}
    />
  );
}
