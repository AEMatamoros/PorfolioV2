import { useState, useLayoutEffect } from 'react';

export default function useScrollEffect() {
    const [active, setActive] = useState('home');

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

    return { active, showComponent };
}
