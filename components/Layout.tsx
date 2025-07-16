import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-[var(--bg-color)] text-[var(--text-color)]">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;