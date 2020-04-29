import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

//   import {axiosWithAuth} from 'axiosWithAuth';
  const url = 'https://better-professor-karavil.herokuapp.com/students';
  const thisguy = [
      require('./logo.svg'),
      require('./logo.svg'),
      require('./logo.svg'),
      require('./logo.svg'),
      require('./logo.svg'),
      require('./logo.svg'),
      require('./logo.svg'),
      require('./logo.svg'),
      require('./logo.svg'),
      require('./logo.svg'),
      require('./logo.svg'),
      require('./logo.svg'),]
// const cards = 

// ))
const StudentCards = (props)=>{
    const [students, setStudents]= useState([])

    useEffect(()=>{
        axios.get(url)
         .then(res=>{
             console.log(res.data)
         })
    },[students])

    const Card = {
        width: '27%',
        boxShadow: '1px 1px 2.5px 2px #ccc',
        margin:'2% 0%',
        boxSizing:'border-box',
        padding: '1.5%',
        borderRadius:'5%',
        
    }

    
    return(
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>{
        thisguy.map(student=>(
        <Card style={cardStyles}>
            <CardImg top width='100%' src={student}/>
            <CardBody>
                <CardTitle>
                    {'Lorem ipsum'}
                </CardTitle>
                <CardText>
                    {'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, molestias, itaque, repellendus eum perferendis illo commodi consectetur unde nostrum quidem at quisquam saepe harum recusandae vero ducimus incidunt tenetur aliquam?'}
                </CardText>
                <button>View Projects</button>
            </CardBody>
        </Card>)
        )
        }</div>
        )
        

}


export default StudentCards