import './App.css';
import { Routes, Route } from 'react-router-dom'; // Don't import BrowserRouter here
import HomePage from './pages/HomePage';
import Path from '../components/explore/Path'; // Make sure you create this PathPage component
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/Footer/Footer';

function App() {
  return (
    <div className='font-sans'>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home page route */}
        <Route path="/career/:id" element={<Path />} /> {/* Career path page */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
