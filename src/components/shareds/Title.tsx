import React from "react";

export default function Title({ title }: { title: string }) {
  return (
    <h1 className="text-main text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl first-text-animation">
      {title}
    </h1>
  );
}
