import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Feautures from "./sections/Feautures.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonial from "./sections/Testimonial.jsx";
import Download from "./sections/Download.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Feautures />
      <Pricing />
      <Faq />
      <Testimonial />
      <Download />
      <Footer />
    </main>
  );
};
export default App;
