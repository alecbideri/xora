import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Feautures from "./sections/Feautures.jsx";
import Pricing from "./sections/Pricing.jsx";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Feautures />
      <Pricing />
    </main>
  );
};
export default App;
