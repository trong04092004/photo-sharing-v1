import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Card, CardMedia, CardContent } from '@mui/material';
import models from '../../modelData/models';
import './UserPhotos.css';

function UserPhotos() {
  const { userId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setPhotos(models.photoOfUserModel(userId));
  }, [userId]);

  return (
    <div className="user-photos">
      {photos.map((photo) => (
        <Card key={photo._id} className="user-photo-card">
          <CardMedia
            component="img"
            image={require(`../../images/${photo.file_name}`)}
            alt="user"
            className="user-photo-media"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              Date: {new Date(photo.date_time).toLocaleString()}
            </Typography>
            {photo.comments && photo.comments.map((comment) => (
              <div key={comment._id} className="comment-section">
                <Typography variant="subtitle2" className="comment-author">
                  <Link to={`/users/${comment.user._id}`}>{comment.user.first_name} {comment.user.last_name}</Link>
                  &nbsp;({new Date(comment.date_time).toLocaleString()})
                </Typography>
                <Typography className="comment-text">{comment.comment}</Typography>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserPhotos;
