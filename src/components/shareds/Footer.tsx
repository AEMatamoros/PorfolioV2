import React from 'react'
import { SelectLanguajeHook } from '../../hooks'

export default function Footer() {
  let { currentLanguaje: texts } = SelectLanguajeHook()

  return (
    <footer className="main-footer bg-black dark:bg-white text-white dark:text-black p-12 relative">
      <div className="flex flex-wrap justify-center items-center">
        <a
          className="my-2 cursor-pointer hover:text-green-500 transition-all duration-500 text-xl xl:w-3/12 lg:w-4/12 md:w-5/12 sm:w-full text-center"
          target="_blank"
          href="mailto:alexismatamoros1996777@gmail.com"
        >
          <i className="fa-solid fa-envelope-circle-check"></i>{' '}
          Alexismatamoros1996777@gmail.com
        </a>
        <a
          className="my-2 cursor-pointer hover:text-yellow-500 transition-all duration-500 text-xl xl:w-3/12 lg:w-4/12 md:w-5/12 sm:w-full text-center"
          target="_blank"
          href="mailto:a.matamoros@goit.global"
        >
          <i className="fa-solid fa-envelope-circle-check"></i>{' '}
          A.matamoros@goit.global
        </a>
        <a
          className="my-2 cursor-pointer hover:text-blue-500 transition-all duration-500 text-xl xl:w-3/12 lg:w-4/12 md:w-5/12 sm:w-full text-center"
          target="_blank"
          href="https://www.linkedin.com/in/alexis-eduardo-matamoros-mayorquin-3a87411b5/"
        >
          <i className="fa-brands fa-linkedin"></i> Alexis Matamoros
        </a>
        <a
          className="my-2 cursor-pointer hover:text-purple-500 transition-all duration-500 text-xl xl:w-3/12 lg:w-4/12 md:w-5/12 sm:w-full text-center"
          target="_blank"
          href="https://github.com/AEMatamoros"
        >
          <i className="fa-brands fa-github"></i> AEMatamoros
        </a>
      </div>

      <p className="absolute bottom-2 right-2">{texts.labels.footerText}</p>
    </footer>
  )
}
