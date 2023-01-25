import { SelectLanguajeHook } from '../hooks'
import CustomIcons from './shareds/CustomIcons'

export default function Proyects(): JSX.Element {
  let { currentLanguaje: texts } = SelectLanguajeHook()
  let tecs = [
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
  return (
    <main className="flex flex-col px-4 justify-center items-center w-full h-full">
      <h1 className="text-6xl text-secondary dark:text-detail mt-8 mb-4">
        {texts.labels.tecnologiesTitle}
      </h1>
      <div className="card-container w-full flex flex-wrap p-3">
        {tecs.map((tec, index) => (
          <div className=" p-1 w-2/12" key={index}>
            <div
              className={
                'card h-36 bg-white  dark:shadow-white dark:bg-black shadow-lg transform hover:scale-105 cursor-pointer transition-all duration-700 flex flex-col justify-center items-center ' +
                tec.hoverColor
              }
            >
              <div className="card-header text-center">{tec.name}</div>
              <div className="card-icon text-center">
                <CustomIcons
                  icon={`${tec.icon} fa-4x`}
                  hoverColor={tec.hoverColor}
                  darkHoverColor={tec.hoverColor}
                ></CustomIcons>
              </div>
            </div>
          </div>
        ))}
        <div className=" p-1 w-2/12">
          <div
            className={
              'card h-36 bg-black  dark:bg-white shadow-lg transform hover:scale-105 cursor-pointer transition-all duration-700 flex flex-col justify-center items-center text-indigo-500'
            }
          ></div>
        </div>
      </div>
    </main>
  )
}
