import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { MovieDescription } from './types';

export type SetMovieArrFunction = (arr: MovieDescription[]) => void;
export interface AppState {
  moviesArray: MovieDescription[];
  countResults: number;
}

export class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.setMoviesArray = this.setMoviesArray.bind(this);
    this.state = {
      moviesArray: [] as MovieDescription[],
      countResults: 0,
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
        <Main
          moviesArray={this.state.moviesArray}
          countResults={this.state.countResults}
        />
      </div>
    );
  }
}

export default App;
