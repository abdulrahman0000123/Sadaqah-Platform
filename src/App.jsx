import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import RootLayout from './layouts/RootLayout';
import LandingPage from './pages/LandingPage';
import DonatePage from './pages/DonatePage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <RootLayout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailsPage />} />
          </Routes>
        </RootLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
