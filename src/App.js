import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TopBar from './components/TopBar/TopBar';
import UserList from './components/UserList/UserList';
import UserDetail from './components/UserDetail/UserDetail';
import UserPhotos from './components/UserPhotos/UserPhotos';
import './App.css';

function App() {
  const [advancedFeatures, setAdvancedFeatures] = useState(false);
  const [topBarTitle, setTopBarTitle] = useState('');

  return (
    <Router>
      <div className="app-container">
        <TopBar
          title={topBarTitle}
          advancedFeatures={advancedFeatures}
          onToggleAdvanced={() => setAdvancedFeatures(!advancedFeatures)}
        />
        <div className="main-content">
          <UserList />
          <Routes>
            <Route path="/" element={<Navigate to="/users" />} />
            <Route path="/users/:userId" element={<UserDetail setTopBarTitle={setTopBarTitle} />} />
            <Route path="/photos/:userId" element={<UserPhotos advancedFeatures={advancedFeatures} setTopBarTitle={setTopBarTitle} />} />
            <Route path="/photos/:userId/:photoIndex" element={<UserPhotos advancedFeatures={advancedFeatures} setTopBarTitle={setTopBarTitle} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;