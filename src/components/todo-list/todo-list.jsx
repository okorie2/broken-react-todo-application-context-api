 /* eslint-disable */
import * as React from 'react';
import { Checkbox } from '../checkbox';
import { TodosContext } from '../../todo-context';
import './todo-list.scss';

export const TodoList = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
 
console.log(todos, 'array')

  const handleDelete = (id) => {
    console.log(id)
   setTodos( todos.filter((fil)=>{
     
      return  fil.id != id
    }))
    // Fix an ability to delete task
  };

  const toggleCheck = (id) => {
    setTodos(todos.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          checked: !el.checked,
        };
      }
  
      // console.log(checked, 'el')
      return el;
    }));
  };

  // const handleKeyUp = (e, id) => {
  //   if (e.keyCode === 13) {
  //     toggleCheck(id);
  //   }
  // };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              // onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">Looks like you&apos;re absolutely free today!</div>
      )}
    </div>
  );
};
