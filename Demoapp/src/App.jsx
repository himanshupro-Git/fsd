import userCard from "./userCard";

export default function App(){
  const users = [
    {
      name:"Virat kohli",
      role:"BatsMaan",
      country:"India",
    },
    {
      name:"MS. Dhoni",
      role:"BatsMaan",
      country:"India",
    }
  ]

  return(
    <div>
      <h1>User Dhashboard</h1>
      <Wrapper title="User List">
        {
          user.map((user,index)=>(
            <userCard key={index} user={user}/>
          ))
        }
        <userCard/>

      </Wrapper>
    </div>
  );
}