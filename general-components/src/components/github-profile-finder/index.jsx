import { useState, useEffect } from "react";
import "./styles.css";
import User from "./user";

export default function GitHubProfileFinder() {
  const [userName, setUserName] = useState("r0bVious");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    fetchGitHubUserData(userName);
  }

  async function fetchGitHubUserData() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    if (data) {
      setLoading(false);
      setUserData(data);
      setUserName("");
    }
  }

  useEffect(() => {
    fetchGitHubUserData();
  }, []);

  if (loading) {
    return <div>Loading! Please wait...</div>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search GitHub Username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
