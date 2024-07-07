import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { MovieDescription } from './types';

export type SetMovieArrFunction = (arr: MovieDescription[]) => void;

export class App extends React.Component {
  moviesArray: MovieDescription[] = [];

  constructor(props: {}) {
    super(props);
    this.setMoviesArray = this.setMoviesArray.bind(this);
  }

  setMoviesArray(arr: MovieDescription[]) {
    this.moviesArray = arr;
    // Возможно, вам нужно будет что-то делать с moviesArray, например обновлять состояние
    console.log(this.moviesArray);
  }

  render(): React.ReactNode {
    return (
      <div className="app">
        <Header setMovieArray={this.setMoviesArray} />
        <Main />
      </div>
    );
  }
}

export default App;
