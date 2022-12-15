import CustomIcons from './shareds/CustomIcons'
import { NavLink } from 'react-router-dom'
import { SelectLanguajeHook } from '../hooks'
export default function Aside({ className = '' }) {
  let { currentLanguaje: texts } = SelectLanguajeHook()
  return (
    <aside
      className={` kk-main dark:kk-black m-0 p-0 ${className} relative h-full flex `}
    >
      <div className="flex flex-col justify-center items-start">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'transform scale-110 transition ease-out duration-500'
              : 'transform hover:scale-110 ease-out duration-500' +
                ` p-0 my-2 duration-700`
          }
          to="/"
        >
          <CustomIcons
            icon="fa-solid fa-power-off"
            text={texts.labels.homeTitle}
          ></CustomIcons>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'transform scale-110 transition ease-out duration-500'
              : 'transform hover:scale-110 ease-out duration-500' +
                ` p-0 my-2 duration-700`
          }
          to="/Proyects"
        >
          <CustomIcons
            icon="fa-solid fa-code"
            text={texts.labels.tecnologiesTitle}
          ></CustomIcons>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'transform scale-110 transition ease-out duration-500'
              : 'transform hover:scale-110 ease-out duration-500' +
                ` p-0 my-2 duration-700`
          }
          to="/Contact"
        >
          <CustomIcons
            icon="fa-solid fa-paper-plane"
            text={texts.labels.contactTitle}
          ></CustomIcons>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'transform scale-110 transition ease-out duration-500'
              : 'transform hover:scale-110 ease-out duration-500' +
                ` p-0 my-2 duration-700`
          }
          to="/Blog"
        >
          <CustomIcons
            icon="fa-solid fa-folder-open"
            text={texts.labels.blogTitle}
          ></CustomIcons>
        </NavLink>
        <hr className="w-full border border-1 border-black dark:border-white transition-all duration-300" />
      </div>
    </aside>
  )
}
