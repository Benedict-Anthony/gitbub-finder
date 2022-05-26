// const GITHUB_URL = process.env.REACT_APP_GITHUBURL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUBTOKEN;

//   // Fetch Users
//   export const searchUsers = async (text) => {
//     const params = new URLSearchParams({
//       q: text,
//     });

//     const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
//       headers: {
//         Authorization: `token ${GITHUB_TOKEN}`,
//       },
//     });

//     const { items } = await response.json();
//     //before using the reducer hook as a state

//     // setUsers(data);
//     // setLoading(false);

//     return items
//   };
