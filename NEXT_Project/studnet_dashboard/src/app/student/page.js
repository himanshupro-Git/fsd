import Link from "next/link"
export default function Student()
{
    const Students = [
        { id: "1", name: "Rahul sharma"},
        { id: "2", name: "Rohan verma"},
        { id: "3", name: "Rohit gupta"}
    ]
    return(
        <div>
            <h1> Student List</h1>
            {Students.map((s)=>(
                <div key={s.id} className="card"> 
                <Link href={`/student/${s.id}`}>
                    {s.name}
                </Link>
                </div>
            ))}
            <Link href="/">Home</Link>
        </div>
    )
}