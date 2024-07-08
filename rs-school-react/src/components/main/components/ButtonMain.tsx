import React from 'react';

export interface ButtonMainProps {
  content: string;
  isActive: boolean;
}

type Props = Readonly<ButtonMainProps>;

export default class ButtonMain extends React.Component<Props> {
  render() {
    return (
      <button
        className={this.props.isActive ? 'button button_active' : 'button'}
      >
        {this.props.content}
      </button>
    );
  }
}
