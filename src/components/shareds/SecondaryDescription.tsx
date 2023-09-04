import React from "react";

export default function SecondaryDescription({ msg }: { msg: string }) {
  return <p className="sm:text-sm md:text-2xl">{msg}</p>;
}
