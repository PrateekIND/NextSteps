import './App.css';
import { Routes, Route } from 'react-router-dom'; // Don't import BrowserRouter here
import HomePage from './pages/HomePage';
import Path from '../components/explore/Path'; // Make sure you create this PathPage component
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/Footer/Footer';
import JoinAsMentor from './pages/JoinAsMentor';
import Login from './pages/Login';
import SubCareer from "@/components/explore/SubCareer"; // Adjust the import path as needed

function App() {
  return (
    <div className='font-sans'>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home page route */}
        <Route path="/career/:id" element={<Path />} /> {/* Career path page */}
        <Route path="/join-mentor" element={<JoinAsMentor />} /> {/* Career path page */}
        <Route path="/login" element={<Login />} /> {/* Career path page */}
        <Route path="/explore/:id/:subId" element={<SubCareer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
