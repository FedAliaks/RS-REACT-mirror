import React from 'react';
import { MovieDescription } from '../../types';

interface MovieProps {
  movie: MovieDescription;
}

type Props = Readonly<MovieProps>;

export default class MovieCard extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="movie-card">
        <img
          className="movie-image"
          src={this.props.movie.Poster}
          alt="poster"
        />
        <p className="movie-title">{this.props.movie.Title}</p>
        <p className="movie-content">{this.props.movie.Type}</p>
        <p className="movie-content">{this.props.movie.Year}</p>
      </div>
    );
  }
}
