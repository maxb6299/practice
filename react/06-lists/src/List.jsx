function List(props) {
    props.array.sort((a,b) => a.calories - b.calories);

    const listDiv = props.array.map(item => 
        <li key={item.id}>{item.name}: {item.calories} kCal</li>
    );
    
    return (
        <>
            <h2>{props.category}</h2>
            <ol>{listDiv}</ol>
        </>
    )
}

export default List