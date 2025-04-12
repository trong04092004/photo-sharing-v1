import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import models from '../../modelData/models';
import './UserDetail.css';

function UserDetail() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(models.userModel(userId));
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="user-detail-container">
      <Typography variant="h5">{user.first_name} {user.last_name}</Typography>
      <Typography className="user-detail-info">Location: {user.location}</Typography>
      <Typography className="user-detail-info">Occupation: {user.occupation}</Typography>
      <Typography className="user-detail-info">Description: {user.description}</Typography>
      <Button
        component={Link}
        to={`/photos/${user._id}`}
        variant="contained"
        color="primary"
        className="view-photos-button"
      >
        View Photos
      </Button>
    </div>
  );
}


export default UserDetail;