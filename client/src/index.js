import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import '@fontsource/poppins/400.css';
import PageLayout from './components/PageLayout';
import Dashboard from './pages/Dashboard';
import ExperimentTab from './pages/ExperimentTab';
import Homepage from './pages/Homepage';
import TestPage from './pages/TestPage';
<<<<<<< HEAD
import RegistrationPage from './pages/RegistrationPage';
=======
import LoginPage from "./pages/LoginPage";
>>>>>>> 4b8e114be802d850af8f2ac39d4adf7b3774459e

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/experiments" element={<ExperimentTab />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Route>
		<Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

