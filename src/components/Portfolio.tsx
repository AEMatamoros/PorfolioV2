import React from "react";
import { Card } from "./index";
import AgendaIMG from "../assets/img/portfolio/agenda.jpg";
import PhoenixStoreIMG from "../assets/img/portfolio/phoenixstore.jpg";
import QrIMG from "../assets/img/portfolio/qr.jpg";
import LecoIMG from "../assets/img/portfolio/leco.jpg";
import WeatherImg from "../assets/img/portfolio/weather.jpg";
import ExpenceFrontIMG from "../assets/img/portfolio/expencefront.jpg";
import ExpenceBackIMG from "../assets/img/portfolio/expenceback.jpg";
import CalendarIMG from "../assets/img/portfolio/calendar.jpg";
import CalendarBIMG from "../assets/img/portfolio/calendarb.jpg";
import PortalImg from "../assets/img/portfolio/portal.jpg";
import FUTVIMG from "../assets/img/portfolio/futv.jpg";
import NoImg from "../assets/img/portfolio/noimg.jpg";
const proyects = [
  {
    hoverColor: "text-gray-500",
    name: "Portal de Transparencia Honduras",
    descriptionES:
      "Es una plataforma tecnológica gratuita, creada para facilitar a las personas el ejercicio del derecho de acceso a la información. Desarrollado en React, Django, ElasticSearch.",
    descriptionEN:
      "It is a free technological platform, created to make it easier for people to exercise the right of access to information. Developed in React, Django, ElasticSearch.",
    img: PortalImg,
    icon: "fa-light fa-e",
    url: "https://portalunico.iaip.gob.hn/#/homeLanding",
  },
  {
    hoverColor: "text-gray-500",
    name: "FUTV - CMS",
    descriptionES:
      "Plataforma de entretenimiento.Desarrollado en Angular, NodeJS, Express, SQL.",
    descriptionEN:
      "Entertainment platform. Developed in Angular, NodeJS, Express, SQL.",
    img: FUTVIMG,
    icon: "fa-light fa-e",
    url: "https://www.futvcr.com/",
  },
  {
    hoverColor: "text-gray-500",
    name: "Phoenix Store",
    descriptionES:
      "Ecommerce, creado con la finalidad de venta de productos varios.(La API se encuentra abajo actualmente)",
    descriptionEN:
      "Ecommerce, created for the purpose of selling various products. (The API is currently below)",
    img: PhoenixStoreIMG,
    url: "https://e-phoenixstoreunah.web.app/landing",
  },
  {
    hoverColor: "text-gray-500",
    name: "Our Expences - Client",
    descriptionES:
      "Aplicacion de manejo de despensa. Desarrollado en React, TypeScript.",
    descriptionEN:
      "Pantry management application. Developed in React, TypeScript.",
    img: ExpenceFrontIMG,
    icon: "fa-light fa-e",
    url: "https://github.com/AEMatamoros/our-expence",
  },
  {
    hoverColor: "text-gray-500",
    name: "Our Expences - API",
    descriptionES:
      "Aplicacion de manejo de despensa. Desarrollado en NESTJS, MONGO, TypeScript.",
    descriptionEN:
      "Pantry management application. Developed in NESTJS, MONGO, TypeScript.",
    img: ExpenceBackIMG,
    icon: "fa-light fa-e",
    url: "https://github.com/AEMatamoros/our-expence",
  },
  {
    hoverColor: "text-gray-500",
    name: "Calendar - Client",
    descriptionES: "Calendario Virtual.Desarrollado en React.",
    descriptionEN: "Virtual Calendar. Developed in React.",
    img: CalendarIMG,
    icon: "fa-light fa-e",
    url: "https://github.com/AEMatamoros/Calendar-Frontend",
  },
  {
    hoverColor: "text-gray-500",
    name: "Calendar - API",
    descriptionES: "Calendario Virtual.Desarrollado en NODEJS, Express.",
    descriptionEN: "Virtual Calendar. Developed in NODEJS, Express.",
    img: CalendarBIMG,
    icon: "fa-light fa-e",
    url: "https://github.com/AEMatamoros/Calendar-API",
  },
  {
    hoverColor: "text-green-500",
    name: "API Agenda",
    descriptionES:
      "Agenda virtual.Desarrollada con NodeJS, Express y el motor de plantillas Handlebars.",
    descriptionEN:
      "Virtual agenda.Developed with NodeJS, Express and the Handlebars template engine.",
    img: AgendaIMG,
    url: "https://github.com/AEMatamoros/Agenda-API",
  },
  {
    hoverColor: "text-gray-500",
    name: "QR Code Generator",
    descriptionES:
      "API para codificar una cadena como una imagen base 64 con un codigo QR, asi como encriptar y desencriptar la data dentro del mismo.Desarrollado en NODEJS, Express.",
    descriptionEN:
      "API to encode a string as a base 64 image with a QR code, as well as encrypt and decrypt the data within it. Developed on NODEJS, Express.",
    img: QrIMG,
    icon: "fa-light fa-e",
    url: "https://qrg-enerator-alpha.vercel.app/",
  },
  {
    hoverColor: "text-gray-500",
    name: "Pa'Ya",
    descriptionES:
      "Pagina de publicidad y venta de productos gratuita con manejo de perfiles de usuario.Desarrollado con Python, Django.",
    descriptionEN:
      "Free advertising and product sales page with user profile management. Developed with Python, Django.",
    img: NoImg,
    icon: "fa-light fa-e",
    url: "https://github.com/AEMatamoros/PA-YA",
  },
  {
    hoverColor: "text-gray-500",
    name: "LECO(Learn to code)",
    descriptionES:
      "Aplicacion para aprender a programar de forma visual, y mostrando el codigo generado de salida como codigo de Python.Desarrollado en Go, Vue, DGraph.",
    descriptionEN:
      "Application to learn to program visually, and showing the generated output code as Python code. Developed in Go, Vue, DGraph.",
    img: LecoIMG,
    icon: "fa-light fa-e",
    url: "https://github.com/AEMatamoros/PA-YA",
  },
  {
    hoverColor: "text-gray-500",
    name: "Consume Weather API",
    descriptionES:
      "Aplicacion que consume un API externa que brinda el clima respecto a la ubicacion actual o una ciudad.Desarrollado en REACT.",
    descriptionEN:
      "Application that consumes an external API that provides the weather regarding the current location or a city. Developed in REACT.",
    img: WeatherImg,
    icon: "fa-light fa-e",
    url: "https://github.com/AEMatamoros/PA-YA",
  },
];

export default function Portfolio({
  title,
  currentLanguaje,
  currentTheme,
  reference,
}: {
  title: string;
  currentLanguaje: string;
  currentTheme: any;
  reference: any;
}) {
  return (
    <section
      className="main__work  w-full flex flex-col justify-center items-center p-4 sm:p-4 md:p-4 lg:p-16 xl:p-16 section-hidden"
      id="portfolio"
      ref={reference}
    >
      <div className="container">
        <h2 className="font-bold mb-4 text-pink-500 text-center">{title}</h2>
        <div className="proyects-container flex flex-wrap justify-between items-center w-full ">
          {proyects.map((proyect, index) => (
            <Card
              proyect={proyect}
              key={index}
              currentLanguaje={currentLanguaje}
              currentTheme={currentTheme}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
