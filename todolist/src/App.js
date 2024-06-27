import './App.css';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

function App() {
  const currentDate = new Date();
const currentDay = currentDate.getDay(); 
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayName = daysOfWeek[currentDay];



  const [toDos, setTodos] = useState([]);
  const [removedTodos, setRemovedTodos] = useState([]);
  const [toDo, setTodo] = useState('');

  const addTodo = () => {
    if (toDo.trim() !== '') {
      setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]);
      setTodo('');
    }
  };

  const removeTodo = (id) => {
    const todoToRemove = toDos.find((todo) => todo.id === id);
    if (todoToRemove) {
      setTodos(toDos.filter((todo) => todo.id !== id));
      setRemovedTodos([...removedTodos, todoToRemove]);
    }
  };

  const toggleTodoStatus = (id, status) => {
    setTodos(
      toDos.map((todo) =>
        todo.id === id ? { ...todo, status } : todo
      )
    );
  };

  return (
    <div className="app">
      <Helmet>
        <link rel="icon" type="image/png" href="/path/to/my-custom-icon.png" sizes="16x16" />
      </Helmet>
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {dayName} 🌝 ☕</h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={addTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        <div className="active-todos">
          <h3>Active Todos</h3>
          {toDos.filter((obj) => !obj.status).map((obj) => (
            <div className="todo" key={obj.id}>
              <div className="left">
                <input
                  onChange={(e) => toggleTodoStatus(obj.id, e.target.checked)}
                  checked={obj.status}
                  type="checkbox"
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i
                  onClick={() => removeTodo(obj.id)}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          ))}
        </div>
        <div className="completed-todos">
          <h3>Completed Todos</h3>
          {toDos.filter((obj) => obj.status).map((obj) => (
            <div className="todo" key={obj.id}>
              <div className="left">
                <input
                  onChange={(e) => toggleTodoStatus(obj.id, e.target.checked)}
                  checked={obj.status}
                  type="checkbox"
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i
                  onClick={() => removeTodo(obj.id)}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          ))}
        </div>
        <div className="removed-todos">
          <h3>Removed Todos</h3>
          {removedTodos.map((obj) => (
            <div className="todo" key={obj.id}>
              <p>{obj.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
