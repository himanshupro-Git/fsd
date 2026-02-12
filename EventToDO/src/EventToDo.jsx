export default function EventToDo()
{   function handleClick(name){
    alert(`The button is clicked by ${name}`);

    function handleBgColor(){
        
    }
}
  return(
    <div>
      <h1>Event Handling</h1>
      {/* <button onClick={handleClick}>Click Me</button> */}
      <button onClick={()=>handleClick("me")}>Click Me</button>
      <button onClick={handleBgColor}>change color</button>
    </div>
  )
}