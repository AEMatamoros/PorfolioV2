import React from "react";
import CustomIcons from "./shareds/CustomIcons";

export default function Aside() {
  return (
    <aside className="main-aside kk-main dark:kk-black flex flex-row justify-center space-x-20 items-center">
      <CustomIcons icon="fa-solid fa-power-off"></CustomIcons>
      <CustomIcons icon="fa-solid fa-folder-open"></CustomIcons>
      <CustomIcons icon="fa-solid fa-code"></CustomIcons>
      <CustomIcons icon="fa-solid fa-paper-plane"></CustomIcons>
    </aside>
  );
}
