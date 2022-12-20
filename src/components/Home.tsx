import { SelectLanguajeHook } from "../hooks";
import profileImg from "../assets/img/profile.jpg";
export default function Home() {
  let { currentLanguaje: texts } = SelectLanguajeHook();

  return (
    <section className="flex flex-col px-4 justify-center items-center w-100 h-full">
      <h1 className="text-5xl text-secondary dark:text-detail my-4">
        {texts.labels.mainTitle}
      </h1>
      <img
        className=" w-52 h-52 rounded-full hide-mov"
        src={profileImg}
        alt="Default avatar"
      />

      <p className=" text-center w-8/12 my-4 max-mov">{texts.labels.mainMsg}</p>
      <button className="bg-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white hover:bg-white border border-1 border-black text-white hover:text-black font-bold py-2 px-4 rounded-full transition-all duration-300 hide-mov">
        Button
      </button>
    </section>
  );
}
