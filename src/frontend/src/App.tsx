import Hero from './components/Hero';
import ProductBenefits from './components/ProductBenefits';
import ResultsTimeline from './components/ResultsTimeline';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProductBenefits />
      <ResultsTimeline />
      <ProductDetails />
      <Footer />
    </div>
  );
}

export default App;
