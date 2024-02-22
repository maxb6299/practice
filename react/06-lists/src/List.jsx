function List() {
    let fruitList = [
        {id: 1, name: 'apple', calories: 90},
        {id: 2, name: 'banana', calories: 40},
        {id: 3, name: 'grapes', calories: 210},
        {id: 4, name: 'strawberries', calories: 70},
        {id: 5, name: 'orange', calories: 70},
    ];

    fruitList.sort((a,b) => a.calories - b.calories);

    fruitList = fruitList.filter(fruit => fruit.calories < 100);
    
    const fruitListDiv = fruitList.map(fruit => 
        <li key={fruit.id}>{fruit.name}: {fruit.calories} kCal</li>
    );
    
    return (
        <>
            <ol>{fruitListDiv}</ol>
        </>
    )
}

export default List