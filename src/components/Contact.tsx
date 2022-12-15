import { SelectLanguajeHook } from '../hooks'
export default function Contact(): JSX.Element {
  let { currentLanguaje: texts } = SelectLanguajeHook()

  return (
    <main className="flex flex-col px-4 justify-center items-center w-100 h-full">
      <h1 className="text-6xl text-secondary dark:text-detail mt-8 mb-4">
        Contact
      </h1>
      <div className="w-6/12 flex flex-col">
        <span className="my-2 cursor-pointer hover:text-yellow-500 transition-all duration-500">
          <i className="fa-solid fa-envelope-circle-check"></i>{' '}
          Alexismatamoros1996777@gmail.com
        </span>
        <span className="my-2 cursor-pointer hover:text-blue-500 transition-all duration-500">
          <i className="fa-brands fa-linkedin"></i> Alexis Matamoros
        </span>
        <span className="my-2 cursor-pointer hover:text-red-500 transition-all duration-500">
          <i className="fa-brands fa-youtube"></i> Adevsis
        </span>
        <span className="my-2 cursor-pointer hover:text-purple-500 transition-all duration-500">
          <i className="fa-brands fa-github"></i> AEMatamoros
        </span>
      </div>
    </main>
  )
}
