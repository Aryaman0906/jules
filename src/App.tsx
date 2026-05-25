import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import BeforeAfter from './components/BeforeAfter';
import Gallery from './components/Gallery';
import Team from './components/Team';
import FAQ from './components/FAQ';
import ServiceArea from './components/ServiceArea';
import BlogPreview from './components/BlogPreview';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <BeforeAfter />
        <Gallery />
        <Team />
        <FAQ />
        <ServiceArea />
        <BlogPreview />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
