import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ContactPage from './pages/ContactPage';
import JournalPage from './pages/JournalPage';

const App: React.FC = () => {
    return (
        <HashRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/case-studies" element={<CaseStudiesPage />} />
                    <Route path="/journal" element={<JournalPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </Layout>
        </HashRouter>
    );
};

export default App;