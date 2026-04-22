import React from 'react';
import HeroSection from './component/HeroSection';
import TrustSection from './component/TrustsSection';
import FeaturesSection from './component/FeaturesSection';
import HowItWorksSection from './component/HowItWorksSection';
import AIHighlightSection from './component/AIHighlightSection';
import TestimonialsSection from './component/TestimonialsSection';
import CTASection from './component/CTASection';

const HomePage = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <TrustSection></TrustSection>
            <FeaturesSection></FeaturesSection>
            <HowItWorksSection></HowItWorksSection>
            <AIHighlightSection></AIHighlightSection>
            <TestimonialsSection></TestimonialsSection>
            <CTASection></CTASection>
        </div>
    );
};

export default HomePage;