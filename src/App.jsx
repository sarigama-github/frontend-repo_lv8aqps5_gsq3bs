import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import PromoBanner from './components/PromoBanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <PromoBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
