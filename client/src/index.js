import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import PageLayout from './components/PageLayout';
import Dashboard from './pages/Dashboard';
import ExperimentTab from './pages/ExperimentTab';
import Homepage from './pages/Homepage';
import TestPage from './pages/TestPage';
import RegistrationPage from './pages/RegistrationPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/experiments" element={<ExperimentTab />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

