import React from 'react';
import './styles.css';
import { MovieDescription } from '../../types';
import MovieCard from '../movie-card/MovieCard';

export interface MainProps {
  moviesArray: MovieDescription[];
}

type Props = Readonly<MainProps>;
export default class Main extends React.Component<Props> {
  render() {
    return (
      <div className="movie-section">
        {this.props.moviesArray.map((item, index) => {
          return <MovieCard key={index} movie={item} />;
        })}
      </div>
    );
  }
}
