const name = "Janith Nanayakkara"
const position = "Full Stack Developer"
const myObj={
    name :`${name}`,
    position :`${position}`,
    city : 'Galle'
}
function Main(props){
   const {city} = myObj
   console.log(props);
    return(<div>This is Main Components
        <ul>
            <li>{myObj.name}</li>
            <li>{myObj.position}</li>
            <li>{city}</li>
            <li>JavaScript</li>
        </ul>
        {
            props.children
        }
    </div>)
}

export default Main