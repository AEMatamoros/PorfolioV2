import PropTypes from 'prop-types'

import { iIcons } from '../../interfaces/iIcons'

export default function CustomIcons({
  icon = 'fa-solid fa-power-off',
  textColor = 'text-secondary',
  hoverColor = 'text-detail',
  darkColor = 'text-white',
  darkHoverColor = 'text-gray-400',
  text = '',
}: iIcons) {
  return (
    <div
      className={` ${textColor} dark:hover:${darkHoverColor} text-2xl duration-300 hover:${hoverColor} dark:${darkColor}`}
    >
      <i className={` ${icon}  cursor-pointer sections-selecter `}></i>
      <span>{text}</span>
    </div>
  )
}

CustomIcons.prototypes = {
  icon: PropTypes.string,
  size: PropTypes.string,
  textcolor: PropTypes.string,
  hoverColor: PropTypes.string,
  darkColor: PropTypes.string,
  darkHoverColor: PropTypes.string,
}
