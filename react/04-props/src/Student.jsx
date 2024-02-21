function Student(props) {
    return (
        <>
        <div className='student'>
          <div>Name: {props.name}</div>  
          <div>Age: {props.age}</div>  
          <div>Student: {props.isStudent ? 'Yes' : 'No'}</div>  
        </div>
        </>
    )
}

export default Student