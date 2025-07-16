import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const blogPosts = [
    {
        id: 1,
        title: 'The Art of Storytelling in Modern Marketing',
        excerpt: 'Discover how compelling narratives can elevate your brand and create lasting connections with your audience.',
        author: 'Jane Doe',
        date: 'October 26, 2023',
        image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2670&auto=format&fit=crop',
        category: 'Marketing Strategy',
    },
    {
        id: 2,
        title: 'Decoding the 2024 Design Trends',
        excerpt: 'From neo-brutalism to AI-generated visuals, we break down the key design trends shaping the digital landscape this year.',
        author: 'John Smith',
        date: 'October 15, 2023',
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2564&auto=format&fit=crop',
        category: 'Design',
    },
    {
        id: 3,
        title: 'Why Your Business Needs a Strong Social Media Presence',
        excerpt: 'It\'s more than just posting. We explore the strategies behind building an engaged community and driving business growth through social media.',
        author: 'Emily White',
        date: 'September 30, 2023',
        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2574&auto=format&fit=crop',
        category: 'Social Media',
    }
];

const JournalPage: React.FC = () => {
    return (
        <div className="pt-40 pb-20 px-4 bg-[var(--bg-color)] min-h-screen">
            <div className="max-w-7xl mx-auto">
                <AnimatedSection>
                    <div className="text-center">
                        <h1 className="font-serif text-5xl sm:text-6xl font-bold text-[var(--text-color)]">Our Journal</h1>
                        <p className="text-center mt-4 text-lg text-[var(--text-color-medium)] font-light max-w-3xl mx-auto">
                            Insights, ideas, and inspiration from the Minkeee team.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                         <AnimatedSection key={post.id} className={`transition-all duration-1000 ease-out delay-${index*100} flex flex-col`}>
                            <div className="bg-[var(--card-bg)] rounded-lg shadow-lg overflow-hidden group flex flex-col flex-grow backdrop-blur-sm">
                                <img loading="lazy" src={post.image} alt={post.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="p-6 flex flex-col flex-grow">
                                    <p className="text-sm font-semibold text-[var(--primary-gold)]">{post.category}</p>
                                    <h2 className="mt-2 font-serif text-2xl font-bold text-[var(--text-color)]">{post.title}</h2>
                                    <p className="mt-3 text-[var(--text-color-medium)] font-light flex-grow">{post.excerpt}</p>
                                    <div className="mt-6">
                                        <Link to="#" className="font-bold text-[var(--text-color)] hover:text-[var(--primary-gold)] transition-colors">
                                            Read More &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JournalPage;