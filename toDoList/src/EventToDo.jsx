import './EventToDo.css'  
export default function EventToDo(){
    function handleSubmit(e){
        e.preventDefault();
        const input=e.target.task;
        const taskValue=input.value.trim();
        if(taskValue===""){
            alert("cannot add empty task")
            return;
    }
    const li=document.createElement("li");
    li.innerHTML=`<span>${taskValue}</span>
    <button class="deleteBtn">DELETE</button>`;
    document.getElementById("tasklist").appendChild(li);
}
    function handleListClick(e){
        if(e.target.className==="deleteBtn"){
            e.target.parentElement.remove();
        }
    }
    return(
        <>
        <h1>To do list</h1>
        <form onSubmit={handleSubmit}>
        <input className="inputTxt" type="text" name="task" placeholder="Enter your task" />
        <button type="submit">Add Task</button>
        </form>
        <ol id="tasklist" onClick={handleListClick}></ol>
        </>
    )
}