import { useState, useEffect } from "react";
import Suggestions from "./suggestions";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useState("");
  const [showDrop, setShowDrop] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleClick(event) {
    setSearchParams(event.target.innerText);
    setShowDrop(false);
    setFilteredUsers([]);
  }

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParams(query);

    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDrop(true);
    } else {
      setShowDrop(false);
    }
  }

  async function fetchUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((user) => user.firstName));
        setLoading(false);
        setErrorMsg(null);
      }
    } catch (e) {
      setLoading(false);
      setErrorMsg(e.message);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users, filteredUsers);

  if (errorMsg) {
    return <div>Error! {errorMsg}</div>;
  }

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading data! Please wait...</h1>
      ) : (
        <input
          value={searchParams}
          name="search-users"
          type="text"
          placeholder="Search Users..."
          onChange={handleChange}
        />
      )}
      {showDrop && (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
}
