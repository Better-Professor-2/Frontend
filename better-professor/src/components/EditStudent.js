import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'


const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: ""
}


const EditStudent = ({ setStudentList, studentId }) => {
    const [studentToEdit, setStudentToEdit] = useState({})

    useEffect(() => {
        if (studentId) {
            axiosWithAuth().get(`/${studentId}`).then(res => {
                setStudentToEdit(res.data.student);
            }).catch(err => console.log(err)); 
        }
    }, [studentId])

    const handleChanges = e => {
        e.preventDefault()

        let value = e.target.value
        setStudentToEdit({ ...studentToEdit, [e.target.name]: value })
    }


    const editValue = e => {
        e.preventDefault();
        
        axiosWithAuth()
            .patch(`/${studentId}`, {
                first_name: studentToEdit.first_name,
                last_name: studentToEdit.last_name,
                email: studentToEdit.email,
                phone_number: studentToEdit.phone_number
            })
            .then(res => {
                console.log(res)
                setStudentList(students => students.map(student => {
                    if (student.id === res.data.student.id) {
                        return res.data.student;
                    }
                    return student;
                }))
            })
            .catch(err => {
                console.log("couldn't edit student", err.response.data)
            })
    }



    return (
        studentId ?
        <div>
            <form onSubmit={editValue}>
                Editing student {studentId}
                <label htmlFor="first-name">
                    First Name:
                <input
                        type="text"
                        name="first_name"
                        value={studentToEdit.first_name}
                        onChange={handleChanges}
                    />
                </label>

                <label htmlFor="last-name">
                    Last Name:
                <input
                        type="text"
                        name="last_name"
                        value={studentToEdit.last_name}
                        onChange={handleChanges}
                    />
                </label>

                <label htmlFor="email">
                    Email:
                <input
                        type="email"
                        name="email"
                        value={studentToEdit.email}
                        onChange={handleChanges}
                    />
                </label>

                <label htmlFor="phone_number">
                    Phone Number
                <input
                        type="text"
                        name="phone_number"
                        onChange={handleChanges}
                        value={studentToEdit.phone_number}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div> : 'Click edit to edit a student'
    )


}
export default EditStudent;