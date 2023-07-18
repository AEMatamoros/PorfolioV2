import React from 'react'
let techs = [
    {
        hoverColor: 'text-yellow-500',
        name: 'Javascript',
        icon: 'fa-brands fa-js',
    },
    {
        hoverColor: 'text-blue-500',
        name: 'Typescript',
        icon: 'fa-solid fa-file-code',
    },
    { hoverColor: 'text-blue-500', name: 'React', icon: 'fa-brands fa-react' },
    {
        hoverColor: 'text-red-500',
        name: 'Angular',
        icon: 'fa-brands fa-angular',
    },
    { hoverColor: 'text-green-500', name: 'Node', icon: 'fa-brands fa-node' },
    { hoverColor: 'text-gray-500', name: 'Express', icon: 'fa-light fa-e' },
    {
        hoverColor: 'text-purple-500',
        name: 'Bootstrap',
        icon: 'fa-brands fa-bootstrap',
    },
    {
        hoverColor: 'text-blue-500',
        name: 'TailwindCSS',
        icon: 'fa-sharp fa-solid fa-t',
    },
    { hoverColor: 'text-purple-500', name: 'SASS', icon: 'fa-brands fa-sass' },
    {
        hoverColor: 'text-yellow-600',
        name: 'Python',
        icon: 'fa-brands fa-python',
    },
    { hoverColor: 'text-green-500', name: 'Django', icon: `fa-light fa-d` },
    { hoverColor: 'text-yellow-500', name: 'HTMl', icon: `fa-brands fa-html5` },
    { hoverColor: 'text-red-500', name: 'CSS', icon: `fa-brands fa-css3-alt` },
    { hoverColor: 'text-blue-500', name: 'SQL', icon: `fa-solid fa-database` },
    {
        hoverColor: 'text-green-500',
        name: 'NoSQL',
        icon: `fa-solid fa-share-nodes`,
    },
    {
        hoverColor: 'text-purple-500',
        name: 'Github',
        icon: `fa-brands fa-github`,
    },
    { hoverColor: 'text-green-500', name: 'VueJS', icon: `fa-brands fa-vuejs` },
]
export default function Techs() {

    return (
        <section className="main__about flex justify-center items-center dark:text-main w-6/12 p-16 text-center">
            <div className="main__about__icons text-3xl flex flex-wrap gap-8">
                {techs.map((tec, index) => (
                    <div className="p-1 w-36" key={index}>
                        <div
                            className={
                                'card h-36 glass-bg shadow-lg transform hover:scale-110 cursor-pointer transition-all duration-300 flex flex-col justify-center items-center ' +
                                tec.hoverColor
                            }
                        >
                            <i className={`${tec.icon} fa-2x transform hover:scale-150`}></i>
                            <span className='text-base font-bold mt-4'>{tec.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
