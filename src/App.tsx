import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ProfilePage from './pages/ProfilePage';
import SupportPage from './pages/SupportPage';
import ContactPage from './pages/ContactPage';
import MembersPage from './pages/MembersPage';
import RacePage from './pages/RacePage';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-white flex flex-col">
    <Header />
    <div className="flex-grow pt-16">{children}</div>
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><HomePage /></Layout>
  },
  {
    path: '/project',
    element: <Layout><ProjectPage /></Layout>
  },
  {
    path: '/profile',
    element: <Layout><ProfilePage /></Layout>
  },
  {
    path: '/support',
    element: <Layout><SupportPage /></Layout>
  },
  {
    path: '/members',
    element: <Layout><MembersPage /></Layout>
  },
  {
    path: '/contact',
    element: <Layout><ContactPage /></Layout>
  },
  {
    path: '/race',
    element: <Layout><RacePage /></Layout>
  },
  {
    path: '/privacy',
    element: <Layout><div className="container mx-auto px-4 py-12"><h1 className="text-3xl font-bold mb-6">プライバシーポリシー</h1><p>準備中です。</p></div></Layout>
  },
  {
    path: '/terms',
    element: <Layout><div className="container mx-auto px-4 py-12"><h1 className="text-3xl font-bold mb-6">利用規約</h1><p>準備中です。</p></div></Layout>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
