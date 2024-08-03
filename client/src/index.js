import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import PageLayout from './components/PageLayout';
import Dashboard from './pages/Dashboard';
import ExperimentTab from './pages/ExperimentTab';
import EventLogTab from './pages/EventLogTab';
import BatteryTab from './pages/BatteryTab';
import TemperaturesTab from './pages/TemperaturesTab';
import OrientationTab from './pages/OrientationTab';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from "./pages/LoginPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/experiment" element={<ExperimentTab />} />
          <Route path="/event-log" element={<EventLogTab />} />
          <Route path="/temperatures" element={<TemperaturesTab />} />
          <Route path="/battery" element={<BatteryTab />} />
          <Route path="/orientation" element={<OrientationTab />} />
        </Route>
		<Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<RegistrationPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

