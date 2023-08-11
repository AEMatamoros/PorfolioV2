import { ReactElement } from "react";
import { scrollToTop } from "../utils/scrollTop";

export interface iHeaderProps {
  handleTheme: any;
  currentTheme: string;
  texts: any;
  handleLanguaje: any;
  children?: ReactElement | ReactElement[];
}
