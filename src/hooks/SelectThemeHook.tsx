import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { changeTheme } from "../slices/uiSlice";

export default function SelectThemeHook() {
  const currentTheme = useSelector((state: RootState) => state.ui.value);
  const dispatch = useDispatch();

  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleTheme = () => {
    if (wrapperRef.current?.classList.contains("dark")) {
      wrapperRef.current?.classList.remove("dark");
      dispatch(changeTheme("original"));
    } else {
      wrapperRef.current?.classList.add("dark");
      dispatch(changeTheme("dark"));
    }
  };
  return {
    wrapperRef,
    handleTheme,
    currentTheme,
  };
}
