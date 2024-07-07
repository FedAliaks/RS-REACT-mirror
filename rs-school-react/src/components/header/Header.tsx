import React from 'react';
import './styles.css';

/* https://www.omdbapi.com/?apikey=7c372dd6&&type=movie&s=terminator+2 */
/* https://omdbapi.com/ */

export default class Header extends React.Component {
  searchRequest = '';

  constructor() {
    super(1);
    this.searchRequest = localStorage.getItem('requestApi') || '';
  }

  clickBtn(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
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
            onChange={(e) => this.setRequestField(e)}
          ></input>
          <button className="header__button" onClick={(e) => this.clickBtn(e)}>
            Search
          </button>
        </form>
      </header>
    );
  }
}
