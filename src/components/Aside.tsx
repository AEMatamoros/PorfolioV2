import CustomIcons from "./shareds/CustomIcons";
import { NavLink } from "react-router-dom";

export default function Aside() {
  return (
    <aside className="main-aside kk-main dark:kk-black flex flex-row justify-center space-x-20 items-center">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "transform scale-125 hover:scale-125 transition ease-out duration-500 p-0 m-0"
            : "p-0 m-0"
        }
        to="/"
      >
        <CustomIcons icon="fa-solid fa-power-off"></CustomIcons>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "transform scale-125 hover:scale-125 transition ease-out duration-500 p-0 m-0"
            : "p-0 m-0"
        }
        to="/Blog"
      >
        <CustomIcons icon="fa-solid fa-folder-open"></CustomIcons>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "transform scale-125 hover:scale-125 transition ease-out duration-500 p-0 m-0"
            : "p-0 m-0"
        }
        to="/Proyects"
      >
        <CustomIcons icon="fa-solid fa-code"></CustomIcons>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "transform scale-125 hover:scale-125 transition ease-out duration-500 p-0 m-0"
            : "p-0 m-0"
        }
        to="/Contact"
      >
        <CustomIcons icon="fa-solid fa-paper-plane"></CustomIcons>
      </NavLink>
    </aside>
  );
}
