import React from "react";

export default function SecondaryTitle({ subtitle }: { subtitle: string }) {
  return <h2 className="font-bold text-indigo-500">{subtitle}</h2>;
}
