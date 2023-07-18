import React from 'react'

export default function Hero() {
    return (
        <section className="main__hero flex flex-col justify-center  w-full">
            <div className='main__hero__text flex flex-col justify-center items-center'>
                <h1>Alexis Matamoros</h1>
                <h2>Desarrollador de Software</h2>
                <p>Paginas escalables, con hermosos disenos, y con una gran experiencia de usuario </p>
                <ul className='flex justify-center items-center gap-4 p-8'>
                    <li><i className="fa-3x fa-brands fa-github-alt hover:text-main cursor-pointer transform hover:scale-110"></i></li>
                    <li><i className="fa-3x fa-brands fa-linkedin hover:text-main cursor-pointer transform hover:scale-110"></i></li>
                </ul>
            </div>

        </section>
    )
}
