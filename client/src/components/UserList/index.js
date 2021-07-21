import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ _id, username }) => {
  return (
    <div key={_id} className="card mb-3">
      <h4 className="card-header bg-primary text-light p-2 m-0">
        <Link className="text-light" to={`/users/${_id}`}>
          {username}
        </Link>
      </h4>
    </div>
  );
}

const UserList = ({ users, title }) => {
  if (!users.length) return <h3>No Users</h3>;

  const renderUsers = () => {
    if (!users) return null;
    users.map(user => < User {...user} />);
    return null;
  }

  return (
    <>
      <h3>{title}</h3>
      {renderUsers()}
    </>
  );
};

export default UserList;
