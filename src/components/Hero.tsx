import React from 'react'

export default function Hero({ title, subtitle, msg }: { title: string, subtitle: string, msg: string }) {
    return (
        <section className="main__hero flex flex-col justify-center w-full">
            <div className='main__hero__text flex flex-col justify-center items-center w-5/12 m-auto'>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p className='text-center mt-4'>{msg} </p>
                <ul className='flex justify-center items-center gap-4 p-8'>
                    <li><i className="fa-3x fa-brands fa-github-alt hover:text-main cursor-pointer transform hover:scale-110"></i></li>
                    <li><i className="fa-3x fa-brands fa-linkedin hover:text-main cursor-pointer transform hover:scale-110"></i></li>
                </ul>
            </div>

        </section>
    )
}
