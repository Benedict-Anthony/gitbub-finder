import React from "react";
import { useContext } from "react";
import UserItem from "./UserItem";
import GitHubContext from "../context/github/GithubContext";

import Spinner from "../layouts/Spinner";

function UserResult() {
  const { users, loading } = useContext(GitHubContext);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user, index) => (
          <UserItem key={index} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResult;
