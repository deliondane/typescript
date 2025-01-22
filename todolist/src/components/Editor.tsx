import React, {useState} from 'react';
import { useTodoDispatch} from '../App';

// interface Props {
//   onClickAdd: (text: string) => void;
// }

// const Editor = (props: Props) => {
const Editor: React.FC = () => {
  const dispatch = useTodoDispatch();
  const [text, setText] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  };
  const onClickAddButton = () => {
    dispatch.onClickAdd(text);
    setText("");
  }

  const enterkey = (e: React.KeyboardEvent<HTMLInputElement> ) => {
    if (e.key === 'Enter'){
      e.preventDefault();
      onClickAddButton();
    }
  };
  return (
    <div className="todoInputWrap">
      <input value={text} onChange={onChangeInput} onKeyDown={enterkey}/>
      <button onClick={onClickAddButton}>추가</button>
    </div>
  );
};

export default Editor;