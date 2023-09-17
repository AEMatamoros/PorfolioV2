import { useLayoutEffect, useRef, useState } from "react";
//Custom Hooks
import { SelectLanguajeHook, SelectThemeHook } from "../hooks";

//Components
import {
  Header,
  Hero,
  About,
  Techs,
  Portfolio,
  Experience,
} from "../components";
import Footer from "../components/Footer";
import GoTop from "../components/shareds/GoTop";
import Navigator from "../components/shareds/Navigator";

export default function App() {
  // Init in DarkMode, Init Lamp Effect
  useLayoutEffect(() => {
    let pos = document.documentElement;
    const handleMouseMove = (event: MouseEvent) => {
      pos.style.setProperty("--x", event.clientX + "px");
      pos.style.setProperty("--y", event.clientY + "px");
    };

    window.addEventListener("mousemove", (e) => {
      handleMouseMove(e);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useLayoutEffect(() => {
    handleTheme();
  }, []);

  useLayoutEffect(() => {
    // Show on Scroll Option 1
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".section-hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  //Theme
  let { wrapperRef, handleTheme, currentTheme } = SelectThemeHook();

  //Languaje
  let { currentLanguaje: texts, handleLanguaje, type } = SelectLanguajeHook();

  //Scroll Navigation
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);
  const proyectsRef = useRef<HTMLDivElement>(null);
  // Active Page
  const [active, setActive] = useState("home");
  return (
    <main ref={wrapperRef} className="main">
      <div className="bg-light dark:bg-dark text-dark dark:text-white flex flex-wrap relative">
        <Header
          handleTheme={handleTheme}
          handleLanguaje={handleLanguaje}
          currentTheme={currentTheme}
          texts={texts}
        />
        <Hero
          title={texts.labels.userTitle}
          subtitle={texts.labels.userJob}
          msg={texts.labels.mainHero}
          reference={heroRef}
        />
        <GoTop />
        <div className="w-full bg-light dark:bg-dark" ref={aboutRef}>
          <div className="container flex flex-wrap ">
            <About
              subtitle={texts.labels.mainTitle}
              msg={texts.labels.mainMsg}
              reference={aboutRef}
            />
            <Techs subtitle={texts.labels.techsTitle} />
          </div>
        </div>
        <Experience
          subtitle={texts.labels.experience}
          currentLanguaje={type}
          reference={expRef}
        />
        <Portfolio
          subtitle={texts.labels.proyectsTitle}
          currentLanguaje={type}
          currentTheme={currentTheme}
          reference={proyectsRef}
        />
        <Footer msg={texts.labels.footerText} />
        <Navigator
          heroRef={heroRef}
          aboutRef={aboutRef}
          expRef={expRef}
          proyectsRef={proyectsRef}
          active={active}
        ></Navigator>
        {currentTheme === "dark" && (
          <span className="lamp hidden sm:hidden md:hidden lg:inline-block xl:inline-block"></span>
        )}
      </div>
    </main>
    //   <Suspense fallback={<Loader />}>
    //   <Outlet />
    // </Suspense>
  );
}
