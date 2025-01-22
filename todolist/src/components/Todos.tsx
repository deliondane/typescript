import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../types';

interface TodosProps {
  items: Todo[];
  onClickDelete: (id:number) => void;
}

const Todos: React.FC<TodosProps> = ({items, onClickDelete}) => {
  return (
    <div>
      {items.map((todo)=>(
            <TodoItem key={todo.id} {...todo} onClickDelete={onClickDelete}/>
          ))}
    </div>
  );
};

export default Todos;