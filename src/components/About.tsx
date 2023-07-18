import React from 'react'

export default function About({ msg }: { msg: string }) {
    return (
        <section className="main__techs flex justify-center items-center dark:text-main w-6/12 p-16 text-center">
            <div className="main__about__text text-2xl p-4 flex flex-col gap-16">
                <h2 className='font-bold'>Sobre mi ...</h2>
                <p>{msg}</p>
            </div>
        </section>
    )
}
