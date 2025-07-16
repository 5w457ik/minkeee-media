import React from 'react';
import { Link } from 'react-router-dom';
import ArrowDownIcon from '../components/icons/ArrowDownIcon';
import AnimatedSection from '../components/AnimatedSection';
import Testimonials from '../components/Testimonials';
import Counter from '../components/Counter';

const services = [
    { title: 'Design', description: "Crafting memorable brand identities and stunning visuals." },
    { title: 'Social Media', description: "Building and engaging communities with strategic content." },
    { title: 'Consultancy', description: "Providing expert insights and data-driven brand strategy." },
    { title: 'Digital', description: "Developing high-performance websites and digital experiences." }
];

const featuredWork = [
    {
        title: "The Grub Fest",
        subtitle: "Event Identity & Story Telling",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2670&auto=format&fit=crop",
        link: "/case-studies"
    },
    {
        title: "Renovation Factory",
        subtitle: "SMM & Website Revamp",
        image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2671&auto=format&fit=crop",
        link: "/case-studies"
    }
];

const clients = [
    'Nexus Corp', 'Stellar Solutions', 'Innovate AI', 'QuantumLeap', 'Momentum', 'Evergreen Co.',
    'Apex Industries', 'BlueOcean', 'Zenith', 'TerraForm', 'Helios', 'Odyssey'
];


const HomePage: React.FC = () => {
    return (
        <div className="bg-[var(--bg-color)]">
            <div className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 hero-bg">
                <main className="flex-grow flex flex-col justify-center items-center -mt-20">
                    <h1 className="font-serif text-[clamp(2.5rem,10vw,5rem)] font-bold text-[var(--text-color)] leading-tight">Minkeee</h1>
                    <h2 className="font-serif text-[clamp(2rem,8vw,4rem)] italic text-[var(--primary-gold)] -mt-2 sm:-mt-4">Make an Impact.</h2>
                    <p className="mt-6 max-w-2xl text-[var(--text-color-medium)] font-normal text-lg leading-relaxed">
                        A digital marketing and PR agency, we push the envelope with strength in ideation and conceptualisation to make your brand unforgettable.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-10">
                        <Link to="/services" className="bg-gradient-to-r from-[var(--primary-gold)] to-[var(--primary-gold-light)] text-[var(--btn-text-color)] font-bold py-3 px-8 rounded-full transition-shadow duration-300 hover:shadow-lg w-full sm:w-auto">
                            Our Services
                        </Link>
                        <Link to="/case-studies" className="border-2 border-[var(--text-color)] text-[var(--text-color)] font-light py-3 px-8 rounded-full transition-all duration-300 hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] w-full sm:w-auto">
                            View Our Work
                        </Link>
                    </div>
                </main>
                <div className="absolute bottom-8 animate-bounce">
                    <ArrowDownIcon className="w-6 h-6 text-[var(--text-color)]" />
                </div>
            </div>
            
            {/* What We Do Section */}
            <AnimatedSection className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center font-serif text-4xl sm:text-5xl font-bold text-[var(--text-color)]">What We Do</h2>
                     <p className="text-center mt-4 text-lg text-[var(--text-color-medium)] font-light max-w-3xl mx-auto">We offer a symphony of services to compose your brand's success story.</p>
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map(service => (
                            <div key={service.title} className="bg-[var(--card-bg)] backdrop-blur-sm p-8 rounded-lg shadow-lg text-center">
                                <h3 className="font-serif text-3xl font-bold text-[var(--text-color)]">{service.title}</h3>
                                <p className="mt-4 text-[var(--text-color-medium)] font-light">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

             {/* Featured Work Section */}
            <AnimatedSection className="py-20 px-4 bg-[var(--card-bg)]/40 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center font-serif text-4xl sm:text-5xl font-bold text-[var(--text-color)]">Featured Work</h2>
                    <p className="text-center mt-4 text-lg text-[var(--text-color-medium)] font-light max-w-3xl mx-auto">A glimpse into the impactful stories we've helped write.</p>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {featuredWork.map(work => (
                            <div key={work.title} className="bg-[var(--card-bg)] rounded-lg shadow-xl overflow-hidden group">
                                <img loading="lazy" src={work.image} alt={work.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="p-8">
                                    <h3 className="font-serif text-3xl font-bold text-[var(--text-color)]">{work.title}</h3>
                                    <p className="mt-2 text-[var(--text-color-medium)]">{work.subtitle}</p>
                                    <Link to={work.link} className="mt-6 inline-block text-[var(--primary-gold)] font-bold hover:underline">
                                        View Case Study &rarr;
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
            
            <Testimonials />

            {/* Impact Stats Section */}
            <AnimatedSection className="py-20 px-4">
                 <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <Counter end={30} suffix="+" className="font-serif text-6xl font-bold text-[var(--primary-gold)]"/>
                            <p className="mt-2 text-lg text-[var(--text-color-medium)]">Brands Trust Us</p>
                        </div>
                         <div>
                            <Counter end={98} suffix="%" className="font-serif text-6xl font-bold text-[var(--primary-gold)]"/>
                            <p className="mt-2 text-lg text-[var(--text-color-medium)]">Client Retention</p>
                        </div>
                         <div>
                            <Counter end={150} suffix="+" className="font-serif text-6xl font-bold text-[var(--primary-gold)]"/>
                            <p className="mt-2 text-lg text-[var(--text-color-medium)]">Projects Completed</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>


            {/* Our Clients Section */}
            <AnimatedSection className="py-20 px-4 bg-[var(--card-bg)]/40 backdrop-blur-sm">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="font-serif text-4xl font-bold text-[var(--text-color)]">Our Valued Clients</h2>
                    <p className="text-center mt-4 text-lg text-[var(--text-color-medium)] font-light max-w-3xl mx-auto">We're proud to have partnered with a diverse range of ambitious brands.</p>
                     <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-8 items-center">
                        {clients.map(client => (
                            <div key={client} className="text-center font-serif text-[var(--text-color-medium)] text-xl opacity-70 hover:opacity-100 transition-opacity duration-300">
                                {client}
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default HomePage;