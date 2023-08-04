import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Card({ proyect, currentLanguaje }: { proyect: any, currentLanguaje: string }) {
    return (

        <div className="custom-card sm:w-full md:w-5/12 lg:w-5/12 xl:w-5/12 2xl:w-5/12 p-6 bg-glass border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-wrap justify-center items-center">
            <div className="sm:w-full md:w-full lg:full xl:full proyect-img-container">
                <LazyLoadImage src={proyect.img} alt="Calendar" className='proyect-img' />
            </div>
            <div className='flex flex-col sm:p-0 md:p-0 lg:p-4 xl:p-8 sm:w-full md:w-full lg:w-full xl:w-full'>
                <a href="#">
                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{proyect.name}</h3>
                </a>
                {currentLanguaje == "ES" ? <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{proyect.descriptionES}</p>
                    : <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{proyect.descriptionEN}</p>
                }
                <a href={`${proyect.url}`} target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-whiteb bg-transparent border-none focus:ring-4 focus:outline-none">
                    Demo
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>

        </div>

    )
}
