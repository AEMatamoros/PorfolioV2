import React from 'react'
import formatDate from '../utils/date'

let exp = [
    { name: "Programing Teacher", descriptionEN: "GoIT - start your career in IT · Temporal Contract", descriptionES: "GoIT - Inicia tu carrera en TI · Contrato temporal", time: "December 31, 2022 23:59:59", tecs: ["HTML", "CSS", "REACT", "NodeJS", "Figma"], current: true },
    { name: "Infatlan", descriptionEN: "Sr.Front-End Developer", descriptionES: "Desarrollador Sr.Front-End", time: "June 6, 2022 23:59:59", tecs: ["UI5", "Figma"], current: true },
    { name: "Impact Mobile Hn", descriptionEN: "Web Developer", descriptionES: "Desarrollador web", time: "April 22, 2021 23:59:59", tecs: ["REACT", "Angular", "Python", "NodeJS", "Django"], current: false },
    { name: "FreeLancer", descriptionEN: "Autonomous", descriptionES: "Autónomo", time: "March 22, 2020 23:59:59", tecs: ["Mutltiples Stacks"], current: false },

]

export default function Experience({ title, currentLanguaje }: { title: string, currentLanguaje: string }) {
    return (
        <section className='main__exp w-full p-8 duration-75 flex flex-wrap gap-8 justify-center'>
            <h2 className='font-bold w-full text-center'>{title}</h2>
            {exp.map((place, index) => <div key={index} className="border rounded-lg p-6 sm:w-full md:w-full lg:w-3/12 xl:w-3/12 w-full h-auto transform hover:scale-105 hover:shadow-lg" >
                <div className="flex flex-wrap items-center">
                    <div className="w-full pt-8 flex flex-col justify-between">
                        <h2 className="font-bold text-2xl">{place.name}</h2>
                        {currentLanguaje === "ES" ? <p className="text-xl leading-relaxed ">{place.descriptionES}</p> : <p className="text-xl leading-relaxed ">{place.descriptionEN}</p>}
                        <div className="flex flex-wrap text-center pt-4 mb-2">
                            {place.tecs.map(tec => <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 ">{tec}</div>)}
                        </div>
                        <ul className="text-base mt-4 list-disc list-inside  leading-relaxed">
                            <li>{formatDate(place.time)}</li>
                            {place.current && <li className='text-main font-semibold'>Actualidad</li>}

                        </ul>
                    </div>
                </div>
            </div>)}

        </section>
    )
}
