import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { Doctors } from './sections/Doctors';
import { Services } from './sections/Services';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen font-sans bg-gray-50 flex flex-col dir-rtl">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Doctors />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
