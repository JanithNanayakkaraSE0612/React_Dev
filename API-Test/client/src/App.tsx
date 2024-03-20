import { useEffect, useState} from 'react'

import './App.css'
interface Comment {
  id:number;
  name:string;
  email:String;
  body:String;
}
function App() {
  const[comments ,setComments] = useState<Comment[]>([]);
  const fetchData = async() =>{
      try {
      const response = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = response.json();
      setComments(data);
      } catch (error) {
        console.log(error);
      }
      
  };

  useEffect(()=>{
    fetchData();
  }),[];

  return (
   <div>
      <h1>Comments</h1>
      {
        comments.map((comments:Comment)=>(
          <div key={comments.id}>
            <h2>{comments.name}</h2>
            <p>{comments.email}</p>
            <p>{comments.body}</p>
          </div>
        ))
      }
   </div>
  );
}

export default App
