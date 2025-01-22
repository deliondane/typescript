import React from 'react';
import { Todo } from '../types';
import { useTodoDispatch } from '../App';

interface Props extends Todo{
  // onClickDelete: (id:number) => void;
}

const TodoItem = (props: Props) => {
  const dispatch = useTodoDispatch();
  const onClickDelete = () => {
    dispatch.onClickDelete(props.id)
  }
  return (
    <div className="todoItem">
      {props.id} : {props.content}
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
};

// const TodoItem: React.FC<Props> = ({onClickDelete, id, content}) => {
//   const onClickDelete = () => {
//     onClickDelete(id)
//   }
//   return (
//     <div className="todoItem">
//       {id} : {content}
//       <button onClick={onClickDelete}>삭제</button>
//     </div>
//   );
// };


export default TodoItem;