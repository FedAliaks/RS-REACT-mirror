import React from 'react';
import './styles.css';

export interface ButtonMainProps {
  content: string;
  isActive: boolean;
  clickHandler: () => void;
}

type Props = Readonly<ButtonMainProps>;

export default class ButtonMain extends React.Component<Props> {
  render() {
    return (
      <button
        disabled={!this.props.isActive}
        className={'button'}
        onClick={this.props.clickHandler}
      >
        {this.props.content}
      </button>
    );
  }
}
