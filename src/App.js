import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Grid } from '@mui/material';
import UserList from './components/UserList/UserList';
import UserDetail from './components/UserDetail/UserDetail';
import UserPhotos from './components/UserPhotos/UserPhotos';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <Router>
      <TopBar />
      <Grid container>
        <Grid item xs={3}>
          <UserList />
        </Grid>
        <Grid item xs={9}>
          <Routes>
            <Route path="/users/:userId" element={<UserDetail />} />
            <Route path="/photos/:userId" element={<UserPhotos />} />
            <Route path="/users" element={<div>Select a user to view details.</div>} />
          </Routes>
        </Grid>
      </Grid>
    </Router>
  );
}
export default App;
