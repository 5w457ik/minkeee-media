import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const navItems = [
    { path: '/about', name: 'About Us' },
    { path: '/services', name: 'Services' },
    { path: '/case-studies', name: 'Case Studies' },
    { path: '/journal', name: 'Journal' },
];

const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707.707M6.343 6.343l-.707.707m12.728 0l-.707-.707M6.343 17.657l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
    </svg>
);

const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);
    
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-[var(--text-color-medium)] hover:text-[var(--text-color)] hover:bg-[var(--card-bg)] transition-colors duration-300"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
        </button>
    );
};


const HamburgerIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const CloseIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const baseLinkClass = "text-sm font-light text-[var(--text-color-medium)] hover:text-[var(--primary-gold)] transition-colors duration-300";
    
    const navCardClasses = `
        w-full max-w-6xl mx-auto rounded-full px-6 sm:px-8 py-3 flex justify-between items-center transition-all duration-300 backdrop-blur-xl
        ${scrolled 
            ? 'shadow-lg bg-[var(--header-blur-bg)] border border-[var(--border-color)]' 
            : 'shadow-md bg-[var(--header-bg)]'
        }
    `;

    return (
        <header className="fixed top-4 left-0 right-0 w-full z-50 px-4">
            <div className={navCardClasses}>
                <Link to="/" className="flex flex-col items-start leading-none" onClick={() => setIsMenuOpen(false)}>
                    <span className="font-serif text-3xl font-bold text-[var(--text-color)]">Minkeee</span>
                    <span className="font-serif text-xs italic font-light text-[var(--text-color)]/70 -mt-1 tracking-wide">Make an Impact.</span>
                </Link>

                <div className="hidden lg:flex items-center space-x-10">
                    <NavLink to="/" end className={({isActive}) => `${baseLinkClass} ${isActive ? 'text-[var(--primary-gold)] font-medium' : ''}`}>Home</NavLink>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({isActive}) => `${baseLinkClass} ${isActive ? 'text-[var(--primary-gold)] font-medium' : ''}`}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                <div className="hidden lg:flex items-center space-x-4">
                     <Link
                        to="/contact"
                        className="btn-gradient rounded-full px-7 py-2.5 text-sm text-[var(--btn-text-color)] font-semibold transition-all duration-300"
                    >
                        Contact Us
                    </Link>
                    <ThemeToggle />
                </div>

                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[var(--text-color)] focus:outline-none p-1">
                        {isMenuOpen ? <CloseIcon className="w-7 h-7" /> : <HamburgerIcon className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden mt-2 w-full max-w-6xl mx-auto">
                    <div className="bg-[var(--header-blur-bg)] border border-[var(--border-color)] rounded-2xl shadow-lg p-5 backdrop-blur-xl">
                        <nav className="flex flex-col items-center space-y-4">
                             <NavLink to="/" end onClick={() => setIsMenuOpen(false)} className={({isActive}) => `text-lg font-light text-[var(--text-color)] hover:font-medium transition-all duration-300 w-full text-center py-2 ${isActive ? 'font-medium text-[var(--primary-gold)]' : ''}`}>Home</NavLink>
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={({isActive}) => `text-lg font-light text-[var(--text-color)] hover:font-medium transition-all duration-300 w-full text-center py-2 ${isActive ? 'font-medium text-[var(--primary-gold)]' : ''}`}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                            <div className="flex items-center justify-between w-full pt-4 border-t border-[var(--border-color)] mt-4">
                               <Link
                                to="/contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="btn-gradient rounded-full px-8 py-3 text-base text-[var(--btn-text-color)] font-semibold transition-all duration-300 flex-grow text-center"
                                >
                                Contact Us
                                </Link>
                                <div className="ml-4">
                                     <ThemeToggle />
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;