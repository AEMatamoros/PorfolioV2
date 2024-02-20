import React from 'react'
import { NavLink } from 'react-router-dom';
import { routes } from './routes';
import SelectLanguajeHook from '@Hooks/SelectLanguajeHook';


export default function NotFound() {
  const {
    currentLanguaje: texts
  } = SelectLanguajeHook();
  
  return (
    <section className='main__404 bg-dark flex  justify-center items-center'>
      <div className="container text-center w-9/12">
        <h1 className='text-white text-4xl'>{texts.labels.notFoundText}</h1>
        <NavLink to={routes[0].to} replace className="font-bold text-indigo-500 animate-pulse">{texts.labels.notFoundLink}</NavLink>
      </div>
    </section>
  )
}
