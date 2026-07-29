/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen font-sans bg-ivory selection:bg-gold/30">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
