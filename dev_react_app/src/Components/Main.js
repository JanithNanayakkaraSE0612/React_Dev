function Main(props){
    const name = "Janith Nanayakkara"
    const position = "Full Stack Developer"
    return(<div>This is Main Components
        <ul>
            <li>{name}</li>
            <li>{position}</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
        {
            props.children
        }
    </div>)
}

export default Main