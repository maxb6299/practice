function Student(props) {
    return (
        <>
          <div>Name {props.name}</div>  
          <div>Age {props.age}</div>  
          <div>Student? {props.isStudent ? 'Yes' : 'No'}</div>  
        </>
    )
}

export default Student