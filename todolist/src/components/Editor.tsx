import React, {useState} from 'react';

interface Props {
  onClickAdd: (text: string) => void;
}

const Editor = (props: Props) => {
  const [text, setText] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  };
  const onClickAddButton = () => {
    props.onClickAdd(text);
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