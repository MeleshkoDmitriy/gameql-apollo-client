import { FC } from "react";
import { TGame } from "../../../types/types";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/routes";

interface GameCardProps {
  game: TGame;
}

export const GameCard: FC<GameCardProps> = ({ game }) => {
  return (
    <Link to={`${routes.GAMES}/${game.id}`} key={game.id}>
      <div>
        <img
          src={game.image}
          alt={game.title}
          style={{ width: "200px", height: "auto" }}
        />
        <h2>{game.title}</h2>
        <p>{game.price}</p>
        {game.genres.map((g, i) => (
          <span key={i}>{g}</span>
        ))}
      </div>
    </Link>
  );
};
