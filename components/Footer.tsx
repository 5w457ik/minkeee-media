import React from 'react';
import InstagramIcon from './icons/InstagramIcon';
import FacebookIcon from './icons/FacebookIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import TwitterIcon from './icons/TwitterIcon';

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-[var(--bg-color)] border-t border-[var(--border-color)] text-[var(--text-color)] py-12 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
                <div>
                    <h3 className="font-serif text-3xl font-bold">Minkeee</h3>
                    <p className="font-sans text-sm font-light tracking-wider">Make an Impact.</p>
                </div>
                <div className="flex flex-col items-center md:items-end space-y-4">
                     <div className="flex items-center space-x-6">
                        <a href="#" aria-label="Instagram" className="text-[var(--text-color-medium)] hover:text-[var(--primary-gold)] transition-colors duration-300">
                            <InstagramIcon className="w-6 h-6" />
                        </a>
                        <a href="#" aria-label="Facebook" className="text-[var(--text-color-medium)] hover:text-[var(--primary-gold)] transition-colors duration-300">
                            <FacebookIcon className="w-6 h-6" />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="text-[var(--text-color-medium)] hover:text-[var(--primary-gold)] transition-colors duration-300">
                            <LinkedInIcon className="w-6 h-6" />
                        </a>
                        <a href="#" aria-label="Twitter" className="text-[var(--text-color-medium)] hover:text-[var(--primary-gold)] transition-colors duration-300">
                            <TwitterIcon className="w-6 h-6" />
                        </a>
                    </div>
                    <div className="md:text-right">
                        <p className="font-light text-sm text-[var(--text-color-medium)]">&copy; {new Date().getFullYear()} Minkeee. All Rights Reserved.</p>
                        <p className="font-light text-sm text-[var(--text-color-medium)]/80 mt-1">A Digital Marketing & PR Agency.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;