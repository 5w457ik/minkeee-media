
import React from 'react';

const ArrowDownIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg
            className={className}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            viewBox="0 0 24 24"
        >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
    );
};

export default ArrowDownIcon;
