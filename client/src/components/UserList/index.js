import React from "react";
import { Link } from "react-router-dom";

const User = ({ _id, username }) => {
  return (
    <div key={_id} className="card mb-3">
      <h4 className="card-header bg-dark text-light p-2 m-0">
        <Link className="text-light" to={`/users/${_id}`}>
          {username}
        </Link>
      </h4>
    </div>
  );
};

const UserList = ({ users, socialUsers, title }) => {
  if (!users.length) return <h3>No Users</h3>;
  if (!socialUsers.length) return <h3>No Social Users</h3>;
  const renderUsers = () => {
    if (!users) return null;
    return users.map((user) => <User key={user._id} {...user} />);
  };
  const renderSocialUsers = () => {
    if (!socialUsers) return null;
    return socialUsers.map((user) => <User key={user._id} {...user} />);
  };
  return (
    <>
      <h3>{title}</h3>
      {renderUsers()}
      <h3>Social Users:</h3>
      {renderSocialUsers()}
    </>
  );
};

export default UserList;
