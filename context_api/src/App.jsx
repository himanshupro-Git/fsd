import {useContext, useState} from 'react';
import {ThemeContext, LangContext, GlobalContext} from './context';
import Appprovider from './Appprovider';
const App=()=>{

  const [state, dispatch] = useContext(GlobalContext);
  const [theme, user,lang] = state;

  return(
    <div>
      <div style={{background: theme === 'dark' ? '#333' : '#FFF'}}/>
      <p>
        Theme: {theme} <button onClick={()=>dispatch({type:TOOGLE_THEME})}>ThemeChange</button>
      </p>
      <p>
        Language: {lang} <button onClick={()=>dispatch({type:SET_LANG,payload:"en"})}>en</button>

      </p>
      <p>
        User: {user.name} <button onClick={()=>dispatch({type:SET_USER,payload:"fr"})}>fr</button>
      </p>
    </div>
  )

}
export default App;