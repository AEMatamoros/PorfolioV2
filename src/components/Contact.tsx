import { SelectLanguajeHook } from '../hooks'
export default function Contact(): JSX.Element {
  let { currentLanguaje: texts } = SelectLanguajeHook()

  return (
    <main className="flex flex-col px-4 justify-center items-center w-100 h-full">
      <h1 className="text-6xl text-secondary dark:text-detail mt-8 mb-4">
        {texts.labels.contactTitle}
      </h1>
      <div className="w-6/12 flex flex-col">
        <a
          className="my-2 cursor-pointer hover:text-yellow-500 transition-all duration-500"
          target="_blank"
          href="mailto:alexismatamoros1996777@gmail.com"
        >
          <i className="fa-solid fa-envelope-circle-check"></i>{' '}
          Alexismatamoros1996777@gmail.com
        </a>
        <a
          className="my-2 cursor-pointer hover:text-yellow-500 transition-all duration-500"
          target="_blank"
          href="mailto:a.matamoros@goit.global"
        >
          <i className="fa-solid fa-envelope-circle-check"></i>{' '}
          a.matamoros@goit.global
        </a>
        <a
          className="my-2 cursor-pointer hover:text-blue-500 transition-all duration-500"
          target="_blank"
          href="https://www.linkedin.com/in/alexis-eduardo-matamoros-mayorquin-3a87411b5/"
        >
          <i className="fa-brands fa-linkedin"></i> Alexis Matamoros
        </a>
        <a
          className="my-2 cursor-pointer hover:text-purple-500 transition-all duration-500"
          target="_blank"
          href="https://github.com/AEMatamoros"
        >
          <i className="fa-brands fa-github"></i> AEMatamoros
        </a>
        <a
          className="my-2 cursor-pointer hover:text-red-500 transition-all duration-500"
          target="_blank"
          href="https://www.youtube.com/channel/UCpLFVrIKVwnDIVUuno9TlzA"
        >
          <i className="fa-brands fa-youtube"></i> Alik's World
        </a>
      </div>
    </main>
  )
}
