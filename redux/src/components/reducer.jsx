import { createSlice } from "@reduxjs/toolkit";
import { addTodo, toggleTodo } from "./action";

const intialState = {
  todos: []
};

// export const todoReducer = (state = intialState, action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       return {
//         ...state,
//         todos: [...state.todos,{ id: Date.now(), text: action.payload, completed: false }]
//       };
//     case "DELETE_TODO":
//       return {
//         ...state,
//         todos: state.todos.filter(todo => todo.id !== action.payload)
//       };
//     case "TOGGLE_TODO":
//       return {
//         ...state,
//         todos: state.todos.map(todo =>
//             todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
//         )
        
//       };
//     default:
//       return state;
//   }
// };

// we will create slicer now and we will not write the above code for reducer

const todoSlice = createSlice({
  name:"todo",
  initialState,
  reducer:
  {
    addTodo:(state, action)=>{
      state.todo.push(
        {
          id:Date.now(),
          text:action.payload,
          completed:false
        }
      )

    },

    deleteTodo:(state, action)=>{
      state.todos
    },

    toggleTodo:(state, action)=>{

    }
  }

})

export const {addTodo, deleteTodo, toggleTodo} = todoSlice.action
export default todoSlice.reducer;