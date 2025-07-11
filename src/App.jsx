import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Home from '@/pages/Home.jsx';
import Courses from '@/pages/Courses.jsx';
import CourseDetail from '@/pages/CourseDetail.jsx';
import Login from '@/pages/Login.jsx';
import Register from '@/pages/Register.jsx';
import Dashboard from '@/pages/Dashboard.jsx';
import Checkout from '@/pages/Checkout.jsx';
import Chatbot from '@/components/Chatbot';
import { AuthProvider } from '@/contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen">
          <Helmet>
            <title>IngeniaCursos - Plataforma de Cursos de Ingeniería</title>
            <meta name="description" content="Aprende ingeniería con los mejores cursos online. Certificaciones profesionales, instructores expertos y contenido actualizado." />
          </Helmet>
          
          <Header />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<Courses />} />
            <Route path="/curso/:id" element={<CourseDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/checkout/:courseId" element={<Checkout />} />
          </Routes>
          
          <Chatbot />
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;