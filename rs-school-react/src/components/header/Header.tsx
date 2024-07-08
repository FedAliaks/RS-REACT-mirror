import React from 'react';
import './styles.css';
import { MovieDescription } from '../../types';
import axios from 'axios';

/* https://www.omdbapi.com/?apikey=7c372dd6&&type=movie&s=terminator+2 */
/* https://omdbapi.com/ */

export type setMovieArrayType = (arr: MovieDescription[]) => void;

export interface HeaderProps {
  setMovieArray: setMovieArrayType;
  setIsLoading: (isLoad: boolean) => void;
}

type Props = Readonly<HeaderProps>;

export default class Header extends React.Component<Props> {
  searchRequest: string;

  constructor(props: Props) {
    super(props);
    this.searchRequest = localStorage.getItem('requestApi') || '';
    if (this.searchRequest) {
      this.getMoviesArrayFromServer();
    }

    // Привязка методов к this
    this.clickBtn = this.clickBtn.bind(this);
    this.setRequestField = this.setRequestField.bind(this);
  }

  clickBtn(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log('click');
    console.log(this.searchRequest);
    localStorage.setItem('requestApi', this.searchRequest);
    this.getMoviesArrayFromServer();
  }

  setRequestField(event: React.ChangeEvent<HTMLInputElement>) {
    this.searchRequest = event.target.value;
  }

  async getMoviesArrayFromServer(page: number = 1) {
    this.props.setIsLoading(true);
    const searchField = this.searchRequest.split(' ').join('+');
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=7c372dd6&&type=movie&s=${searchField}&page=${page}`
    );
    console.log(response);
    if (response.data.Response === 'True') {
      this.props.setMovieArray(response.data.Search);
    } else {
      this.props.setMovieArray([]);
    }
    this.props.setIsLoading(false);
  }

  render() {
    return (
      <header className="header">
        <form>
          <input
            type="text"
            placeholder={this.searchRequest}
            onChange={this.setRequestField}
          ></input>
          <button className="header__button" onClick={this.clickBtn}>
            Search
          </button>
        </form>
      </header>
    );
  }
}
