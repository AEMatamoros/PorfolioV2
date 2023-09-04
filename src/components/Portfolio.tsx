import React from "react";
import { Card } from "./index";
import { PROYECTS } from "../constants/Portfolio";
import useLightbox from "../hooks/useLightbox";
import SecondaryTitle from "./shareds/SecondaryTitle";
export default function Portfolio({
  subtitle,
  currentLanguaje,
  currentTheme,
  reference,
}: {
  subtitle: string;
  currentLanguaje: string;
  currentTheme: any;
  reference: any;
}) {
  const { Lightbox, handleLightboxShow, setTemplate } = useLightbox();
  return (
    <>
      <section
        className="main__work  w-full flex flex-col justify-center items-center p-4 sm:p-4 md:p-4 lg:p-16 xl:p-16 section-hidden"
        id="portfolio"
        ref={reference}
      >
        <div className="container">
          <SecondaryTitle subtitle={subtitle} />
          <ul className="proyects-container flex flex-wrap justify-between items-center w-full ">
            {PROYECTS.map((proyect, index) => (
              <Card
                proyect={proyect}
                key={index}
                currentLanguaje={currentLanguaje}
                currentTheme={currentTheme}
                handleLightboxShow={handleLightboxShow}
                setTemplate={setTemplate}
              />
            ))}
          </ul>
        </div>
      </section>
      {Lightbox}
    </>
  );
}
