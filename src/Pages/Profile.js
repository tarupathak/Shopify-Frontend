import React from 'react';

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <h1>Profile Page</h1>
      <div className="profile-info">
        <p>Name: name</p>
        <p>Email: email</p>
        <p>Location: location</p>
      </div>
    </div>
  );
};

export default Profile;
