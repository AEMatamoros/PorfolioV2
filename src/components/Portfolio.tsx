import React from 'react'
import { SelectLanguajeHook } from '../hooks'
import AgendaIMG from '../assets/img/portfolio/agenda.png'
import PhoenixStoreIMG from '../assets/img/portfolio/phoenixstore.png'
import QrIMG from '../assets/img/portfolio/qr.png'
import LecoIMG from '../assets/img/portfolio/leco.png'
import WeatherImg from '../assets/img/portfolio/weather.png'
import ExpenceFrontIMG from '../assets/img/portfolio/expencefront.png'
import ExpenceBackIMG from '../assets/img/portfolio/expenceback.png'
import CalendarIMG from '../assets/img/portfolio/calendar.png'
import CalendarBIMG from '../assets/img/portfolio/calendarb.png'
import PortalImg from '../assets/img/portfolio/portal.png'
import FUTVIMG from '../assets/img/portfolio/futv.png'

import NoImg from '../assets/img/portfolio/noimg.jpg'
export default function Portfolio() {
  let { currentLanguaje: texts } = SelectLanguajeHook()
  let tecs = [
    {
      hoverColor: 'text-gray-500',
      name: 'Portal de Transparencia Honduras',
      description:
        'Es una plataforma tecnológica gratuita, creada para facilitar a las personas el ejercicio del derecho de acceso a la información. Desarrollado en React, Django, ElasticSearch.',
      img: PortalImg,
      icon: 'fa-light fa-e',
      url: 'https://portalunico.iaip.gob.hn/#/homeLanding',
    },
    {
      hoverColor: 'text-gray-500',
      name: 'FUTV - CMS',
      description:
        'Plataforma de entretenimiento.Desarrollado en Angular, NodeJS, Express, SQL.',
      img: FUTVIMG,
      icon: 'fa-light fa-e',
      url: 'https://www.futvcr.com/',
    },
    {
      hoverColor: 'text-gray-500',
      name: 'Our Expences - Client',
      description:
        'Aplicacion de manejo de despensa. Desarrollado en React, TypeScript.',
      img: ExpenceFrontIMG,
      icon: 'fa-light fa-e',
      url: 'https://github.com/AEMatamoros/our-expence',
    },
    {
      hoverColor: 'text-gray-500',
      name: 'Our Expences - API',
      description:
        'Aplicacion de manejo de despensa. Desarrollado en NESTJS, MONGO, TypeScript.',
      img: ExpenceBackIMG,
      icon: 'fa-light fa-e',
      url: 'https://github.com/AEMatamoros/our-expence',
    },
    {
      hoverColor: 'text-gray-500',
      name: 'Calendar - Client',
      description: 'Calendario Virtual.Desarrollado en React.',
      img: CalendarIMG,
      icon: 'fa-light fa-e',
      url: 'https://github.com/AEMatamoros/Calendar-Frontend',
    },
    {
      hoverColor: 'text-gray-500',
      name: 'Calendar - API',
      description: 'Calendario Virtual.Desarrollado en NODEJS, Express.',
      img: CalendarBIMG,
      icon: 'fa-light fa-e',
      url: 'https://github.com/AEMatamoros/Calendar-API',
    },
    {
      hoverColor: 'text-green-500',
      name: 'API Agenda',
      description:
        'Agenda virtual.Desarrollada con NodeJS, Express y el motor de plantillas Handlebars.',
      img: AgendaIMG,
      url: 'https://github.com/AEMatamoros/Agenda-API',
    },
    {
      hoverColor: 'text-gray-500',
      name: 'Phoenix Store',
      description:
        'Ecommerce, creado con la finalidad de venta de productos varios.(La API se encuentra abajo actualmente)',
      img: PhoenixStoreIMG,
      url: 'https://e-phoenixstoreunah.web.app/landing',
    },
    {
      hoverColor: 'text-gray-500',
      name: 'QR Code Generator',
      description:
        'API para codificar una cadena como una imagen base 64 con un codigo QR, asi como encriptar y desencriptar la data dentro del mismo.Desarrollado en NODEJS, Express.',
      img: QrIMG,
      icon: 'fa-light fa-e',
      url: 'https://qrg-enerator-alpha.vercel.app/',
    },
    {
      hoverColor: 'text-gray-500',
      name: "Pa'Ya",
      description:
        'Pagina de publicidad y venta de productos gratuita con manejo de perfiles de usuario.Desarrollado con Python, Django.',
      img: NoImg,
      icon: 'fa-light fa-e',
      url: 'https://github.com/AEMatamoros/PA-YA',
    },
    {
      hoverColor: 'text-gray-500',
      name: 'LECO(Learn to code)',
      description:
        'Aplicacion para aprender a programar de forma visual, y mostrando el codigo generado de salida como codigo de Python.Desarrollado en Go, Vue, DGraph.',
      img: LecoIMG,
      icon: 'fa-light fa-e',
      url: 'https://github.com/AEMatamoros/PA-YA',
    },
    {
      hoverColor: 'text-gray-500',
      name: 'Consume Weather API',
      description:
        'Aplicacion que consume un API externa que brinda el clima respecto a la ubicacion actual o una ciudad.Desarrollado en REACT.',
      img: WeatherImg,
      icon: 'fa-light fa-e',
      url: 'https://github.com/AEMatamoros/PA-YA',
    },
  ]
  return (
    <div className=" p-12 ">
      <h1 className="text-6xl text-secondary dark:text-detail mt-8 mb-4 text-center">
        {texts.labels.proyectsTitle}
      </h1>
      <div className="card-container w-full flex justify-center flex-wrap p-3 ">
        {tecs.map((tec, index) => (
          <div
            className="p-2 xl:w-3/12 lg:w-4/12 md:w-5/12 sm:w-full "
            key={index}
          >
            <a href={tec.url} target="_blank">
              <div className="card transform  flex justify-center cursor-pointer w-full">
                <div className="shadow-2xl  bg-white dark:bg-black text-black dark:text-white w-full overflow-hidden">
                  <img
                    className="transform hover:scale-110 transition-all duration-300 w-full"
                    src={tec.img}
                    alt=""
                  />

                  <div className="p-6">
                    <h5 className="text-fontc  dark:text-white text-xl font-medium mb-2">
                      {tec.name}
                    </h5>
                    <p className="text-fontc dark:text-white text-base mb-4">
                      {tec.description}
                    </p>
                    <a href={tec.url} target="_blank">
                      <button
                        type="button"
                        className=" inline-block px-6 py-2.5 bg-black text-white dark:bg-white dark:text-black dark:hover:text-white hover:text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-fontc dark:hover:bg-fontc hover:shadow-lg focus:bg-fontc focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                      >
                        Demo/Github
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      {/* <div className="w-full flex justify-around mt-10">
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px">
            <li>
              <a
                href="#"
                className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-black dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <i className="fa-solid fa-arrow-left"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-black dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-black dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-black dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-black dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-black dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div> */}
    </div>
  )
}
