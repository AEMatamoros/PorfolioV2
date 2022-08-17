import PropTypes from "prop-types";

import { iIcons } from "../../interfaces/iIcons";

export default function CustomIcons({
  icon = "fa-solid fa-power-off",
  size = "fa-xl",
  textColor = "text-secondary",
  hoverColor = "text-detail",
  darkColor = "text-detail",
  darkHoverColor = "text-secondary",
}: iIcons) {
  return (
    <i
      className={` ${icon} ${textColor} hover:${hoverColor} dark:${darkColor} dark:hover:${darkHoverColor} ${size} duration-300 cursor-pointer sections-selecter `}
    ></i>
  );
}

CustomIcons.prototypes = {
  icon: PropTypes.string,
  size: PropTypes.string,
  textcolor: PropTypes.string,
  hoverColor: PropTypes.string,
  darkColor: PropTypes.string,
  darkHoverColor: PropTypes.string,
};
