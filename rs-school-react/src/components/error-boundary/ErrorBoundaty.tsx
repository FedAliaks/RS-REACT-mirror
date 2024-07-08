import React, { ErrorInfo, ReactNode } from 'react';
import Fallback from './components/Fallback';

export interface ErrorBoundaryProps {
  children?: ReactNode;
}
type Props = Readonly<ErrorBoundaryProps>;

type State = {
  hasError: boolean;
};

export default class MyErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(123);
    console.error('Error: ', error, info);
  }

  render() {
    if (this.state.hasError) {
      {
        console.log('here');
      }
      return <Fallback />;
    }

    return this.props.children;
  }
}
