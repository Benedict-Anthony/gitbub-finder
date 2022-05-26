import { createContext, useReducer } from "react";

import githubReducer from "./GithubReducers";

const GitHubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUBURL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUBTOKEN;

export const GithubProvider = ({ children }) => {
  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, setState] = useReducer(githubReducer, initialState);

  // Fetch Users
  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await response.json();
    //before using the reducer hook as a state

    // setUsers(data);
    // setLoading(false);

    setState({
      type: "FETCH_USERS",
      payload: items,
    });
  };

  // Fetch Users
  const getUser = async (login) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();

      //before using the reducer hook as a state

      // setUsers(data);
      // setLoading(false);

      setState({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  const getUserRepos = async (login) => {
    setLoading();
    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });

    const response = await fetch(
      `${GITHUB_URL}/users/${login}/repos?${params}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();

      setState({
        type: "GET_REPOS",
        payload: data,
      });
    }
  };

  const setLoading = () => {
    setState({ type: "SET_LOADING" });
  };

  const clearUI = () => {
    setState({
      type: "CLEAR_UI",
    });
  };

  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        // ...state,
        clearUI,
        searchUsers,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubContext;
