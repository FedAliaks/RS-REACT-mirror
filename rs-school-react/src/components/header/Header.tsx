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
  setSearchRequest: React.Dispatch<React.SetStateAction<string>>;
  searchRequest: string;
}

export default function Header(props: HeaderProps) {
  const { setMovieArray, setIsLoading, searchRequest, setSearchRequest } =
    props;

  function setRequestField(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchRequest(event.target.value);
  }

  function clickBtn(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    localStorage.setItem('requestApi', searchRequest);
    getMoviesArrayFromServer();
  }

  async function getMoviesArrayFromServer(page: number = 1) {
    setIsLoading(true);
    const searchField = searchRequest.split(' ').join('+');
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=7c372dd6&&type=movie&s=${searchField}&page=${page}`
    );
    if (response.data.Response === 'True') {
      setMovieArray(response.data.Search);
    } else {
      setMovieArray([]);
    }
    setIsLoading(false);
  }

  return (
    <header className="header">
      <form className="header-form">
        <input
          type="text"
          placeholder={searchRequest}
          onChange={setRequestField}
          className="header-input"
        ></input>
        <button className="header-button" onClick={clickBtn}>
          Search
        </button>
      </form>
    </header>
  );
}
