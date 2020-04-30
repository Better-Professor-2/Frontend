import React, {useState, useeffect} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const AddDeadline = ({ studentId, setEditId, addDeadlines}) => {
     console.log(studentId)
    const [newDeadline, setNewDeadline] = useState({
        name: "",
        description: "",
        due_date: ""
    })

    const handleChanges = e => {
        setNewDeadline({...newDeadline, [e.target.name]: e.target.value})
        // setEditId({...})
    }

    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post(`/${studentId}/deadlines`, newDeadline)
        .then( res => {
            console.log(res)
            // setNewDeadline(newDeadline => [...newDeadline, res.data])
            addDeadlines(studentId, res.data)
        })
        .catch(err => {
            console.log("couldn't add deadline", err)
        })
    }
    console.log(newDeadline)

    return  (
        // id goes here
        <div>
            <p>ADD DEADLINE</p>
            <form onSubmit = {handleSubmit}>
                <label htmlFor="name">
                    
                    <input
                        type="text"
                        name="name"
                        value={newDeadline.name}
                        onChange={handleChanges}
                        placeholder="Deadline name"
                    />
                </label>

                <label htmlFor="description">
                    
                    <input
                        type="text"
                        name="description"
                        value={newDeadline.description}
                        onChange={handleChanges}
                        placeholder="Description"
                    />
                </label>

                <label htmlFor="due_date">
                    
                    <input
                        // type="date"
                        name="due_date"
                        value={newDeadline.due_date}
                        onChange={handleChanges}
                        placeholder="2020-05-01"
                    />
                </label>

                <button>Submit</button>
            </form>
        </div>
    )  
}

export default AddDeadline;