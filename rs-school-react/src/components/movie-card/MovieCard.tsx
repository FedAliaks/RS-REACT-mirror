import { MovieDescription } from '../../types';
import './styles.css';

export interface MovieCardProps {
  movie: MovieDescription;
  key: number;
}

export default function MovieCard(props: MovieCardProps) {
  const { movie, key } = props;
  return (
    <div className="movie-card" key={key}>
      <img
        className="movie-image"
        src={
          movie.Poster !== 'N/A'
            ? movie.Poster
            : '/No-Image-Placeholder.svg.png'
        }
        alt="poster"
      />
      <p className="movie-title">
        {movie.Title.length < 30
          ? movie.Title
          : `${movie.Title.slice(0, 27)}...`}
      </p>
      <p className="movie-content">{movie.Year}</p>
    </div>
  );
}
