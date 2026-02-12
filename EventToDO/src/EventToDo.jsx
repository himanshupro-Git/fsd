export default function EventToDo()
{   function handleClick(name){
    alert(`The button is clicked by ${name}`)
}
  return(
    <div>
      <h1>Event Handling</h1>
      {/* <button onClick={handleClick}>Click Me</button> */}
      <button onClick={()=>handleClick("me")}>Click Me</button>
    </div>
  )
}