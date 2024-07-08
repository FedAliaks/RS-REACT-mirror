import React from 'react';
import { MovieDescription } from '../../types';
import './styles.css';

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
          src={
            this.props.movie.Poster !== 'N/A'
              ? this.props.movie.Poster
              : '/No-Image-Placeholder.svg.png'
          }
          alt="poster"
        />
        <p className="movie-title">
          {this.props.movie.Title.length < 30
            ? this.props.movie.Title
            : `${this.props.movie.Title.slice(0, 27)}...`}
        </p>
        <p className="movie-content">{this.props.movie.Year}</p>
      </div>
    );
  }
}
