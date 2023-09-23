import "./UserDetails.css";
import profile from "../../assets/profile.png";
function UserDetails() {
  const user = JSON.parse(localStorage.getItem("userData"));
  const category = JSON.parse(localStorage.getItem("categories"));

  return (
    <div className="user-details-box">
      <img src={profile} alt="profile" />
      <div>
        <span>{user.name}</span>
        <span>{user.email}</span>
        <h2 className="username">{user.userName}</h2>
        <div className="categories-choosen">
          {category.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
