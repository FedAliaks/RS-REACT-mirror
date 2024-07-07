import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { MovieDescription } from './types';
import MovieCard from './components/movie-card/MovieCard';

export type SetMovieArrFunction = (arr: MovieDescription[]) => void;
export interface AppState {
  moviesArray: MovieDescription[];
}

export class App extends React.Component<{}, AppState> {
  /*   moviesArray: MovieDescription[] = []; */

  constructor(props: {}) {
    super(props);
    this.setMoviesArray = this.setMoviesArray.bind(this);
    this.state = {
      moviesArray: [] as MovieDescription[],
    };
  }

  setMoviesArray(arr: MovieDescription[]) {
    this.setState({ moviesArray: arr });
    console.log('state');
    console.log(this.state.moviesArray);
  }

  render(): React.ReactNode {
    return (
      <div className="app">
        <Header setMovieArray={this.setMoviesArray} />
        <div>
          {this.state.moviesArray.map((item, index) => {
            return <MovieCard key={index} movie={item} />;
          })}
        </div>
        {/*         <Main /> */}
      </div>
    );
  }
}

export default App;
