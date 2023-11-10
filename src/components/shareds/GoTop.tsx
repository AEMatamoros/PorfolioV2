import React from "react";
import { scrollToTop } from "../../utils/scrollTop";

export default function GoTop() {
  return (
    <i
      className="goTop fa-lg fa-solid fa-angles-up cursor-pointer animate-bounce text-blue-500 "
      onClick={scrollToTop}
    ></i>
  );
}
