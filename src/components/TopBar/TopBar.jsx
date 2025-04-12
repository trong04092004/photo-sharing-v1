import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';
import models from '../../modelData/models';
import './TopBar.css';

function TopBar() {
  const location = useLocation();
  const [title, setTitle] = useState('');
  const { userId } = useParams();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/users') {
      setTitle('User List');
    } else if (path.startsWith('/users/') && !path.startsWith('/photos')) {
      const id = path.split('/')[2];
      const user = models.userModel(id);
      setTitle(`${user.first_name} ${user.last_name}`);
    } else if (path.startsWith('/photos/')) {
      const id = path.split('/')[2];
      const user = models.userModel(id);
      setTitle(`Photos of ${user.first_name} ${user.last_name}`);
    }
  }, [location]);

  return (
    <AppBar position="static">
      <Toolbar>
      <Typography variant="h6" className="topbar-left">
           Trọng Hoàng
      </Typography>
      <Typography variant="subtitle1" className="topbar-right">
          {title}
      </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
