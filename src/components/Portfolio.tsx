import React from "react";

export default function Portfolio() {
  let tecs = [
    { hoverColor: "text-green-500", name: "Node", icon: "fa-brands fa-node" },
    { hoverColor: "text-gray-500", name: "Express", icon: "fa-light fa-e" },
    { hoverColor: "text-purple-500", name: "SASS", icon: "fa-brands fa-sass" },
    { hoverColor: "text-green-500", name: "Django", icon: `fa-light fa-d` },
    { hoverColor: "text-yellow-500", name: "HTMl", icon: `fa-brands fa-html5` },
    { hoverColor: "text-red-500", name: "CSS", icon: `fa-brands fa-css3-alt` },
  ];
  return (
    <div className=" p-12 ">
      <h1 className="text-6xl text-secondary dark:text-detail mt-8 mb-4 text-center">
        Proyectos
      </h1>
      <div className="card-container w-full flex flex-wrap p-3 ">
        {tecs.map((tec, index) => (
          <div className="p-2  sm:w-full md:w-4/12 " key={index}>
            <div className="card transform hover:scale-105 transition-all duration-300 flex justify-center cursor-pointer">
              <div className="shadow-2xl  bg-black dark:bg-white text-white dark:text-black ">
                <a href="#!">
                  <img
                    className=""
                    src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                    alt=""
                  />
                </a>
                <div className="p-6">
                  <h5 className="text-white  dark:text-fontc text-xl font-medium mb-2">
                    Card title
                  </h5>
                  <p className="text-white dark:text-fontc text-base mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-white dark:bg-black dark:text-white dark:hover:text-white hover:text-white text-black font-medium text-xs leading-tight uppercase shadow-md hover:bg-fontc dark:hover:bg-fontc hover:shadow-lg focus:bg-fontc focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-around">
        <i className="cursor-pointer text-black fa-3x fa-regular fa-square-caret-left"></i>
        <i className="cursor-pointer text-black fa-3x fa-regular fa-square-caret-right"></i>
      </div>
    </div>
  );
}
