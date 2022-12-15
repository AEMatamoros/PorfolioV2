import { SelectLanguajeHook } from '../hooks'
import profileImg from '../assets/img/profile.jpg'
export default function Home() {
  let { currentLanguaje: texts } = SelectLanguajeHook()

  return (
    <main className="flex flex-col px-4 justify-center items-center w-100 h-full">
      <h1 className="text-6xl text-secondary dark:text-detail my-4">
        {texts.labels.mainTitle}
      </h1>
      <img
        className=" w-52 h-52 rounded-full"
        src={profileImg}
        alt="Default avatar"
      />

      <p className=" text-center w-6/12 my-4">{texts.labels.mainMsg}</p>
    </main>
  )
}
