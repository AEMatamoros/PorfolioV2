import React from 'react';
import { useRef } from 'react';
//Custom Hooks
import { SelectLanguajeHook, SelectThemeHook } from '@Hooks/index';

//Components
import {
    Header,
    Hero,
    About,
    Techs,
    Portfolio,
    Experience,
    LampEffect,
    Footer,
    GoTop,
    Navigator,
    SquaresEffect,
    Contact,
} from '@Components/index';
import {
    useShowContactForm,
    useScrollEffect,
    useLampEffect,
} from '@Hooks/index';
export default function App() {
    useLampEffect();
    const { active, showComponent } = useScrollEffect();

    const { wrapperRef, handleTheme, currentTheme } = SelectThemeHook();

    const {
        currentLanguaje: texts,
        handleLanguaje,
        type,
    } = SelectLanguajeHook();

    const { showEmailForm, handleContactformClose, handleContactformOpen } =
        useShowContactForm();

    const heroRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const expRef = useRef<HTMLDivElement>(null);
    const proyectsRef = useRef<HTMLDivElement>(null);

    return (
        <main ref={wrapperRef} className="main">
            <div className="relative flex flex-wrap bg-light text-dark dark:bg-dark dark:text-white ">
                <SquaresEffect currentTheme={currentTheme} />
                <Header
                    handleTheme={handleTheme}
                    handleLanguaje={handleLanguaje}
                    handleContactformOpen={handleContactformOpen}
                    currentTheme={currentTheme}
                    texts={texts}
                />
                <Hero
                    title={texts.labels.userTitle}
                    subtitle={texts.labels.userJob}
                    msg={texts.labels.mainHero}
                    reference={heroRef}
                />
                <GoTop state={showComponent} />

                <About
                    subtitle={texts.labels.mainTitle}
                    msg={texts.labels.mainMsg}
                    reference={aboutRef}
                />
                <Techs subtitle={texts.labels.techsTitle} />
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
                    currentTheme={currentTheme}
                    texts={texts}
                    handleContactformOpen={handleContactformOpen}
                ></Navigator>
                <Contact
                    handleContactformClose={handleContactformClose}
                    showEmailForm={showEmailForm}
                    texts={texts}
                    currentTheme={currentTheme}
                />
                {currentTheme === 'dark' && <LampEffect />}
            </div>
        </main>
        //   <Suspense fallback={<Loader />}>
        //   <Outlet />
        // </Suspense>
    );
}
