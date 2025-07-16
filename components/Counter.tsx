import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
    end: number;
    duration?: number;
    className?: string;
    suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000, className, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }
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

    useEffect(() => {
        if (!isInView) return;

        const startTime = Date.now();
        
        const animateCount = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            
            const currentNum = Math.floor(progress * end);
            setCount(currentNum);

            if (progress < 1) {
                requestAnimationFrame(animateCount);
            } else {
                 setCount(end);
            }
        };

        requestAnimationFrame(animateCount);

    }, [end, duration, isInView]);

    return (
        <span ref={ref} className={className}>
            {count}{suffix}
        </span>
    );
};

export default Counter;
