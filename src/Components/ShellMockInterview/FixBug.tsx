import React, { useState } from "react"
type FifBugProps = {

}
const FixBug: React.FC<FifBugProps> = () => {
    const [students, setStudents] = useState([{ id: 1, name: "a" }, { id: 2, name: "b" }, { id: 3, name: "c" }]);

    return (
        <div>
            {students.map((student,index) => {
                return (
                    <div key={student.id}>
                        {student.name}
                        {/* <input /> */}
                        <button
                            onClick={() => {
                                setStudents((names) => names.filter((name) => name.name != student.name))
                            }}
                        >x</button>
                    </div>
                )
            })}
        </div>
    )
}

export default FixBug