function Main(props){
    return(<div>This is Main Components
        <ul>
            <li>Java</li>
            <li>React</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
        {
            props.children
        }
    </div>)
}

export default Main