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
