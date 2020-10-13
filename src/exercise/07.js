// Rendering Lists
// http://localhost:3000/isolated/final/07.js

import React from 'react'

const allItems = [
  { id: 'a', value: 'apple' },
  { id: 'o', value: 'orange' },
  { id: 'g', value: 'grape' },
  { id: 'p', value: 'pear' }
];

function App() {
  const [items, setItems] = React.useState([
    { id: 'a', value: 'apple' },
    { id: 'o', value: 'orange' },
    { id: 'g', value: 'grape' },
    { id: 'p', value: 'pear' }
  ]);


  React.useEffect(() => {
    const interval = setInterval(() => {
      setItems(shuffle(items));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  function addItem() {
    setItems([...items, allItems.find(i => !items.includes(i))])
  }

  function removeItem(item) {
    setItems(items.filter(i => i !== item))
  }

  return (
    <div
      style={{
        height: 200,
        width: 400,
        backgroundColor: '#eee',
        borderRadius: 4,
        padding: 20,
      }}
    >
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul style={{listStyle: 'none', paddingLeft: 0}}>
        {items.map(item => (
          <li key={item.id}>
            <button onClick={() => removeItem(item)}>remove</button>{' '}
            <label htmlFor={`${item.value}-input`}>{item.value}</label>{' '}
            <input id={`${item.value}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
    </div>
  )
  function shuffle(originalArray) {
    const array = [...originalArray];
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
}

export default App

