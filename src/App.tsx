import { useQuery } from "@apollo/client";
import { GET_USERS } from "./apollo/query";



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

    </div>
  );
}

export default App;
