import React from 'react';
import './styles.css';
import { MovieDescription } from '../../types';
import MovieCard from '../movie-card/MovieCard';
import ButtonMain from './components/ButtonMain';

export interface MainProps {
  moviesArray: MovieDescription[];
  countResults: number;
}

type Props = Readonly<MainProps>;
export default class Main extends React.Component<Props> {
  render() {
    return (
      <div>
        {this.props.moviesArray.length > 1} ?
        <div className="movie-section">
          {this.props.moviesArray.map((item, index) => {
            return <MovieCard key={index} movie={item} />;
          })}
        </div>
        <ButtonMain content="Prev page" isActive={true} />
        <ButtonMain content="Next page" isActive={false} />
      </div>
    );
  }
}
