import { Suspense } from 'react'
//Custom Hooks
import { SelectLanguajeHook, SelectThemeHook } from '../hooks'

//Components
import { Header, Aside, Loader } from '../components'
import { Outlet } from 'react-router-dom'

export default function App() {
  //Theme
  let { wrapperRef, handleTheme, currentTheme } = SelectThemeHook()

  //Languaje
  let { currentLanguaje: texts, handleLanguaje } = SelectLanguajeHook()

  return (
    <div ref={wrapperRef}>
      <div className="wrapper">
        <div
          // className={currentTheme !== 'dark' ? 'main-bg' : 'main-bg dark-bg'}
          className={currentTheme !== 'dark' ? 'main-bg' : 'main-bg dark-bg'}
        ></div>
        <section className="firstSection full-wh">
          <Header
            handleTheme={handleTheme}
            currentTheme={currentTheme}
            texts={texts}
            handleLanguaje={handleLanguaje}
          >
            <Header.HeaderBrand />
            <Header.HeaderOptions />
          </Header>
          <main className="main-main dark:text-white px-4 w-8/12">
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </main>
          <Aside className="w-4/12" />
        </section>
      </div>
      <section className="secondSection full-wh bg-transparent dark:bg-transparent">
        <div
          className={`child-section dark:text-white ${
            currentTheme !== 'dark'
              ? ' bg-child-section '
              : ' bg-child-section-dark '
          }`}
        >
          Child Section
        </div>
        <footer className="main-footer bg-white dark:bg-black dark:text-white">
          Footer
        </footer>
      </section>
    </div>
  )
}
