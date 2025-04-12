import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import models from '../../modelData/models';
import './UserPhotos.css';

function UserPhotos({ advancedFeatures, setTopBarTitle }) {
  const { userId, photoIndex } = useParams();
  const [photos, setPhotos] = useState([]);
  const navigate = useNavigate();
  const index = photoIndex ? parseInt(photoIndex, 10) : 0;

  useEffect(() => {
    const user = models.userModel(userId);
    if (user && setTopBarTitle) {
      setTopBarTitle(advancedFeatures ? `Photos of ${user.first_name}` : `${user.first_name} ${user.last_name}'s Photos`);
    }
    setPhotos(models.photoOfUserModel(userId));
  }, [userId, advancedFeatures, setTopBarTitle]);

  useEffect(() => {
    if (advancedFeatures && !photoIndex && photos.length > 0) {
      navigate(`/photos/${userId}/0`, { replace: true });
    }
  }, [advancedFeatures, photoIndex, photos, userId, navigate]);

  if (!advancedFeatures) {
    return (
      <div className="photo-list-container">
        {photos.map((photo) => (
          <Card key={photo._id} className="photo-card">
            <CardMedia
              component="img"
              image={require(`../../images/${photo.file_name}`)}
              alt="user"
              className="photo-image"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                Date: {new Date(photo.date_time).toLocaleString()}
              </Typography>
              {photo.comments?.map((comment) => (
                <div key={comment._id} className="comment">
                  <Typography variant="subtitle2">
                    <Link to={`/users/${comment.user._id}`}>{comment.user.first_name} {comment.user.last_name}</Link>
                    &nbsp;({new Date(comment.date_time).toLocaleString()})
                  </Typography>
                  <Typography>{comment.comment}</Typography>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (!photos.length || isNaN(index) || index < 0 || index >= photos.length) {
    return <Typography>No photo found.</Typography>;
  }

  const photo = photos[index];

  return (
    <div className="photo-viewer">
      <Card className="photo-card">
        <CardMedia
          component="img"
          image={require(`../../images/${photo.file_name}`)}
          alt="user"
          className="photo-image"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            Date: {new Date(photo.date_time).toLocaleString()}
          </Typography>
          {photo.comments?.map((comment) => (
            <div key={comment._id} className="comment">
              <Typography variant="subtitle2">
                <Link to={`/users/${comment.user._id}`}>{comment.user.first_name} {comment.user.last_name}</Link>
                &nbsp;({new Date(comment.date_time).toLocaleString()})
              </Typography>
              <Typography>{comment.comment}</Typography>
            </div>
          ))}
          <div className="step-buttons">
            <Button disabled={index <= 0} onClick={() => navigate(`/photos/${userId}/${index - 1}`)}>
              Previous
            </Button>
            <Button disabled={index >= photos.length - 1} onClick={() => navigate(`/photos/${userId}/${index + 1}`)}>
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default UserPhotos;
