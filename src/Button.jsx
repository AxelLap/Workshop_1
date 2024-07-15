"use client";
import { clsx } from "clsx";
import { cva } from "class-variance-authority";
import Link from "next/link";

const buttonVariant = cva(
  "inline-flex items-center justify-center rounded-md px-3 py-1.5 ring-indigo-500 ring-offset-2 focus:outline-none focus:ring text-gray-950 h-8 text-sm font-semibold",
  {
    variants: {
      type: {
        headerBtn: "bg-transparent hover:bg-gray-200 ",
        cardBtn: "bg-gray-200 hover:bg-gray-300 ml-3",
      },
    },
  }
);

export const Button = ({ type, url, children }) => {
  return (
    <Link
      href={!url ? "/" : `${url}`}
      className={buttonVariant({ type: type })}
    >
      {children}
    </Link>
  );
};
