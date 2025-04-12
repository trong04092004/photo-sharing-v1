import React from 'react';
import { AppBar, Toolbar, Typography, FormControlLabel, Checkbox } from '@mui/material';
import './TopBar.css';

function TopBar({ title, advancedFeatures, onToggleAdvanced }) {
  return (
    <AppBar position="static">
      <Toolbar className="topbar-toolbar">
        <Typography variant="h6" className="topbar-title">
          Hoàng Trọng
        </Typography>
        <Typography variant="h6" className="topbar-center">
          {title}
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={advancedFeatures}
              onChange={onToggleAdvanced}
              color="default"
            />
          }
          label="Enable Advanced Features"
          className="topbar-checkbox"
        />
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;