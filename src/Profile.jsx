import React from "react";
import "./Profile.css";
const Profile = () => {
  return (
    <div>
      <div className="profile-section">
        <div className="profile-image">
          <img
            src="icons8-team-FcLyt7lW5wg-unsplash.jpg"
            alt=""
            className="image"
          />
        </div>
        <div className="profile-information">
          <h1>Janette Doe</h1>
          <p>Student</p>
          <div className="credentials">
            <div className="profile-fields">
              <p>Email address</p>
              <p>Phone number</p>
            </div>
            <div className="profile-details">
              <p>janette.doe@gmail.com</p>
              <p>000-000-0000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons-edit">
        <div className="button1">
          <button>Edit Profile</button>
        </div>
        <div className="button2">
          <button>Edit Password</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
