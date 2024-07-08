import React from 'react';
import './styles.css';
import { MovieDescription } from '../../types';
import MovieCard from '../movie-card/MovieCard';
import ButtonMain from './components/ButtonMain';

export interface MainProps {
  moviesArray: MovieDescription[];
  countResults: number;
}

export interface MainState {
  nextPage: boolean;
  prevPage: boolean;
}

type Props = Readonly<MainProps>;
export default class Main extends React.Component<Props, MainState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nextPage: true,
      prevPage: true,
    };
  }

  clickNextPage() {
    console.log('click next');
  }

  clickPrevPage() {
    console.log('click prev');
  }

  render() {
    return (
      <div className="main">
        {this.props.moviesArray.length ? (
          <div>
            <div className="movie-section">
              {this.props.moviesArray.map((item, index) => {
                return <MovieCard key={index} movie={item} />;
              })}
            </div>
            <div className="button-block">
              <ButtonMain
                content="Prev page"
                isActive={true}
                clickHandler={this.clickPrevPage}
              />
              <ButtonMain
                content="Next page"
                isActive={false}
                clickHandler={this.clickNextPage}
              />
            </div>
          </div>
        ) : (
          <p className="empty-msg">Unfortunately, nothing was found.</p>
        )}
      </div>
    );
  }
}
