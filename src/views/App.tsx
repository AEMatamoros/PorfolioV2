import { useEffect } from 'react'
//Custom Hooks
import { SelectLanguajeHook, SelectThemeHook } from '../hooks'

//Components
import { Header, Hero, About, Techs, Portfolio, Experience } from '../components'
import Footer from '../components/Footer';
import GoTop from '../components/shareds/GoTop';

export default function App() {
  // Init in DarkMode, Init Lamp Effect
  // useEffect(() => {
  //   let pos = document.documentElement
  //   const handleMouseMove = (event: any) => {
  //     pos.style.setProperty("--x", event.clientX + "px")
  //     pos.style.setProperty("--y", event.clientY + "px")
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     window.removeEventListener(
  //       'mousemove',
  //       handleMouseMove
  //     );
  //   };
  // }, []);

  useEffect(() => {
    handleTheme()
  }, []);
  //Theme
  let { wrapperRef, handleTheme, currentTheme } = SelectThemeHook()

  //Languaje
  let { currentLanguaje: texts, handleLanguaje, type } = SelectLanguajeHook()




  return (
    <div ref={wrapperRef} className='main'>
      <main className='bg-light dark:bg-dark text-dark dark:text-white flex flex-wrap'>
        <Header handleTheme={handleTheme} handleLanguaje={handleLanguaje} currentTheme={currentTheme} texts={texts} />
        <Hero title={texts.labels.userTitle} subtitle={texts.labels.userJob} msg={texts.labels.mainHero} />
        <About title={texts.labels.mainTitle} msg={texts.labels.mainMsg} />
        <Techs />
        <Experience title={texts.labels.experience} currentLanguaje={type} />
        <Portfolio title={texts.labels.mainTitle} currentLanguaje={type} />
        <Footer msg={texts.labels.footerText} />
        <GoTop />
        <span className='lamp'></span>
      </main>


    </div>
    //   <Suspense fallback={<Loader />}>
    //   <Outlet />
    // </Suspense>
  )
}
