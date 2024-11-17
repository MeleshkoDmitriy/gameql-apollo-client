import { useQuery, gql } from "@apollo/client";

const GET_GAMES = gql`
  query Games {
    games {
      title
      id
      description
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_GAMES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <h1>Games</h1>
      {data.games.map((game) => (
        <div key={game.id}>
          <strong>{game.title}</strong>
          <p>{game.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
