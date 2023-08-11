import React from "react";

export default function Hero({
  title,
  subtitle,
  msg,
  reference,
}: {
  title: string;
  subtitle: string;
  msg: string;
  reference: any;
}) {
  return (
    <section
      className="main__hero flex flex-col justify-center w-full "
      id="hero"
      ref={reference}
    >
      <div className="main__hero__text flex flex-col justify-center items-center container m-auto text-center ">
        <h1 className="text-main text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl first-text-animation">
          {title}
        </h1>
        <h2 className="second-text-animation">{subtitle}</h2>
        <p className="third-text-animation text-center mt-4 text-pink-300 ">
          {msg}{" "}
        </p>
      </div>
    </section>
  );
}
