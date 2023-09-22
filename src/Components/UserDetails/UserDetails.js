import "./UserDetails.css";
import profile from "../../assets/profile.png";
import { useState } from "react";
function UserDetails() {
  const user = JSON.parse(localStorage.getItem("userData"));
  const category = JSON.parse(localStorage.getItem("categories"));

  const data = category.map((item, index) => {
    return <div>{item}</div>;
  });

  return (
    <div className="user-details-box">
      <img src={profile} alt="profile" />
      <div>
        <span>{user.name}</span>
        <span>{user.email}</span>
        <h2 className="username">{user.userName}</h2>
        <div className="categories-choosen">{data}</div>
      </div>
    </div>
  );
}

export default UserDetails;
