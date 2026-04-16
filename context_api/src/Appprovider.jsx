import {useReducer} from 'react';
import {ThemeContext, LangContext, UserContext, GlobalContext} from './context';


// reducer decides how state changes where action tells what to do
function reducer(state, action){
    switch(action.type)
    {
        case "TOOGLE_THEME":
            return{
                ...state,
                theme:state.theme === "light"?"dark":"light"
            };

        case "SET_USER":
            return{
                ...state,
                user:action.payload
            };
        default:
            return state;
    }
}


const Appprovider=({children})=>{
    const initialState={
        theme:"light",
        user:{name:"Guest"},
        lang:"end"
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
    // <ThemeContext.Provider value={{ state, dispatch }}>
    //     <LangContext.Provider value={{ state, dispatch }}>
    //         <UserContext.Provider value={{ state, dispatch }}>
    //             {children}
    //         </UserContext.Provider>
    //     </LangContext.Provider>
    // </ThemeContext.Provider>
    <GlobalContext.Provider value={{state, dispatch}}>
        {children}
    </GlobalContext.Provider>
    )
}
export default Appprovider;