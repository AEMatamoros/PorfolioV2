import { useEffect, useLayoutEffect } from "react";
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

export default function App() {
  // Init in DarkMode, Init Lamp Effect
  useLayoutEffect(() => {
    let pos = document.documentElement;
    const handleMouseMove = (event: any) => {
      pos.style.setProperty("--x", event.clientX + "px");
      pos.style.setProperty("--y", event.clientY + "px");
    };

    window.addEventListener("mousemove", handleMouseMove);

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
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".section-hidden");
    hiddenElements.forEach((el) => observer.observe(el));
    // //Show on Scroll Option 2
    // function reveal() {
    //   const hiddenElements = document.querySelectorAll(".section-hidden");
    //   hiddenElements.forEach((element) => {
    //     let windowHeight = window.innerHeight;
    //     let revealTop = element.getBoundingClientRect().top;
    //     let revealPoint = 150;
    //     if (revealTop < windowHeight - revealPoint) {
    //       element.classList.add("show");
    //     } else {
    //       element.classList.remove("show");
    //     }
    //   });
    // }

    // window.addEventListener("scroll", reveal);
  }, []);

  //Theme
  let { wrapperRef, handleTheme, currentTheme } = SelectThemeHook();

  //Languaje
  let { currentLanguaje: texts, handleLanguaje, type } = SelectLanguajeHook();

  return (
    <div ref={wrapperRef} className="main">
      <main className="bg-light dark:bg-dark text-dark dark:text-white flex flex-wrap relative">
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
        />
        <GoTop />
        <div className="w-full bg-light dark:bg-dark">
          <div className="container flex flex-wrap ">
            <About title={texts.labels.mainTitle} msg={texts.labels.mainMsg} />
            <Techs />
          </div>
        </div>
        <Experience title={texts.labels.experience} currentLanguaje={type} />
        <Portfolio title={texts.labels.proyectsTitle} currentLanguaje={type} />
        <Footer msg={texts.labels.footerText} />
        {currentTheme === "dark" && (
          <span className="lamp hidden sm:hidden md:hidden lg:inline-block xl:inline-block"></span>
        )}
      </main>
    </div>
    //   <Suspense fallback={<Loader />}>
    //   <Outlet />
    // </Suspense>
  );
}
