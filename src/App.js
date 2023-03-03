import './index.css';
import items from './Components/AllData';
import Menu from './Components/Menu';
import Button from './Components/Button';
import { useState } from 'react';

// to avoid repeating the data 
const allCategories = ['All', ...new Set(items.map(item => item.categories))];

console.log(allCategories);

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  const filter = (button) => {
    if (button === 'All'){
      setMenuItem(items);
      return;
    }
    const filteredData = items.filter(item =>item.category === button )
    setMenuItem(filteredData);
  }
  return (
    <div className="App">
      <div className='title'>
        <h1>
          Portfolio
          <span>Alemba</span>
        </h1>
      </div>
      <Button button={buttons} filter={filter}/>
      <Menu menuItem={menuItem}/>
    </div>
  );
}

export default App;
