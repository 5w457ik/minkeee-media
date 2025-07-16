import React, { useState, useEffect, useRef } from 'react';

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // We only want to animate once
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
                rootMargin: '0px 0px -50px 0px' // Trigger animation a little earlier
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const animationClasses = `transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

    return (
        <section ref={ref} className={`${className || ''} ${animationClasses}`}>
            {children}
        </section>
    );
};

export default AnimatedSection;
