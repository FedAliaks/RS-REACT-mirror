import React from 'react';
import './styles.css';
import { MovieDescription } from '../../types';

/* https://www.omdbapi.com/?apikey=7c372dd6&&type=movie&s=terminator+2 */
/* https://omdbapi.com/ */

export type setMovieArrayType = (arr: MovieDescription[]) => void;

export interface HeaderProps {
  setMovieArray: setMovieArrayType;
}

type Props = Readonly<HeaderProps>;

export default class Header extends React.Component<Props> {
  searchRequest: string;

  constructor(props: Props) {
    super(props);
    this.searchRequest = localStorage.getItem('requestApi') || '';

    // Привязка методов к this
    this.clickBtn = this.clickBtn.bind(this);
    this.setRequestField = this.setRequestField.bind(this);
  }

  clickBtn(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log('click');
    console.log(this.searchRequest);
  }

  setRequestField(event: React.ChangeEvent<HTMLInputElement>) {
    this.searchRequest = event.target.value;
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
