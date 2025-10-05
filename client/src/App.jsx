import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Path from '../components/explore/Path';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/Footer/Footer';
import JoinAsMentor from './pages/JoinAsMentor';
import Login from './pages/Login';
import SubCareer from "@/components/explore/SubCareer";
import Explore from '@/components/explore/explore';
import MentorsPage from '@/components/mentor/mentor';
import MentorProfilePage from '@/components/mentor/Profile';
import BookMentorPage from '@/components/mentor/BookMentorPage';
import AdminLogin from '@/components/admin/AdminLogin';
import AdminDashboard from '@/components/admin/AdminDashboard';

function App() {
  const location = useLocation();

  // List of routes where Navbar and Footer should be hidden
  const hideNavAndFooterRoutes = ['/in','/dashboard']; // add more admin routes if needed
  const hideLayout = hideNavAndFooterRoutes.includes(location.pathname);

  return (
    <div className='font-sans'>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/career/:id" element={<Path />} />
        <Route path="/join-mentor" element={<JoinAsMentor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore/:id/:subId" element={<SubCareer />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/mentors" element={<MentorsPage />} />
        <Route path="/mentors/:id" element={<MentorProfilePage />} />
        <Route path="/mentors/:id/book" element={<BookMentorPage />} />
        <Route path="/in" element={<AdminLogin />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>
      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;
