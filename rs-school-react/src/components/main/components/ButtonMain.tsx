import React from 'react';
import './styles.css';

export interface ButtonMainProps {
  content: string;
  isActive: boolean;
  clickHandler: () => void;
}

export default function ButtonMain(props: ButtonMainProps) {
  return (
    <button
      disabled={!props.isActive}
      className={'button'}
      onClick={props.clickHandler}
    >
      {props.content}
    </button>
  );
}

/* type Props = Readonly<ButtonMainProps>;

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
} */
