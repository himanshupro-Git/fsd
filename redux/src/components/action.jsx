export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"

export const addTodo = (text) => {
    return {
        action: ADD_TODO,
        payload: text
    }
}

export const deleteTodo = (id) => {
    return {
        action: DELETE_TODO,
        payload: id
    }
}   

export const toggleTodo = (id) => {
    return {
        action: TOGGLE_TODO,
        payload: id
    }
}