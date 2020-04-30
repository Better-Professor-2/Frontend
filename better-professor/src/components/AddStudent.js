import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const AddStudent = ({ setStudentList }) => {

    const [newStudent, setNewStudent] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: ""
    })

    const handleChanges = e => {
        setNewStudent({ ...newStudent, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth().post("https://better-professor-karavil.herokuapp.com/students", newStudent).then(res => {
            const student = res.data;
            setStudentList(studentList => [...studentList,student]);
        });
        setNewStudent({
            first_name: "",
            last_name: "",
            email: "",
            phone_number: ""
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first-name">
                    First Name:
                <input
                        type="text"
                        name="first_name"
                        value={newStudent.first_name}
                        onChange={handleChanges}
                    />
                </label>

                <label htmlFor="last-name">
                    Last Name:
                <input
                        type="text"
                        name="last_name"
                        value={newStudent.last_name}
                        onChange={handleChanges}
                    />
                </label>

                <label htmlFor="email">
                    Email:
                <input
                        type="email"
                        name="email"
                        value={newStudent.email}
                        onChange={handleChanges}
                    />
                </label>

                <label htmlFor="phone-number">
                    Phone Number
                <input
                        type="text"
                        name="phone_number"
                        onChange={handleChanges}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default AddStudent;