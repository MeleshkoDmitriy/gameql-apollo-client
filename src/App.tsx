import { useQuery, gql } from "@apollo/client";

// const GET_GAMES = gql`
//   query Games {
//     games {
//       title
//       id
//       description
//       image
//     }
//   }
// `;

const GET_USERS = gql`
  query Users {
    users {
      id
      username
      avatar
    }
  }
`;

function App() {
  // const { loading, error, data } = useQuery(GET_GAMES);
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
    return <p>Error!</p>;
  }

  console.log(data);

  return (
    <div>
      <h1>Games</h1>
      {/* {data.games.map((game) => (
        <div key={game.id}>
          <strong>{game.title}</strong>
          <p>{game.description}</p>
          <img src={game.image} alt="image" />
        </div>
      ))} */}
      {data.users.map((user) => (
        <div key={user.id}>
          <strong>{user.username}</strong>
          <img
            src={user.avatar}
            alt="avatar"
            style={{ width: "50px", aspectRatio: "1 / 1" }}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
