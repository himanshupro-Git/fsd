import Link from "next/link"
export default async function StudentDetails({ params }){
 const {id} = await params;
  const students = [
    {id: "1", name: "Rahul sharma", course: "React.js"},
    {id: "2", name: "Rohan verma", course: "Next.js"},
    {id: "3", name: "Rohit gupta", course: "Node.js"}
  ];

  console.log(params);
  const student = students.find(s => s.id === id);

  return(
    <div>
        <h1>Student Details</h1>
        {student ? (
            <div className="card">
                <h2>{student.name}</h2>
                <p>ID: {student.id}</p>

            </div>
        ): <p>Student not found</p>}
        <Link href="/students">Back to Students</Link>
    </div>
  );
}