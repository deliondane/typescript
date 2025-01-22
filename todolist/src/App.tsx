import React, { useState, useRef, useEffect, useReducer, useContext } from 'react';
import './App.css';
import Editor from './components/Editor';
import Todos from './components/Todos';
import { Todo } from './types';

type Action = 
  | { type: "CREATE"; data: { id: number; content: string; } }
  | { type: "DELETE"; id: number; }

function reducer( state: Todo[], action: Action){
  switch(action.type){
    case "CREATE": {
      return [...state, action.data]
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.id)
    }
  }
}

export const TodoStateContext = React.createContext<Todo[] | null>(null);
export const TodoDispatchContext = React.createContext<
  {
    onClickAdd: (text: string) => void;
    onClickDelete: (id: number) => void;
  } | null > (null);

export function useTodoDispatch(){
  const dispatch = useContext(TodoDispatchContext);
  if(!dispatch) throw new Error("에러 발생");
  return dispatch;
}


function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);
  const [todos, dispatch] = useReducer(reducer, []);

  const idRef = useRef(1);

  const onClickAdd = (text: string) => {
    // setTodos([
    //   ...todos,
    //   {
    //     id:idRef.current++,
    //     content: text
    //   }
    // ]);
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: text,
      }
    })
  }

  const onClickDelete = (id:number) => {
    // setTodos(todos.filter((todo) => todo.id !== id ))
    dispatch({
      type: "DELETE",
      id: id,
    })
  }

  useEffect(()=> {
    console.log(todos)
  },[todos])
  return (
    <div className="App">
      <h1>TodoList</h1>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{onClickAdd, onClickDelete}}>
          <div className="todoInputWrap">
            {/* <Editor onClickAdd={onClickAdd}/> */}
            <Editor />
          </div>
          <div className="listWrap">
            {/* <Todos items={todos} onClickDelete={onClickDelete}/> */}
            <Todos items={todos}/>
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
