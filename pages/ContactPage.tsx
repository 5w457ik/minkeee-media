import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        
        // Mock API call for demonstration
        await new Promise(resolve => setTimeout(resolve, 1500));

        // In a real app, you'd handle the response from your API
        // For now, we'll randomly set success or error.
        if (Math.random() > 0.2) {
            setStatus('success');
        } else {
            setStatus('error');
        }
    };


    return (
        <div className="pt-40 pb-20 px-4 bg-[var(--bg-color)] min-h-screen">
            <div className="max-w-4xl mx-auto w-full">
                <div className="text-center">
                    <h1 className="font-serif text-5xl sm:text-6xl font-bold text-[var(--text-color)]">Contact Us</h1>
                    <p className="mt-4 text-lg text-[var(--text-color-medium)] font-light">
                        Ready to make an impact? Let's talk about your next project.
                    </p>
                </div>

                <div className="mt-12 bg-[var(--card-bg)] backdrop-blur-sm p-8 sm:p-12 rounded-lg shadow-xl">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                        <div>
                             <label htmlFor="first_name" className="block text-sm font-bold text-[var(--text-color-medium)] mb-2">First Name</label>
                             <input type="text" id="first_name" required className="w-full p-3 bg-[var(--input-bg)] text-[var(--text-color)] border border-[var(--primary-gold)]/50 rounded-md focus:ring-[var(--primary-gold)] focus:border-[var(--primary-gold)] transition" />
                        </div>
                        <div>
                             <label htmlFor="last_name" className="block text-sm font-bold text-[var(--text-color-medium)] mb-2">Last Name</label>
                             <input type="text" id="last_name" required className="w-full p-3 bg-[var(--input-bg)] text-[var(--text-color)] border border-[var(--primary-gold)]/50 rounded-md focus:ring-[var(--primary-gold)] focus:border-[var(--primary-gold)] transition" />
                        </div>
                        <div className="md:col-span-2">
                             <label htmlFor="email" className="block text-sm font-bold text-[var(--text-color-medium)] mb-2">Email Address</label>
                             <input type="email" id="email" required className="w-full p-3 bg-[var(--input-bg)] text-[var(--text-color)] border border-[var(--primary-gold)]/50 rounded-md focus:ring-[var(--primary-gold)] focus:border-[var(--primary-gold)] transition" />
                        </div>
                        <div className="md:col-span-2">
                             <label htmlFor="company" className="block text-sm font-bold text-[var(--text-color-medium)] mb-2">Company (Optional)</label>
                             <input type="text" id="company" className="w-full p-3 bg-[var(--input-bg)] text-[var(--text-color)] border border-[var(--primary-gold)]/50 rounded-md focus:ring-[var(--primary-gold)] focus:border-[var(--primary-gold)] transition" />
                        </div>
                         <div className="md:col-span-2">
                             <label htmlFor="message" className="block text-sm font-bold text-[var(--text-color-medium)] mb-2">How can we help?</label>
                             <textarea id="message" rows={5} required className="w-full p-3 bg-[var(--input-bg)] text-[var(--text-color)] border border-[var(--primary-gold)]/50 rounded-md focus:ring-[var(--primary-gold)] focus:border-[var(--primary-gold)] transition"></textarea>
                        </div>
                        <div className="md:col-span-2 text-center">
                            <button type="submit" disabled={status === 'submitting'} className="btn-gradient text-[var(--btn-text-color)] font-bold py-4 px-12 rounded-full transition-all duration-300 hover:shadow-lg mt-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed">
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                            </button>
                             {status === 'success' && <p className="mt-4 text-green-500">Thank you! Your message has been sent.</p>}
                             {status === 'error' && <p className="mt-4 text-red-500">Something went wrong. Please try again.</p>}
                        </div>
                    </form>
                </div>
            </div>

            <div className="max-w-4xl mx-auto w-full mt-20">
                <div className="text-center">
                    <h2 className="font-serif text-4xl font-bold text-[var(--text-color)]">Book a Consultation</h2>
                    <p className="mt-3 text-lg text-[var(--text-color-medium)] font-light">
                        Or, skip the form and schedule a 30-minute call with us directly.
                    </p>
                </div>
                <div className="mt-8 rounded-lg shadow-xl overflow-hidden">
                    <iframe 
                        src="https://calendly.com/d/cnp-sc5-g3c/30-minute-meeting"
                        width="100%"
                        height="700"
                        frameBorder="0"
                        title="Book a consultation with Minkeee"
                        style={{'background': 'transparent'}}
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;