import img from "../Assets/download.jpeg";

const Profile = () => {
  const auth = localStorage.getItem("user");
  return (
    <div className="profile">
      <h1>Profile Page</h1>
      <div className="profile-info">
        <p>
          <span style={{ fontSize: "large", fontWeight: "600" }}>Name:</span>{" "}
          {JSON.parse(auth).name}
        </p>
        <p>
          <span style={{ fontSize: "large", fontWeight: "600" }}>Email:</span>{" "}
          {JSON.parse(auth).email}
        </p>
      </div>
    </div>
  );
};

export default Profile;
