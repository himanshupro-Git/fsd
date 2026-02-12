export default function EventToDo()
{   function handleClick(){
    alert("You just clicked the Button!!");
}
  return(
    <div>
      <h1>Event Handling</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}