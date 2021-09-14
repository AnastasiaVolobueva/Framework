import React  from 'react'
import TodoList from './todo/TodoList'
import Context from './context'
import AddTodo from './todo/add'

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Task 1'},
    { id: 2, completed: false, title: 'Task 2'},
    { id: 3, completed: false, title: 'Task 3'}
  ])



  function toggleTodo(id) {
    setTodos(
      todos.map( todo => {
        if (todo.id ===id) {
          todo.completed = !todo.completed
        }
        return todo 
      })
    )
  }

  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed :false
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
  <div className='title'>
    <h1 className='h1'>Task</h1>
    <AddTodo onCreate={addTodo} />
    
    <TodoList todos={todos} onToggle={toggleTodo}/>
  </div>
  </Context.Provider>

  )
}

export default App;
