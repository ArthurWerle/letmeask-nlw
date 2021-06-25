import copyImg from '../assets/images/copy.svg';
import '../styles/clipboard.scss';

type ClipboardProps = {
  code: string;
}

export function Clipboard(props: ClipboardProps) {
  function copy() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <button className="clipboard" onClick={copy}>
      <div>
        <img src={copyImg} alt="Copiar" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  )
}