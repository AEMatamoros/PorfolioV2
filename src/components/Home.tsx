import { SelectLanguajeHook } from "../hooks";
import profileImg from "../assets/img/profile.jpg";
export default function Home() {
  let { currentLanguaje: texts } = SelectLanguajeHook();

  return (
    <main className="flex flex-col px-4 justify-center items-center w-100 ">
      <h1 className="text-6xl text-secondary dark:text-detail my-4">
        {texts.labels.mainTitle}
      </h1>
      <div className="img-container mb-4 cursor-pointer">
        <img
          className="w-48 h-48 rounded "
          src={profileImg}
          alt="Default avatar"
        />
        <div className="img-hide-msg flex flex-col justify-center items-center p-4 text-center text-bold  text-main font-bold">
          {texts.labels.frase}
        </div>
      </div>

      <p className="font-bold text-center w-10/12">{texts.labels.mainMsg}</p>
    </main>
  );
}
