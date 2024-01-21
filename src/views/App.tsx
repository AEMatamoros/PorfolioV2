import React from 'react';
import { useLayoutEffect, useRef, useState } from 'react';
//Custom Hooks
import { SelectLanguajeHook, SelectThemeHook } from '../hooks';

//Components
import {
    Header,
    Hero,
    About,
    Techs,
    Portfolio,
    Experience,
    LampEffect,
} from '../components';
import Footer from '../components/Footer';
import GoTop from '../components/shareds/GoTop';
import Navigator from '../components/shareds/Navigator';
import SquaresEffect from '../components/shareds/SquaresEffect';
import Contact from '../components/Contact';

export default function App() {
    // Init in DarkMode, Init Lamp Effect
    useLayoutEffect(() => {
        const pos = document.documentElement;
        const handleMouseMove = (event: MouseEvent) => {
            pos.style.setProperty('--x', event.clientX + 'px');
            pos.style.setProperty('--y', event.clientY + 'px');
        };

        window.addEventListener('mousemove', e => {
            handleMouseMove(e);
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useLayoutEffect(() => {
        // Show on Scroll Option 1
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });
        const hiddenElements = document.querySelectorAll('.section-hidden');
        hiddenElements.forEach(el => observer.observe(el));
        //When to show go Up component
    }, []);
    // Handle Go to top show
    const [showComponent, setShowComponent] = useState(false);
    useLayoutEffect(() => {
        const handleScroll = () => {
            // Set the scroll threshold for when to show the component
            const scrollThreshold = 100; // Adjust this value as needed

            if (window.scrollY >= scrollThreshold) {
                setShowComponent(true);
            } else {
                setShowComponent(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Check the initial scroll position
        handleScroll();

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    //Theme
    const { wrapperRef, handleTheme, currentTheme } = SelectThemeHook();
    useLayoutEffect(() => {
        handleTheme();
    }, []);
    //Languaje
    const {
        currentLanguaje: texts,
        handleLanguaje,
        type,
    } = SelectLanguajeHook();

    //Scroll Navigation
    const heroRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const expRef = useRef<HTMLDivElement>(null);
    const proyectsRef = useRef<HTMLDivElement>(null);
    // Active Page
    const [active, setActive] = useState('home');
    //Contact Page
    const [showEmailForm, setShowEmailForm] = useState(false);
    const handleContactformOpen = () => {
        setShowEmailForm(true);
    };
    const handleContactformClose = () => {
        setShowEmailForm(false);
    };
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
                />
                {currentTheme === 'dark' && <LampEffect />}
            </div>
        </main>
        //   <Suspense fallback={<Loader />}>
        //   <Outlet />
        // </Suspense>
    );
}
