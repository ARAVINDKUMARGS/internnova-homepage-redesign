import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Programs from "./components/Programs.jsx";
import WhyInternNova from "./components/WhyInternNova.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Events from "./components/Events.jsx";
import FAQ from "./components/FAQ.jsx";
import CallToAction from "./components/CallToAction.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Programs />
        <WhyInternNova />
        <HowItWorks />
        <Events />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
