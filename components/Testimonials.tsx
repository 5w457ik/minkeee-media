import React from 'react';
import StarIcon from './icons/StarIcon';
import AnimatedSection from './AnimatedSection';

const testimonials = [
    {
        name: 'Sarah Johnson',
        company: 'Stellar Solutions',
        quote: "Minkeee transformed our online presence. Their team is a perfect blend of creative and strategic, and the results speak for themselves. We've seen a 200% increase in engagement!",
        rating: 5,
        image: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    },
    {
        name: 'David Chen',
        company: 'QuantumLeap',
        quote: "Working with this agency was a game-changer. Their insights into our brand were uncanny, and the campaign they executed was flawless. Highly recommended for anyone looking to make a real impact.",
        rating: 5,
        image: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
    },
    {
        name: 'Maria Garcia',
        company: 'Nexus Corp',
        quote: "The attention to detail and creative energy from the Minkeee team is unparalleled. They took our vision and brought it to life in ways we couldn't have imagined.",
        rating: 5,
        image: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
    }
];

const Testimonials: React.FC = () => {
    return (
        <AnimatedSection className="py-20 px-4 bg-[var(--card-bg)]/40 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center font-serif text-4xl sm:text-5xl font-bold text-[var(--text-color)]">What Our Clients Say</h2>
                <p className="text-center mt-4 text-lg text-[var(--text-color-medium)] font-light max-w-3xl mx-auto">We let our results do the talking, and our clients are happy to chime in.</p>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-[var(--card-bg)] p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
                            <img loading="lazy" src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full shadow-md object-cover" />
                            <div className="flex mt-4">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <StarIcon key={i} className="w-5 h-5 text-[var(--primary-gold)]" isFilled={i < testimonial.rating} />
                                ))}
                            </div>
                            <blockquote className="mt-4 text-lg italic text-[var(--text-color-medium)] font-light flex-grow">
                                "{testimonial.quote}"
                            </blockquote>
                            <footer className="mt-6">
                                <p className="font-bold text-[var(--text-color)] text-lg">{testimonial.name}</p>
                                <p className="text-sm text-[var(--text-color-medium)]">{testimonial.company}</p>
                            </footer>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Testimonials;
