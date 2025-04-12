import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import models from '../../modelData/models';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(models.userListModel());
  }, []);

  return (
    <List>
      {users.map((user) => (
        <ListItem key={user._id} component={Link} to={`/users/${user._id}`} button>
          <ListItemText primary={`${user.first_name} ${user.last_name}`} />
        </ListItem>
      ))}
    </List>
  );
}

export default UserList;
