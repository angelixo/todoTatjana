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
    const [errors, setErrors] = React.useState([]);
    const [doneTodosCount, setDoneTodosCount] = React.useState()

    React.useEffect(() => {
        setDoneTodosCount(todos.filter(t => t.completed).length);
    }, [todos])

    React.useEffect(() => {
        setErrors([])
    }, [newTodo])

    const createNewTodo = () => {
        const errors = validateNewTodo()

        if (errors.length) {
            setErrors(errors);
            return;
        }

        setTodos([...todos, { task: newTodo, completed: false }])
        setNewTodo("")
    }

    const validateNewTodo = () => {
        const errors = [];

        if (newTodo.trim().length <= 3) {
            errors.push("Write something more...")
        }

        return errors;
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
        <div className="form-container" style={{ maxWidth: '200px' }}>
            <input type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            {errors.length ? errors[0] : ''}
            <button onClick={createNewTodo}>Create new ToDo</button>
        </div>

    </Section>
}