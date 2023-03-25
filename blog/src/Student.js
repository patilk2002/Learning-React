import React from 'react'

export default function Student(props) {
  return (
    <div>

        <h2>prop example</h2>
        <h3 style={{backgroundColor:"skyblue "}}>Hello {props.name}</h3>
        <h3 >Email : {props.email}</h3>
        <h3 >Address : {props.other.address}</h3>
        <h3 >Mobile : {props.other.Mobile}</h3>
        
    </div>
  )
}
