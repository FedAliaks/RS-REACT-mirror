import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { MovieDescription } from './types';

export type SetMovieArrFunction = (arr: MovieDescription[]) => void;
export interface AppState {
  moviesArray: MovieDescription[];
  countResults: number;
  isLoading: boolean;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [moviesArray, setMoviesArray] = useState<MovieDescription[]>([]);
  const [countResults] = useState(0);
  const [inProcess, setInProcess] = useState<JSX.Element | null>(null);
  const [mainComponent, setMainComponent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    setMainComponent(
      <Main moviesArray={moviesArray} countResults={countResults} />
    );
  }, [moviesArray, countResults]);

  useEffect(() => {
    if (isLoading) {
      setInProcess(
        <div className="main">
          <p className="process-msg">in Process</p>
        </div>
      );
    } else {
      setInProcess(null);
    }
  }, [isLoading]);

  return (
    <div className="app">
      <Header setIsLoading={setIsLoading} setMovieArray={setMoviesArray} />
      <div>
        {mainComponent}

        {inProcess}
      </div>
    </div>
  );
}

/* export class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.setMoviesArray = this.setMoviesArray.bind(this);
    this.setIsLoading = this.setIsLoading.bind(this);
    this.state = {
      moviesArray: [] as MovieDescription[],
      countResults: 0,
      isLoading: false,
    };
  }

  setIsLoading(isLoad: boolean) {
    this.setState({ isLoading: isLoad });
  }

  setMoviesArray(arr: MovieDescription[]) {
    this.setState({ moviesArray: arr });
  }

  render(): React.ReactNode {
    return (
      <div className="app">
        <Header
          setIsLoading={this.setIsLoading}
          setMovieArray={this.setMoviesArray}
        />

        {!this.state.isLoading ? (
          <Main
            moviesArray={this.state.moviesArray}
            countResults={this.state.countResults}
          />
        ) : (
          <div className="main">
            <p className="process-msg">in Process</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
 */
