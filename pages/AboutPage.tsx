import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="pt-40 pb-20 px-4 bg-[var(--bg-color)]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center">
                    <h1 className="font-serif text-5xl sm:text-6xl font-bold text-[var(--text-color)]">About Us</h1>
                </div>
                
                <div className="mt-16 bg-[var(--card-bg)] backdrop-blur-sm p-8 sm:p-12 rounded-lg shadow-xl text-left space-y-6">
                     <p className="font-serif text-2xl sm:text-3xl text-[var(--text-color)]">
                        We're optimists who love to work together.
                    </p>
                    <p className="text-lg text-[var(--text-color-medium)] font-light leading-relaxed">
                        A digital marketing and PR agency, Minkeee media works on the erudite philosophy of always pushing the envelope. The bedrock of our agency is composed of strength in ideation and conceptualisation. We take our homework very seriously and therefore, thorough research and intensive designing are the keywords that drive us to produce content that's original. We step in where most refuse to venture creatively.
                    </p>
                </div>
                 <div className="mt-16">
                     <img loading="lazy" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop" alt="Minkeee Team at work" className="rounded-lg shadow-2xl mx-auto w-full h-auto object-cover" style={{maxHeight: '500px'}}/>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;