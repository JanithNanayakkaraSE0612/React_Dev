import React from 'react'
import './topicbox.css'

export default function TopicBox() {
    const topic = "My Favarite Food Is Rice"
    const item = ".add kottu"
  return (
    <div>
       <div className="topicbox">
            <span className='text'>This is the Topic
            <br></br>{topic}{item}{alert("hello")}</span>
       </div>
    </div>
  )
}
