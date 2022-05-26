import React from "react";
import { useState, useContext } from "react";
import GitHubContext from "../context/github/GithubContext";
import AlertContext from "../context/alert/AlertContext";

function UserSearch() {
  const { users, searchUsers, clearUI } = useContext(GitHubContext);
  const { setAlert } = useContext(AlertContext);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("please enter a valid fields", "error");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const handleClear = () => {
    setText("");
    clearUI();
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="from-control">
            <div className="relative">
              <input
                onChange={handleChange}
                type="text"
                className="w-full pr-40 bg-gray-200 input-lg input text-black"
                placeholder="Search"
                value={text}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={handleClear} className="btn btn-ghost btn-large">
            clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
