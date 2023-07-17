import { Suspense, useEffect, useState } from 'react'
//Custom Hooks
import { SelectLanguajeHook, SelectThemeHook } from '../hooks'

//Components

import { Outlet } from 'react-router-dom'
import { Header } from '../components'
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

  return (
    <main ref={wrapperRef} className='main'>

      <Header handleTheme={handleTheme} handleLanguaje={handleLanguaje} currentTheme={currentTheme} texts={texts} />
      <section className="main__hero flex flex-col justify-center items-center  bg-light dark:bg-dark text-dark dark:text-white">
        <h1>Alexis Matamoros</h1>
        <h2>Desarrollador de Software</h2>
        <p>Paginas escalables, con hermosos disenos, y con una gran experiencia de usuario </p>
      </section>

      <section className="main__about">
        About
      </section>

      <section className="main__work">
        Work
      </section>

      <section className="main__contact">
        Contact
      </section>

      <footer>
        Footer
      </footer>
      <span className='lamp'></span>
    </main>
    //   <Suspense fallback={<Loader />}>
    //   <Outlet />
    // </Suspense>
  )
}
