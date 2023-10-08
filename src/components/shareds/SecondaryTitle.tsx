import React from "react";

export default function SecondaryTitle({ subtitle }: { subtitle: string }) {
  return <h2 className="font-bold text-blue-500">{subtitle}</h2>;
}
