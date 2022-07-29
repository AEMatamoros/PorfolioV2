import React from "react";

export default function Aside() {
  return (
    <aside className="main-aside bg-main dark:bg-black flex flex-row justify-center space-x-20 items-center">
      <i className="text-secondary dark:text-detail hover:text-detail dark:hover:text-secondary duration-300 cursor-pointer sections-selecter fa-solid fa-3x fa-power-off"></i>
      <i className="text-secondary dark:text-detail hover:text-detail dark:hover:text-secondary duration-300 cursor-pointer sections-selecter fa-solid fa-3x fa-folder-open"></i>
      <i className="text-secondary dark:text-detail hover:text-detail dark:hover:text-secondary duration-300 cursor-pointer sections-selecter fa-solid fa-3x fa-code"></i>
      <i className="text-secondary dark:text-detail hover:text-detail dark:hover:text-secondary duration-300 cursor-pointer sections-selecter fa-solid fa-3x fa-paper-plane"></i>
    </aside>
  );
}
