import {useSelector, useDispatch} from 'react-redux';
import {addTodo, deleteTodo, toggleTode} from './action';
import {useState} from 'react';

function Todo() {
    const [text, setText] = useState("");
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return(
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => dispatch(addTodo(text))}>Add</button>

            {todos.map(todo => (
                <div key={todo.id}>
                    <span 
                        onClick={() => dispatch(toggleTodo(todo.id))}
                        style={{textDecoration: todo.completed ? "line-through": "none", cursor: "pointer"}}
                    >
                        {todo.text}
                    </span>
                    <button onClick={() => dispatch(deleteTodo(todo.id))}>X</button>
                </div>
            ))}


        </div>
    )
};