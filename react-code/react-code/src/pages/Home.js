import React from 'react'
import TopicBox from '../components/TopicBox'
import Content from '../components/Content'

export default function home() {
  return (
    <div>
      <h1>This is Home Page</h1>
      <TopicBox food="kottu" price="Rs 250">
        <span>This is the description</span>
      </TopicBox>
      <TopicBox food="Rice" price="Rs 550">
        <button>This is a Button</button>
      </TopicBox>
      <TopicBox food="Hoppers" price="Rs 450"/>
       <Content/>
    </div>
  )
}
