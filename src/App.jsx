import { useState } from 'react';
import './App.css';
import { CiTrash } from "react-icons/ci";

export default function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Futbol",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Dars",
      isCompleted: false,
    },
    { 
      id: 3, 
      text: "Uxlash", 
      isCompleted: false 
    },
  ]);


  const handleChange = (e) => {
    setText(e.target.value);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));
  };


  return (
    <div className="App">
      <h1>Todo app</h1>
      <form>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        type="text" 
        placeholder='Text'
        />
      <h2>{text}</h2>


      <button onClick={(e) => {        e.preventDefault();
        setTodos([...todos, { id: Date.now(), text, isCompleted: false }]);
        setText('');
      }}>Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id} className={todo.isCompleted ? 'completed' : ''}>
            <div className="todo-left">
              <input 
                type="checkbox" 
                checked={todo.isCompleted} 
                onChange={() => toggleTodo(todo.id)}
              />
              <span className="todo-text">{todo.text}</span>
            </div>
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
              <CiTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
