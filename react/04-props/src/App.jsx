import Student from './Student'

function App() {
  return (
    <>
      <Student name='John Doe' age={21} isStudent={true}></Student>
      <Student name='Jane Doe' age={22} isStudent={true}></Student>
      <Student name='Joseph Doe' age={30} isStudent={false}></Student>
    </>
  )
}

export default App