import React from 'react';
import SmoothScroll from './components/SmoothScroll';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Classes from './sections/Classes';
import WhyChooseUs from './sections/WhyChooseUs';
import Trainers from './sections/Trainers';
import Testimonial from './sections/Testimonial';
import Pricing from './sections/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <SmoothScroll>
      {/* Grain texture sits over everything */}
      <div className="grain min-h-[100dvh] text-[#ededed] overflow-x-hidden w-full font-sans" style={{ background: '#090909' }}>
        <Navigation />
        <main>
          <Hero />
          <About />
          <Classes />
          <WhyChooseUs />
          <Trainers />
          <Testimonial />
          <Pricing />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
