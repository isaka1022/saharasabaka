import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ProfilePage from './pages/ProfilePage';
import SupportPage from './pages/SupportPage';
import ContactPage from './pages/ContactPage';
import MembersPage from './pages/MembersPage';
import RacePage from './pages/RacePage';
import EquipmentsPage from './pages/EquipmentsPage';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-white flex flex-col">
    <Header />
    <div className="flex-grow pt-16">{children}</div>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/race" element={<RacePage />} />
          <Route path="/equipments" element={<EquipmentsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
