import { Suspense, useEffect, useState } from 'react'
//Custom Hooks
import { SelectLanguajeHook, SelectThemeHook } from '../hooks'

//Components
import { Header, Hero, About, Techs, Card } from '../components'
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

export default function App() {
  useEffect(() => {
    let pos = document.documentElement
    const handleMouseMove = (event: any) => {
      pos.style.setProperty("--x", event.clientX + "px")
      pos.style.setProperty("--y", event.clientY + "px")
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  //Theme
  let { wrapperRef, handleTheme, currentTheme } = SelectThemeHook()

  //Languaje
  let { currentLanguaje: texts, handleLanguaje } = SelectLanguajeHook()

  // Init in DarkMode
  useEffect(() => {
    handleTheme()
  }, [])

  const proyects = [{
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
    url: 'https://portalunico.iaip.gob.hn/#/homeLanding',
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
    <div ref={wrapperRef} className='main'>
      <main className='bg-light dark:bg-dark text-dark dark:text-white flex flex-wrap'>
        <Header handleTheme={handleTheme} handleLanguaje={handleLanguaje} currentTheme={currentTheme} texts={texts} />
        <Hero />

        <About msg={texts.labels.mainMsg} />

        <Techs />

        <section className="main__work w-full p-16 flex flex-col justify-center items-center">
          <h2 className='mb-8'>Proyects</h2>
          <div className="proyects-container flex flex-wrap gap-8 justify-center items-center">
            {proyects.map(proyect => <Card proyect={proyect} />)}
          </div>

        </section>

        {/* <section className="main__contact">
          Contact
        </section>

        <footer>
          Footer
        </footer> */}
        <span className='lamp'></span>
      </main>


    </div>
    //   <Suspense fallback={<Loader />}>
    //   <Outlet />
    // </Suspense>
  )
}
