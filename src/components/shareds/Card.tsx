import React from 'react'
export default function Card({ proyect }: { proyect: any }) {
    return (

        <div className="w-5/12 p-6 bg-glass border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex">
            <img src={proyect.img} alt="Calendar" className='proyect-img' />
            <div className='flex flex-col p-8'>
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{proyect.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{proyect.description}</p>
                <a href={`${proyect.url}`} target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-main rounded-lg hover:bg-main focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Demo
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>

        </div>

    )
}
