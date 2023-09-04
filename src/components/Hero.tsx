import React from "react";
import { Title, Subtitle, SectionDescription } from "../components";
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
      className="main__hero flex flex-col justify-center w-full section-hidden"
      id="hero"
      ref={reference}
    >
      <HeroContent title={title} subtitle={subtitle} msg={msg} />
    </section>
  );
}
interface iHeroContent {
  title: string;
  subtitle: string;
  msg: string;
}
function HeroContent({ title, subtitle, msg }: iHeroContent) {
  return (
    <div className="main__hero__text flex flex-col justify-center items-center container m-auto text-center ">
      <Title title={title}></Title>
      <Subtitle subtitle={subtitle}></Subtitle>
      <SectionDescription msg={msg}></SectionDescription>
    </div>
  );
}
