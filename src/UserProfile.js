import React from 'react';

function UserProfile({ user }){
  return(
    <div>
      <p>First Name : {user.firstName}</p>
      <p>Last Name : {user.lastName}</p>
    </div>
  );
}

export default UserProfile;
