import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../types';

interface TodosProps {
  items: Todo[];
  // onClickDelete: (id:number) => void;
}

// const Todos: React.FC<TodosProps> = ({items, onClickDelete}) => {
const Todos: React.FC<TodosProps> = ({items}) => {
  return (
    <div>
      {items.map((todo)=>(
            <TodoItem key={todo.id} {...todo}/>
          ))}
    </div>
  );
};

export default Todos;