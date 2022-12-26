import React from 'react'
import { SelectLanguajeHook } from '../../hooks'

export default function Footer() {
  let { currentLanguaje: texts } = SelectLanguajeHook()

  return (
    <footer className="main-footer bg-black dark:bg-white text-white dark:text-black p-12">
      <span className="text-left">Alexis Eduardo Matamoros Mayorquin</span>
      <br />
      <span className=" float-right">{texts.labels.footerText}</span>
    </footer>
  )
}
