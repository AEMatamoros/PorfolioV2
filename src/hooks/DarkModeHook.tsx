import { useRef } from "react";

export default function DarkModeHook() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleTheme = () => {
    wrapperRef.current?.classList.contains("dark")
      ? wrapperRef.current?.classList.remove("dark")
      : wrapperRef.current?.classList.add("dark");
  };
  return {
    wrapperRef,
    handleTheme,
  };
}
