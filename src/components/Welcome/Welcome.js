import Navbar from '../Nabvar/Navbar';
import Cartelera from '../Cartelera/Cartelera';
import Footer from '../Footer/Footer';
import './Welcome.css';

export const Welcome = () => (
  <section className="welcome-container">
    <Navbar />
    <Cartelera />
    <Footer />
  </section>
);
