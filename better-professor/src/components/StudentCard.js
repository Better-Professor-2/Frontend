import React, { useState, useEffect } from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import AddDeadline from './AddDeadline'


const StudentCard = ({ students, setEditId, deleteStudent }) => {

    const [student, setStudent] = useState()

    useEffect(() => {
        setStudent(students)

    }, [students])


    const addDeadlines = (id, newDead) => {
        setStudent(student.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    deadlines: [
                        ...item.deadlines, newDead
                    ]
                        
                    
                }

            } else {
                return item
            }
        }))
    }

    console.log(students);

    const cardStyles = {
        width: '27%',
        boxShadow: '1px 1px 2.5px 2px #ccc',
        margin: '2% 0%',
        boxSizing: 'border-box',
        padding: '1.5%',
        borderRadius: '5%',

    }

    const printDeadlines = deadlines => {
        console.log(deadlines);
        const deadlinesFormatted = deadlines.map(deadline => <p>{deadline.name}, due {new Date(deadline.due_date).toDateString()}</p>)
        return <CardText>{deadlinesFormatted}</CardText>
    }

    return (

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>{
            student && student.map(student => (
                <Card key={student.id} style={cardStyles}>
                    <CardBody>
                        <CardTitle>
                            {student.first_name}
                            {student.last_name}
                        </CardTitle>
                        <CardText>
                            {student.email}
                            {student.phone_number}
                        </CardText>

                        {student.deadlines ? printDeadlines(student.deadlines) : 'No deadlines'}

                        {/* pass edit component here */}
                        <button onClick={() => setEditId(student.id)}>Edit</button>
                        <button onClick={() => deleteStudent(student.id)}>Delete</button>

                        {/* <button onClick={() => setDeadlineId(student.id)}>Add Deadline</button> */}
                        <AddDeadline studentId={student.id}  addDeadlines={addDeadlines}/>
                    </CardBody>
                </Card>)
            )
        }</div>
    )
}
export default StudentCard;