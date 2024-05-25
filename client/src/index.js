import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Homepage from './pages/Homepage';
import PageLayout from './components/PageLayout';
import Homepage from './pages/Homepage';
import TestPage from './pages/TestPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageLayout>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </Router>
    </PageLayout>
  </React.StrictMode>
);

