import React,{useState} from 'react'

const Change = () => {
    const [name , setName] = useState("");

    function handleNameChange (event){
        setName(event.target.value);
    }
  return (
    <div>
        <input value={name} onChange={handleNameChange}/>
        <p>Name : {name}</p>
    </div>
  )
}

export default Change
