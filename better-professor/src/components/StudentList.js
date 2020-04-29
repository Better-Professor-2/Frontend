import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {
    Card, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';

const StudentList = ({students}) => {

    //delete goes here


    const cardStyles = {
        width: '27%',
        boxShadow: '1px 1px 2.5px 2px #ccc',
        margin: '2% 0%',
        boxSizing: 'border-box',
        padding: '1.5%',
        borderRadius: '5%',

    }

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>{
            students.map(student => (
                <Card key={student.id} style={cardStyles}>
                    <CardBody>
                        <CardTitle>
                            {student.first_name && student.last_name}
                        </CardTitle>
                        <CardText>
                            {student.email}
                            {student.phone_number}
                        </CardText>
                        <button>View Projects</button>
                    </CardBody>
                </Card>)
            )
        }</div>
    )
}
export default StudentList;