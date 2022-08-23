import { SelectLanguajeHook } from "../hooks";
import profileImg from "../assets/img/profile.jpg";
export default function Home() {
  let { currentLanguaje: texts } = SelectLanguajeHook();

  return (
    <main className="flex flex-col px-4 justify-center items-center w-100 ">
      <h1 className="text-6xl text-secondary dark:text-detail mt-8 mb-4">
        {texts.labels.mainTitle}
      </h1>
      <div className="img-container mb-4 cursor-pointer">
        <img
          className="w-48 h-48 rounded"
          src={profileImg}
          alt="Default avatar"
        />
        <div className="img-hide-msg flex flex-col justify-center items-center p-4 text-center text-bold  dark:text-main font-bold">
          "No matter how high is a mountain, there is always a way to the top."
        </div>
      </div>

      <p className="font-bold text-center w-9/12">{texts.labels.mainMsg}</p>
      <button className="bg-secondary hover:bg-secondary-hover my-4 text-main dark:bg-detail dark:hover:bg-detail-hover font-bold py-2 px-4 rounded">
        {texts.labels.cvButton}
      </button>
    </main>
  );
}
