import CustomIcons from "./shareds/CustomIcons";
import { Link } from "react-router-dom";

export default function Aside() {
  return (
    <aside className="main-aside kk-main dark:kk-black flex flex-row justify-center space-x-20 items-center">
      <Link className="p-0 m-0" to="/">
        <CustomIcons icon="fa-solid fa-power-off"></CustomIcons>
      </Link>
      <Link className="p-0 m-0" to="/Blog">
        <CustomIcons icon="fa-solid fa-folder-open"></CustomIcons>
      </Link>
      <Link className="p-0 m-0" to="/Proyects">
        <CustomIcons icon="fa-solid fa-code"></CustomIcons>
      </Link>
      <Link className="p-0 m-0" to="/Contact">
        <CustomIcons icon="fa-solid fa-paper-plane"></CustomIcons>
      </Link>
    </aside>
  );
}
