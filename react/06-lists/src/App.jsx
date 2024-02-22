import List from './List'

function App() {
  const fruitList = [
        {id: 1, name: 'apple', calories: 90},
        {id: 2, name: 'banana', calories: 40},
        {id: 3, name: 'grapes', calories: 210},
        {id: 4, name: 'strawberries', calories: 70},
        {id: 5, name: 'orange', calories: 70}
      ];

  const vegetableList = [
    {id: 1, name: 'broccoli', calories: 30},
    {id: 2, name: 'carrots', calories: 30},
    {id: 3, name: 'cauliflower', calories: 50},
    {id: 4, name: 'peas', calories: 70},
    {id: 5, name: 'corn', calories: 10}
  ]
    
  
  return (
    <>
      <List array={fruitList} category='Fruits' />
      <List array={vegetableList} category='Vegetables' />
    </>
  )
}

export default App