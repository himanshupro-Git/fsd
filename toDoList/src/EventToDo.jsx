export default function EventToDo(){
    function handleSubmit(e){
        e.preventDefault();  // prevent the page reloading
        const input = e.target.value;
        const taskValue = input.value.trim();
        if(taskValue === ""){
            alert("cannot add empty taks");
            return;
        }

        const li = document.createElement("li");
        li.innerHTML = `<span>${taskValue}</span>
        <button class="deleteBtn">Delete</button>`;

        document.getElementById("taskList").appendChild(li);
    }

    function handleListClick(e){
        if(e.target.className==="deleBtn"){
            e.target.parentElement.remove();
        }
    }

    return(
        <>
        <h1>To Do list</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="tast" placeholder="Enter the Task" id="" />
            <button type="submit">Add Task</button>
        </form>
        <ul id="tasklist" onClick={handleListClick}></ul>
        
        </>
    )
}