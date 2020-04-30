import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import StudentCard from './StudentCard'
import AddStudent from './AddStudent'
import EditStudent from './EditStudent'
import AddDeadline from './AddDeadline'

const StudentPage = () => {

    const [studentList, setStudentList] = useState([])
    const [editId, setEditId] = useState(null);
    const [deadlines, setDeadlines] = useState(null);


    const getStudents = () => {
        axiosWithAuth()
        .get()
        .then( res => {
            console.log("from get students", res.data.students)
            setStudentList(res.data.students)
        })
        .catch(err => {
            console.log("couldn't get the students", err)
        })
    }


    const deleteStudent = (id) => {
        axiosWithAuth().delete(`/${id}`).then(res => {
            console.log('Deleted student'); 
            getStudents()
        }).catch(err => console.log(err));
    }


    // setStudentList(studentList => {...studentList, newStudent});
    useEffect(() => {
        getStudents()
    }, [])

    return (
     <>
     <h1>Student List</h1>
        Student List:
        <StudentCard deleteStudent={deleteStudent} setEditId={setEditId} students={studentList} updateStudents={setStudentList}/>
        Add Student:
        <AddStudent setStudentList={setStudentList}/>
        <EditStudent studentId={editId} setStudentList={setStudentList} />
        {/* <AddDeadline studentId={editId} setEditId={setEditId}/> */}
     </>
    )
}
export default StudentPage;