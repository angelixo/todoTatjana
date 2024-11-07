import React from "react";
import { Section } from "../components/Section"

export const ToDoSection = () => {
    const [todos, setTodos] = React.useState([
        {
            task: 'Do something',
            completed: false,
        },
        {
            task: 'Stuff ',
            completed: true,
        }
    ]);
    const [newTodo, setNewTodo] = React.useState("");
    const [doneTodosCount, setDoneTodosCount] = React.useState()
   
    React.useEffect(() => {
        setDoneTodosCount(todos.filter(t => t.completed).length);
    }, [todos])

    const createNewTodo = () => {
        setTodos([...todos, {task: newTodo, completed: false}])
        setNewTodo("")
    }


    return <Section title="ToDos">
        <div className="resume">
            <div>There is a total of {todos.length} todos.</div>
            <div>Completed: {doneTodosCount}</div>
        </div>
        <div className="columns">
            <div className="column">
                {todos.map(todo => <div className="todo">
                    <input
                        type="checkbox"
                        checked={todo.completed ? 'checked' : ''}
                        onChange={(e) => setTodos(todos.map(t => {
                            if (todo.task == t.task) {
                                t.completed = e.target.checked
                            }
                            return t;
                        }))}
                    />
                    {todo.task}
                </div>)}
            </div>
        </div>
        <div className="newTodo">
            <input type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
            <button onClick={createNewTodo}>Create new ToDo</button>
        </div>

    </Section>
}