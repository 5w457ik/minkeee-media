import React from 'react';
import DesignIcon from '../components/icons/DesignIcon';
import SocialIcon from '../components/icons/SocialIcon';
import ConsultancyIcon from '../components/icons/ConsultancyIcon';
import DigitalIcon from '../components/icons/DigitalIcon';

const serviceCategories = [
    {
        title: 'Design',
        Icon: DesignIcon,
        items: ['Branding', 'Lookbook Design', 'Press Kit', 'Logo Design', 'Brand Portfolio', 'Photoshoot', 'Social Media Artworks', 'Print & Publications']
    },
    {
        title: 'Social Media',
        Icon: SocialIcon,
        items: ['Social Media Management', 'Content Strategy', 'Campaign Creation', 'Brand Prognosis', 'Social Listening', 'Online Reputation Management (ORM)']
    },
    {
        title: 'Consultancy',
        Icon: ConsultancyIcon,
        items: ['Market Research', 'Media Planning', 'Brand Persona Development', 'Influencer Outreach', 'Competitive Mapping & Analysis']
    },
    {
        title: 'Digital',
        Icon: DigitalIcon,
        items: ['Website Design & Development', 'Website Maintenance', 'Search Engine Optimization (SEO)', 'Search Engine Marketing (SEM)']
    }
];


const ServicesPage: React.FC = () => {
    return (
        <div className="pt-40 pb-20 px-4 bg-[var(--bg-color)] min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="font-serif text-5xl sm:text-6xl font-bold text-[var(--text-color)]">Our Services</h1>
                    <p className="text-center mt-4 text-lg text-[var(--text-color-medium)] font-light max-w-3xl mx-auto">
                        From brand identity to digital strategy, we provide a comprehensive suite of services to build, grow, and elevate your brand.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {serviceCategories.map((category) => (
                        <div key={category.title} className="bg-[var(--card-bg)] backdrop-blur-sm p-8 rounded-lg shadow-lg flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                            <div className="mx-auto mb-6 text-[var(--primary-gold)]">
                                <category.Icon className="w-12 h-12" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-[var(--text-color)] text-center">{category.title}</h2>
                            <ul className="mt-6 space-y-3 font-sans text-[var(--text-color-medium)] flex-grow">
                                {category.items.map(item => <li key={item} className="flex items-start"><span className="mr-3 mt-1 text-[var(--primary-gold)]">&#10003;</span><span>{item}</span></li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;