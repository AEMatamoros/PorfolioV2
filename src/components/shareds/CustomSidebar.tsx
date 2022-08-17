import React, { useState } from "react";

import { Sidebar } from "flowbite-react";
import CustomIcons from "./CustomIcons";

export default function CustomSidebar() {
  return (
    <aside className="w-100" aria-label="Sidebar">
      <div className="custom-sidebar overflow-y-none py-2 px-3  rounded ">
        <ul className=" flex flex-row items-center justify-center">
          <li className="px-4">
            <CustomIcons icon="fa-solid fa-power-off"></CustomIcons>
          </li>
          <li className="px-4">
            <CustomIcons icon="fa-solid fa-folder-open"></CustomIcons>
          </li>
          <li className="px-4">
            <CustomIcons icon="fa-solid fa-code"></CustomIcons>
          </li>
          <li className="px-4">
            <CustomIcons icon="fa-solid fa-paper-plane"></CustomIcons>
          </li>
        </ul>
      </div>
    </aside>
  );
}
