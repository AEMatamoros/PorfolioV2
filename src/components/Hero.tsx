import React from "react";

export default function Hero({
  title,
  subtitle,
  msg,
}: {
  title: string;
  subtitle: string;
  msg: string;
}) {
  return (
    <section className="main__hero flex flex-col justify-center w-full ">
      <div className="main__hero__text flex flex-col justify-center items-center container m-auto text-center ">
        <h1 className="text-main">{title}</h1>
        <h2>{subtitle}</h2>
        <p className="text-center mt-4">{msg} </p>
        <ul className="flex justify-center items-center gap-4 p-8">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/AEMatamoros"
              className="flex flex-col"
            >
              <i className="fa-3x fa-brands fa-github-alt hover:text-main cursor-pointer"></i>
              <span className="text-transparent">Github</span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/alexis-eduardo-matamoros-mayorquin-3a87411b5"
              className="flex flex-col"
            >
              <i className="fa-3x fa-brands fa-linkedin hover:text-main cursor-pointer"></i>
              <span className="text-transparent">LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
