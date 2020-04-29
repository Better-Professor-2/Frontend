import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import StudentList from './StudentList'
import AddStudent from './AddStudent'

const StudentPage = () => {

    const [studentList, setStudentList] = useState([])

    const getStudents = () => {
        axiosWithAuth()
        .get("https://better-professor-karavil.herokuapp.com/students")
        .then( res => {
            console.log("from get students", res.data.students)
            setStudentList(res.data.students)
        })
        .catch(err => {
            console.log("couldn't get the students", err)
        })
    }

    // setStudentList(studentList => {...studentList, newStudent});
    useEffect(() => {
        getStudents()
    }, [])

    return (
     <>
     <h1>I am rendered</h1>
        Student List:
        <StudentList students={studentList} updateStudents={setStudentList}/>
        Add Student:
        <AddStudent setStudentList={setStudentList}/>
     </>
    )
}
export default StudentPage;