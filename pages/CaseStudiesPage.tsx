import React, { useState } from 'react';

const clients = [
    'Nexus Corp', 'Stellar Solutions', 'Innovate AI', 'QuantumLeap', 'Momentum', 'Evergreen Co.',
    'Apex Industries', 'BlueOcean', 'Zenith', 'TerraForm', 'Helios', 'Odyssey'
];

const caseStudies = [
    {
        title: "The Grub Fest",
        subtitle: "Event Identity and Story Telling",
        category: "Events",
        description: "Founded in 2015, The Grub Fest's primary objective was to position itself as India's Premier Food Festival. The task was to build a strong and loyal community in the digital cloud. The Minkeee media team handled digital collaterals from design and content to on ground coverage for 2 events.",
        services: ["Social Media Creatives", "Social Media Management", "Website Development", "BTL Designs", "Video Production", "Third Party Collaborations"],
        results: [
            "Facebook: +13,000 likes",
            "Instagram: +42,000 followers",
            "Total footfall for 2 events: 1 lakh"
        ],
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Renovation Factory",
        subtitle: "SMM and Website Revamp",
        category: "E-commerce",
        description: "The brand has seen strong digital growth driven by the release of 22 posts, 57 stories, and 6 reels created by the Minkeee media team. Alongside this, 18 performance marketing ads were launched, supported by key website changes to improve user experience.",
        services: ["Social Media Creatives", "Social Media Management", "PM Ads", "Social Media Contest"],
        results: [
            "Instagram Growth: +22,400 followers",
            "Account Views: 6.7 Lakh+",
            "Engagement: 2.1K+",
            "Content Created: 22 posts, 57 stories, 6 reels"
        ],
        image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2671&auto=format&fit=crop"
    },
    {
        title: "Apex Industries",
        subtitle: "Corporate Rebranding",
        category: "Branding",
        description: "Apex Industries required a complete brand overhaul to reflect their new market position as an industry leader in sustainable tech. We developed a new visual identity, brand voice, and a comprehensive digital strategy.",
        services: ["Branding", "Logo Design", "Website Design & Development", "Content Strategy"],
        results: [
            "45% increase in lead generation post-launch",
            "Featured in 3 major industry publications",
            "Positive sentiment shift of 80% online"
        ],
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop"
    },
];

const categories = ['All', ...Array.from(new Set(caseStudies.map(cs => cs.category)))];

const CaseStudiesPage: React.FC = () => {
    const [filter, setFilter] = useState('All');
    const filteredStudies = filter === 'All' ? caseStudies : caseStudies.filter(s => s.category === filter);

    return (
        <div className="pt-40 pb-20 px-4 bg-[var(--bg-color)] min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="font-serif text-5xl sm:text-6xl font-bold text-[var(--text-color)]">Case Studies</h1>
                    <p className="text-center mt-4 text-lg text-[var(--text-color-medium)] font-light max-w-3xl mx-auto">
                        We partner with brands to create work that makes an impact. Here's a look at what we've achieved.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="mt-12 flex justify-center items-center flex-wrap gap-4">
                    {categories.map(category => (
                        <button 
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300
                            ${filter === category 
                                ? 'bg-gradient-to-r from-[var(--primary-gold)] to-[var(--primary-gold-light)] text-[var(--btn-text-color)] shadow-md' 
                                : 'bg-[var(--card-bg)] text-[var(--text-color-medium)] hover:bg-[var(--primary-gold)]/20'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>


                {/* Case Studies Section */}
                <div className="mt-16 space-y-20">
                    {filteredStudies.map((study, index) => (
                        <div key={study.title} className={`bg-[var(--card-bg)] backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-row-dense' : ''}`}>
                            <div className={`${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                                <p className="font-sans text-sm font-bold text-[var(--primary-gold)] uppercase tracking-wider">{study.category}</p>
                                <h3 className="font-serif text-4xl font-bold text-[var(--text-color)] mt-2">{study.title}</h3>
                                <p className="font-sans text-lg mt-1 text-[var(--text-color-medium)]">{study.subtitle}</p>
                                <p className="mt-6 text-[var(--text-color-light)] font-light leading-relaxed">{study.description}</p>
                                
                                <div className="mt-8">
                                    <h4 className="font-sans font-bold text-[var(--text-color)]">Results</h4>
                                    <ul className="mt-3 space-y-2 text-[var(--text-color-light)]">
                                      {study.results.map(result => <li key={result} className="flex items-start"><span className="mr-3 mt-1 text-[var(--primary-gold)] font-bold">&#10003;</span><span>{result}</span></li>)}
                                    </ul>
                                </div>
                            </div>
                             <div className={`${index % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
                                <img loading="lazy" src={study.image} alt={`Case study for ${study.title}`} className="rounded-lg shadow-lg w-full h-auto object-cover max-h-[450px]" />
                            </div>
                        </div>
                    ))}
                </div>

                 {/* Client Logos */}
                <div className="mt-24">
                    <h2 className="text-center font-serif text-3xl font-bold text-[var(--text-color)]">Brands We've Worked With</h2>
                    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-8 items-center">
                        {clients.map(client => (
                            <div key={client} className="text-center font-serif text-[var(--text-color-medium)]/70 text-lg opacity-80 hover:opacity-100 transition-opacity duration-300">
                                {client}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudiesPage;